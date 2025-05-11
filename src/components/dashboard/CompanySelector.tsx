
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type CompanyWithId = {
  id: string;
  company_name: string | null;
  cnpj: string | null;
};

type CompanySelectorProps = {
  userId: string;
  currentCompany: CompanyWithId | null;
  onCompanyChange: (company: CompanyWithId) => void;
};

export const CompanySelector = ({
  userId,
  currentCompany,
  onCompanyChange,
}: CompanySelectorProps) => {
  const [companies, setCompanies] = useState<CompanyWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, company_name, cnpj")
          .eq("id", userId);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          // Se temos apenas o perfil principal (sem empresas adicionais)
          const companies: CompanyWithId[] = [];
          if (data[0].company_name || data[0].cnpj) {
            companies.push({
              id: data[0].id,
              company_name: data[0].company_name,
              cnpj: data[0].cnpj,
            });
          }

          // Buscar empresas adicionais do usuário
          const { data: additionalCompanies, error: additionalError } = await supabase
            .from("companies")
            .select("id, company_name, cnpj")
            .eq("user_id", userId);

          if (additionalError) {
            console.error("Erro ao buscar empresas adicionais:", additionalError);
          } else if (additionalCompanies) {
            companies.push(...additionalCompanies);
          }

          setCompanies(companies);
          
          // Se temos empresas e nenhuma empresa atual selecionada, selecionar a primeira
          if (companies.length > 0 && !currentCompany) {
            onCompanyChange(companies[0]);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar empresas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [userId, currentCompany, onCompanyChange]);

  const handleAddCompany = () => {
    navigate("/companies/new");
  };

  if (loading) {
    return <div className="h-8 w-40 bg-muted animate-pulse rounded"></div>;
  }

  return (
    <div className="flex items-center gap-2">
      {companies.length > 0 ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <span className="truncate max-w-[150px]">
                {currentCompany?.company_name || currentCompany?.cnpj || "Selecione uma empresa"}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {companies.map((company) => (
              <DropdownMenuItem
                key={company.id}
                onClick={() => onCompanyChange(company)}
                className={
                  currentCompany?.id === company.id ? "bg-muted/50" : ""
                }
              >
                {company.company_name || company.cnpj || "Empresa sem nome"}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={handleAddCompany}>
              <Plus className="h-4 w-4 mr-2" />
              Adicionar empresa
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="outline" onClick={handleAddCompany}>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar empresa
        </Button>
      )}
    </div>
  );
};
