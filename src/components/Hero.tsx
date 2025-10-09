import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    title: "Webinar: Otimização de Cotações",
    description: "Aprenda estratégias avançadas para gerenciar cotações com nossa equipe de especialistas.",
    cta: "Inscreva-se agora",
  },
  {
    title: "Lançamento Valora v2.0",
    description: "Descubra as novas funcionalidades da nossa plataforma na próxima atualização!",
    cta: "Saiba mais",
  },
  {
    title: "Workshop de Automação",
    description: "Participe do nosso workshop prático sobre automação de processos empresariais.",
    cta: "Reservar vaga",
  },
  {
    title: "Beta Testing Exclusivo",
    description: "Seja um dos primeiros a testar as funcionalidades premium do Valora!",
    cta: "Participar do Beta",
  },
];

const HeroWithCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/AWSlogo.png"
            alt="Mascote"
            className="w-[280px] h-auto md:w-[320px] drop-shadow-xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Controle suas <span className="text-primary">cotações</span> como nunca antes
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Plataforma inteligente para automação, análise e gestão de cotações empresariais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Começar agora
            </Button>
            <Button size="lg" variant="outline">
              Agendar demo
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Carousel Section */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 min-h-[500px] flex items-center justify-center px-6">
        <div className="container mx-auto relative max-w-4xl">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row items-center justify-between text-white gap-8 p-8"
                >
                  <div className="text-center md:text-left max-w-md">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-base">{item.description}</p>
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-full">
                    {item.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithCarousel;