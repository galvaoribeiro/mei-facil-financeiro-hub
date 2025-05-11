
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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
        // First fetch the user's profile data
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("id, company_name, cnpj")
          .eq("id", userId)
          .single();

        if (profileError) {
          throw profileError;
        }

        const companies: CompanyWithId[] = [];
        
        // Add the main profile company if it exists
        if (profileData && (profileData.company_name || profileData.cnpj)) {
          companies.push({
            id: profileData.id,
            company_name: profileData.company_name,
            cnpj: profileData.cnpj,
          });
        }

        // Next fetch additional companies from the companies table
        const { data: additionalCompanies, error: companiesError } = await supabase
          .from("companies")
          .select("id, company_name, cnpj")
          .eq("user_id", userId);

        if (companiesError) {
          console.error("Error fetching additional companies:", companiesError);
        } else if (additionalCompanies) {
          companies.push(...additionalCompanies);
        }

        setCompanies(companies);
        
        // If we have companies and no current company selected, select the first one
        if (companies.length > 0 && !currentCompany) {
          onCompanyChange(companies[0]);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
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
