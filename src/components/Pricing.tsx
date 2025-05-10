
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "MEI Básico",
      price: "29,90",
      period: "/mês",
      description: "Para MEIs iniciantes que precisam de controle básico",
      features: [
        "Monitoramento de guias DAS",
        "Alertas de vencimento por email",
        "Dashboard básico",
        "Suporte por email"
      ],
      buttonText: "Começar grátis",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "MEI Pro",
      price: "49,90",
      period: "/mês",
      description: "A escolha ideal para a maioria dos MEIs",
      features: [
        "Tudo do plano Básico",
        "Alertas por WhatsApp",
        "Download automático de guias",
        "Declaração anual automatizada",
        "Suporte por WhatsApp",
        "Histórico de pagamentos"
      ],
      buttonText: "Assinar agora",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Contabilidade",
      price: "99,90",
      period: "/mês",
      description: "Para escritórios de contabilidade e múltiplos MEIs",
      features: [
        "Tudo do plano Pro",
        "Gerenciamento de múltiplos MEIs",
        "Painel administrativo",
        "Relatórios consolidados",
        "Suporte prioritário",
        "API para integração"
      ],
      buttonText: "Falar com consultor",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Planos e preços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-2 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-neutral-800/80">
            Todos os planos incluem acesso à plataforma completa, com diferentes níveis de recursos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/10 relative' 
                  : 'border-neutral-200'
              } bg-white p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais popular
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-neutral-800">R$ {plan.price}</span>
                  <span className="ml-1 text-neutral-800/70">{plan.period}</span>
                </div>
                <p className="mt-2 text-neutral-800/80">{plan.description}</p>
              </div>

              <div className="mt-6 border-t border-neutral-200 pt-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      <span className="text-neutral-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6">
                <Button 
                  variant={plan.buttonVariant as "default" | "outline"}
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-neutral-800/70">
          <p>
            Todos os preços são em reais (BRL) e incluem todos os impostos aplicáveis.
            <br />
            Você pode cancelar sua assinatura a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
