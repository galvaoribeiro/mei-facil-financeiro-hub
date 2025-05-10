
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">MEI Simplificado</h3>
            <p className="text-neutral-100/70 mb-4">
              Automatizando e simplificando a vida de MEIs e contadores em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-100/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-100/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-100/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-100/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#beneficios" className="text-neutral-100/70 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-neutral-100/70 hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#planos" className="text-neutral-100/70 hover:text-white transition-colors">Planos e preços</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Política de privacidade</a></li>
              <li><a href="#" className="text-neutral-100/70 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-100/60 text-sm">
          <p>© {currentYear} MEI Simplificado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
