import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-sm font-medium text-foreground">
              Sistema de cotação profissional
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Revolucione suas{" "}
            <span className="text-gradient">cotações</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            O sistema que faltava no mercado. Simplifique processos, ganhe tempo e tenha controle total das suas cotações.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Interface intuitiva</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Automação completa</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Suporte dedicado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Agendar Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Não é necessário cartão de crédito • Configuração em 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
