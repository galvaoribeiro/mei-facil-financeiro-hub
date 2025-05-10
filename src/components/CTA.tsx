
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liberte-se da burocracia do MEI hoje mesmo
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Junte-se a centenas de empreendedores que já automatizaram suas obrigações fiscais
            e estão focando no que realmente importa: seus negócios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6">
              Comece agora com 7 dias grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white bg-transparent hover:bg-white/10 text-white text-base px-8 py-6">
              Agendar demonstração
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Não é necessário cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
