
import { ArrowDown } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Faça seu cadastro",
      description: "Crie sua conta em menos de 2 minutos com seus dados básicos e do seu MEI."
    },
    {
      number: "02",
      title: "Configure seus acessos",
      description: "Forneça as informações de acesso ao Portal do MEI (apenas uma vez)."
    },
    {
      number: "03",
      title: "Automatização em ação",
      description: "Nossa plataforma fará a coleta diária de dados e processamento."
    },
    {
      number: "04",
      title: "Gerencie pelo dashboard",
      description: "Acompanhe todas as obrigações, baixe guias e visualize alertas."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-neutral-100">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Como funciona o MEI Simplificado
          </h2>
          <p className="text-lg text-neutral-800/80">
            Um processo simples e seguro para automatizar todas as suas obrigações fiscais.
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-neutral-200 relative"
              >
                <span className="absolute -top-4 -left-4 bg-primary text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-3 pt-2 text-neutral-800">
                  {step.title}
                </h3>
                <p className="text-neutral-800/80">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Connecting visual elements for desktop */}
          <div className="hidden md:block">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ArrowDown className="text-primary w-8 h-8" />
            </div>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ArrowDown className="text-primary w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-lg">
            Nossos crawlers trabalham diariamente para manter seus dados atualizados
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
