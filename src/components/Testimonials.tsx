
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Desenvolvedor Web | MEI",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Com o MEI Simplificado, não me preocupo mais com guias e prazos. A plataforma me avisa de tudo e economizo pelo menos 3 horas por mês!",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Designer Gráfica | MEI",
      avatar: "https://i.pravatar.cc/150?img=5",
      content: "Antes eu sempre esquecia de pagar minhas guias e acabava pagando multa. Hoje recebo alertas no WhatsApp e posso baixar tudo em segundos.",
      rating: 5
    },
    {
      name: "João Mendes",
      role: "Contador | Escritório Contábil",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: "Gerencio 18 clientes MEI na plataforma. A automação da declaração anual e o controle dos débitos facilitou muito meu trabalho.",
      rating: 5
    },
    {
      name: "Luciana Ferreira",
      role: "Consultora de Moda | MEI",
      avatar: "https://i.pravatar.cc/150?img=10",
      content: "Finalmente entendo minhas obrigações como MEI! O dashboard é intuitivo e me mostra exatamente o que preciso fazer e quando.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1));
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-neutral-100">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-2 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-neutral-800/80">
            Veja como o MEI Simplificado está ajudando MEIs e contadores a economizar tempo e evitar problemas.
          </p>
        </div>

        {/* Desktop testimonials */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-800/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-800 mb-4">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-neutral-300"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile testimonials */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-800/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-800 mb-4">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-neutral-300"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
