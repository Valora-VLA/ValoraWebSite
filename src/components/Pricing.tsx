import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative gradient-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-up ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
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
                {plan.name === "Enterprise" ? "Falar com Vendas" : "Começar Agora"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
