
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-neutral-100 to-white py-16 md:py-24">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight">
              Simplifique as <span className="text-primary">obrigações do seu MEI</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-800/80">
              Automatize guias, controle débitos e envie declarações sem complicações. 
              Economize tempo e evite multas com nossa plataforma completa.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="text-base px-8 py-6">
                Comece agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base px-8 py-6">
                Saiba mais
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-neutral-800/70">
                Mais de 500 MEIs já simplificaram suas obrigações fiscais
              </p>
            </div>
          </div>
          <div className="relative h-full animate-slide-up">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-neutral-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-xl text-neutral-800">Dashboard MEI</h3>
                  <p className="text-neutral-800/70">Visão geral das suas obrigações</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tudo em dia
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-neutral-100 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">DAS - Abril/2025</p>
                    <p className="text-sm text-neutral-800/70">Vencimento: 20/05/2025</p>
                  </div>
                  <Button size="sm">Baixar</Button>
                </div>
                
                <div className="bg-neutral-100 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">DASN-SIMEI 2024</p>
                    <p className="text-sm text-neutral-800/70">Prazo: 31/05/2025</p>
                  </div>
                  <Button variant="outline" size="sm">Preparar</Button>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-primary">Próximos vencimentos</h4>
                    <span className="text-primary text-sm">Ver todos</span>
                  </div>
                  <ul className="mt-2 space-y-2">
                    <li className="text-sm flex justify-between">
                      <span>DAS - Maio/2025</span>
                      <span className="font-medium">20/06/2025</span>
                    </li>
                    <li className="text-sm flex justify-between">
                      <span>DAS - Junho/2025</span>
                      <span className="font-medium">20/07/2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
