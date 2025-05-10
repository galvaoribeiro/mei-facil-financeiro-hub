
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          navigate("/auth");
          return;
        }
        
        setUser(session.user);
        
        // Fetch user profile
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
          
        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.error("Session error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Carregando...</h2>
          <p>Aguarde um momento</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Bem-vindo, {profile?.full_name || user?.email}
          </p>
        </div>
        <Button onClick={handleSignOut} variant="outline">
          Sair
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Resumo</h2>
        <p className="text-gray-600 mb-2">
          Em breve você verá aqui um resumo das suas obrigações MEI.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Guias Pendentes</h3>
          <p className="text-3xl font-bold text-primary">0</p>
          <p className="text-gray-500 text-sm mt-2">Nenhuma guia pendente no momento</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Declarações</h3>
          <p className="text-3xl font-bold text-primary">0</p>
          <p className="text-gray-500 text-sm mt-2">Nenhuma declaração pendente</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Notificações</h3>
          <p className="text-3xl font-bold text-primary">0</p>
          <p className="text-gray-500 text-sm mt-2">Você não tem notificações</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
