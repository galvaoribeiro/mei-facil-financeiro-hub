
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for current session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });
    
    // Cleanup
    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-primary">MEI Simplificado</Link>
            </div>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {!user && (
                <>
                  <a href="#beneficios" className="text-neutral-800 hover:text-primary transition-colors">
                    Benefícios
                  </a>
                  <a href="#como-funciona" className="text-neutral-800 hover:text-primary transition-colors">
                    Como funciona
                  </a>
                  <a href="#planos" className="text-neutral-800 hover:text-primary transition-colors">
                    Planos
                  </a>
                  <a href="#depoimentos" className="text-neutral-800 hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </>
              )}
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="text-neutral-800 hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleSignOut} 
                    className="flex items-center gap-1"
                  >
                    <LogOut size={16} />
                    Sair
                  </Button>
                </div>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="outline" className="mr-2">Entrar</Button>
                  </Link>
                  <Link to="/auth">
                    <Button>Cadastre-se</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-800 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!user && (
              <>
                <a 
                  href="#beneficios" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefícios
                </a>
                <a 
                  href="#como-funciona" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como funciona
                </a>
                <a 
                  href="#planos" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Planos
                </a>
                <a 
                  href="#depoimentos" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </a>
              </>
            )}
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:text-primary"
                >
                  <LogOut size={16} />
                  Sair
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Entrar</Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Cadastre-se</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
