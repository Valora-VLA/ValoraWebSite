import { BarChart3, Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Velocidade Incomparável",
    description: "Crie e envie cotações em segundos. Automatize processos repetitivos e foque no que realmente importa.",
  },
  {
    icon: BarChart3,
    title: "Análises Inteligentes",
    description: "Dashboards completos com insights em tempo real. Tome decisões baseadas em dados concretos.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Seus dados protegidos com criptografia de ponta a ponta. Conformidade total com LGPD.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Reduza o tempo de cotação em até 80%. Mais eficiência, menos burocracia.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher a Valora?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido por especialistas para empresas que buscam excelência em gestão de cotações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl hover:shadow-lg transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
