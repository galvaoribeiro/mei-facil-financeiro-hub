
import { CheckCircle, Clock, Bell, FileText, Layers, FileDown } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Economia de tempo",
      description: "Elimine acessos manuais ao Portal do MEI. Automatize todo o processo."
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "Alertas automáticos",
      description: "Receba lembretes de vencimentos e notificações por WhatsApp e email."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Declaração anual simplificada",
      description: "Geramos e enviamos sua declaração anual do MEI automaticamente."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Evite multas e atrasos",
      description: "Controle todos os seus compromissos fiscais em um só lugar."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Dashboards interativos",
      description: "Visualize débitos, relatórios e histórico de pagamentos."
    },
    {
      icon: <FileDown className="w-8 h-8 text-primary" />,
      title: "Guias sempre à mão",
      description: "Baixe guias em aberto imediatamente, sem complicações."
    }
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Benefícios que transformam a gestão do seu MEI
          </h2>
          <p className="text-lg text-neutral-800/80">
            Automatize processos, economize tempo e evite complicações fiscais com nossa plataforma completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index}
              className="bg-neutral-100 p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{benefit.title}</h3>
              <p className="text-neutral-800/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
