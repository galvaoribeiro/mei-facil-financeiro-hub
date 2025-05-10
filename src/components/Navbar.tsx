
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">MEI Simplificado</span>
            </div>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
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
              <Button variant="outline" className="mr-2">Entrar</Button>
              <Button>Cadastre-se</Button>
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
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">Entrar</Button>
              <Button className="w-full">Cadastre-se</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
