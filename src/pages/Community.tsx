"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    title: "Evento: Conecte-se com Profissionais",
    description:
      "Participe de encontros e webinars exclusivos com especialistas da Comunidade Valora.",
    image: "/assets/networking.png",
  },
  {
    title: "Mentorias e Suporte",
    description:
      "Acesse mentorias com profissionais experientes e aprimore suas habilidades.",
    image: "/assets/mentoria.png",
  },
  {
    title: "Projetos Colaborativos",
    description:
      "Trabalhe em equipe em projetos reais e desenvolva suas competências junto a outros membros.",
    image: "/assets/collab.png",
  },
  {
    title: "Aprendizado Contínuo",
    description:
      "Receba conteúdos, desafios e oportunidades de evolução profissional toda semana.",
    image: "/assets/learning.png",
  },
];

const Community: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white text-black transition-colors duration-300">
        <div className="container mx-auto px-6 pt-32 pb-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/ValoraCommunity.png"
              alt="Comunidade Valora"
              className="w-[280px] h-auto md:w-[320px] drop-shadow-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Conecte-se, Aprenda e Cresça com a Comunidade Valora
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Um espaço colaborativo para troca de experiências, aprendizado e
              oportunidades profissionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                Entrar no Discord
              </Button>
              <Button
                variant="outline"
                className="text-black border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition"
              >
                Ver Fóruns
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 min-h-[500px] flex items-center justify-center px-6">
          <div className="container mx-auto relative max-w-4xl">
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

      {/* Section: Benefícios e Conteúdo */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl font-semibold mb-8">Por que participar?</h2>
          <p className="text-muted-foreground mb-12">
            A Comunidade Valora foi criada para promover conexões reais,
            aprendizado colaborativo e oportunidades que impulsionam sua
            carreira. Aqui, você faz parte de algo maior.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Networking Profissional",
                text: "Conecte-se com pessoas que compartilham dos mesmos interesses e valores.",
                icon: "🤝",
              },
              {
                title: "Aprendizado Prático",
                text: "Workshops, webinars e desafios para colocar em prática o que você aprende.",
                icon: "🎓",
              },
              {
                title: "Oportunidades Reais",
                text: "Descubra parcerias, vagas e colaborações dentro da própria comunidade.",
                icon: "🚀",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white border border-border p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Faça parte da Comunidade Valora
          </h2>
          <p className="text-lg mb-8">
            Conecte-se com profissionais, aprenda com os melhores e compartilhe
            suas experiências.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-primary font-semibold"
          >
            Participar Agora
          </Button>
        </div>
      </section>


    
      <Footer />
    </>
  );
};

export default Community;
