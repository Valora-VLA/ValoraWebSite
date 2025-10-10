import { BarChart3, Clock, Shield, Zap } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details?: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Velocidade Incomparável",
    description:
      "Crie e envie cotações em segundos com nossa automação avançada. Reduza processos manuais e foque no crescimento do seu negócio.",
    details:
      "Integração com APIs para envio instantâneo e templates personalizáveis.",
  },
  {
    icon: BarChart3,
    title: "Análises Inteligentes",
    description:
      "Acesse dashboards interativos com insights em tempo real. Identifique tendências e otimize suas estratégias com dados precisos.",
    details:
      "Relatórios exportáveis em PDF e gráficos personalizados por equipe.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description:
      "Proteja suas informações com criptografia de ponta a ponta e conformidade total com a LGPD e outras regulamentações globais.",
    details:
      "Autenticação de dois fatores e backups automáticos diários.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description:
      "Reduza o tempo de cotação em até 80% com workflows otimizados. Mais eficiência para você e sua equipe.",
    details:
      "Ferramentas de automação de aprovação e lembretes inteligentes.",
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-white text-black transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Seção Introdutória */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-16">
          <div className="">
            <img
              src="/ValoraK8s.png"
              alt="Equipe trabalhando com Valora"
              className="w-[280px] h-auto md:w-[520px] drop-shadow-xl"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Por que a Valora é a escolha ideal?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Transforme a gestão de cotações com uma plataforma projetada para eficiência,
              segurança e colaboração. Desenvolvida por especialistas, a Valora oferece
              ferramentas avançadas para empresas que buscam resultados excepcionais.
            </p>
            <button className="mt-6 inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300">
              Explore os Recursos
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-all duration-300 group animate-fade-up shadow-sm hover:shadow-md"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-300 transition-colors">
                <feature.icon className="h-7 w-7 text-black group-hover:text-gray-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-2">{feature.description}</p>
              {feature.details && (
                <p className="text-sm text-gray-500 mt-1">{feature.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
