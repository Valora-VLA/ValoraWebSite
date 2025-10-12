import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    id: "basic-plan",
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    description: "Perfeito para pequenas empresas começando",
    features: [
      "Até 50 cotações/mês",
      "2 usuários inclusos",
      "Dashboard básico",
      "Suporte por email",
      "Relatórios mensais",
    ],
    popular: false,
  },
  {
    id: "pro-plan",
    name: "Professional",
    price: "R$ 497",
    period: "/mês",
    description: "Ideal para empresas em crescimento",
    features: [
      "Até 200 cotações/mês",
      "10 usuários inclusos",
      "Dashboard avançado",
      "Suporte prioritário",
      "Relatórios personalizados",
      "API de integração",
      "Automações avançadas",
    ],
    popular: true,
  },
  {
    id: "enterprise-plan",
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para grandes operações",
    features: [
      "Cotações ilimitadas",
      "Usuários ilimitados",
      "Dashboard personalizado",
      "Suporte 24/7 dedicado",
      "Treinamento incluído",
      "API ilimitada",
      "Gerente de conta",
      "SLA garantido",
    ],
    popular: false,
  },
];

// Itens do carrossel de gradiente
const carouselItems = [
  {
    title: "Atendimento Humanizado",
    description:
      "Conte com um time sempre disponível para ajudar sua empresa a aproveitar ao máximo a Valora.",
    image: "/assets/nike.png",
  },
  {
    title: "Integrações Poderosas",
    description:
      "Conecte a Valora com as ferramentas que você já usa e mantenha tudo em sincronia.",
    image: "/assets/amazon.png",
  },
  {
    title: "Automação Inteligente",
    description:
      "Acelere suas cotações e reduza erros com nossos recursos de automação e integração.",
    image: "/assets/jnks.png",
  },
  {
    title: "Resultados que Falam",
    description:
      "Empresas que usam a Valora economizam até 60% de tempo em seus processos de compra.",
    image: "/assets/ifood.png",
  },
  {
    title: "Tecnologia de Ponta",
    description:
      "Segurança, desempenho e escalabilidade garantidos em toda a plataforma.",
    image: "/assets/k8s.png",
  },
  {
    title: "Parceiros de Confiança",
    description:
      "As maiores empresas do setor confiam na Valora para otimizar seus processos.",
    image: "/assets/mercado.png",
  },
];

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica simples de autoplay do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Seção de Planos */}
      <section id="pricing" className="py-20 px-6 bg-background scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para sua empresa. Sem surpresas, sem taxas
              escondidas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                id={plan.id}
                key={index}
                className={`relative gradient-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-up ${
                  plan.popular ? "md:-mt-4 md:mb-4 border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise"
                    ? "Falar com Vendas"
                    : "Começar Agora"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Carousel Section */}
      <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 min-h-[500px] flex items-center justify-center px-6">
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

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
