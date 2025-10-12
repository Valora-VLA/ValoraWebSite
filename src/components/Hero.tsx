import { useState, useEffect } from "react";

const carouselItems = [
  {
    title: "Webinar: Otimização de Cotações",
    description:
      "Aprenda estratégias avançadas para gerenciar cotações com nossa equipe de especialistas.",
    image: "/assets/nike.png",
  },
  {
    title: "Lançamento Valora v2.0",
    description:
      "Descubra as novas funcionalidades da nossa plataforma na próxima atualização!",
    image: "/assets/AWSlogo.png",
  },
  {
    title: "Workshop de Automação",
    description:
      "Participe do nosso workshop prático sobre automação de processos empresariais.",
    image: "/assets/Moby-logo.png",
  },
  {
    title: "Beta Testing Exclusivo",
    description:
      "Seja um dos primeiros a testar as funcionalidades premium do Valora!",
    image: "/assets/jnks.png",
  },
];

const HeroWithCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white text-black transition-colors duration-300">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/ValoraGarçom.png"
            alt="Mascote"
            className="w-[280px] h-auto md:w-[320px] drop-shadow-xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Controle suas cotações como nunca antes
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Plataforma inteligente para automação, análise e gestão de cotações empresariais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Começar agora
            </button>
            <button className="bg-transparent text-black border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition">
              Agendar demo
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Carousel Section (mantido igual) */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 min-h-[500px] flex items-center justify-center px-6">
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

                  <div className="w-[180px] h-[180px] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
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
