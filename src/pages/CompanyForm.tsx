
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const companySchema = z.object({
  company_name: z.string().min(1, "Nome da empresa é obrigatório"),
  cnpj: z
    .string()
    .min(14, "CNPJ deve ter pelo menos 14 caracteres")
    .max(18, "CNPJ deve ter no máximo 18 caracteres"),
});

const CompanyForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      company_name: "",
      cnpj: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof companySchema>) => {
    setIsLoading(true);
    try {
      // Verificar se o usuário está autenticado
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        toast.error("Você precisa estar logado para adicionar uma empresa");
        navigate("/auth");
        return;
      }

      const userId = sessionData.session.user.id;

      // Verificar se já existe um perfil principal sem empresa
      const { data: profileData } = await supabase
        .from("profiles")
        .select("company_name, cnpj")
        .eq("id", userId)
        .single();

      if (!profileData || (!profileData.company_name && !profileData.cnpj)) {
        // Se o perfil não tiver empresa, atualizamos o perfil principal
        const { error: profileError } = await supabase
          .from("profiles")
          .update({
            company_name: data.company_name,
            cnpj: data.cnpj,
          })
          .eq("id", userId);

        if (profileError) {
          throw profileError;
        }
      } else {
        // Se já tiver uma empresa no perfil principal, criamos uma nova na tabela companies
        const { error: companyError } = await supabase
          .from("companies")
          .insert({
            user_id: userId,
            company_name: data.company_name,
            cnpj: data.cnpj,
          });

        if (companyError) {
          throw companyError;
        }
      }

      toast.success("Empresa adicionada com sucesso!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(`Erro ao adicionar empresa: ${error.message}`);
      console.error("Erro ao adicionar empresa:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Adicionar Nova Empresa</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da sua empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input placeholder="00.000.000/0000-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="w-full"
            >
              Cancelar
            </Button>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CompanyForm;
