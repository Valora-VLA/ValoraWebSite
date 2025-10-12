import React from "react";

interface Partner {
  name: string;
  image: string;
}

const partnerItems: Partner[] = [
  { name: "Ifood", image: "/assets/ifood.png" },
  { name: "Mercado Livre", image: "/assets/mercado.png" },
  { name: "Docker", image: "/assets/Moby-logo.png" },
  { name: "Jenkins", image: "/assets/jnks.png" },
  { name: "Amazon", image: "/assets/amazon.png" },
  { name: "Mastercard", image: "/assets/mastercard.png" },
  { name: "K8S", image: "/assets/k8s.png" },
  { name: "BTG", image: "/assets/btg.png" },
  { name: "Coca Cola", image: "/assets/coke.png" },
  { name: "Nvidia", image: "/assets/nv.png" },
];

const About: React.FC = () => {
  return (
    <>
      {/* Seção Sobre a Valora */}
      <section
        id="about"
        className="py-24 px-6 bg-white text-black transition-colors duration-300"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Imagem */}
            <div>
              <img src="/ValoraLove.png" alt="Equipe Valora" />
            </div>

            {/* Texto */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Sobre a Valora
              </h2>
              <p className="text-lg text-gray-700 mb-4 max-w-xl">
                A Valora nasceu da visão de transformar a gestão de cotações em
                um processo simples, seguro e eficiente. Fundada em 2023 por um
                time de especialistas em tecnologia e negócios, nossa missão é
                empoderar empresas de todos os tamanhos a alcançar resultados
                extraordinários através de inovação.
              </p>
              <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Com uma equipe apaixonada por automação e análise de dados,
                trabalhamos incansavelmente para oferecer uma plataforma que não
                apenas atende às necessidades atuais, mas antecipa as demandas
                futuras. Junte-se a nós nessa jornada de excelência.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Parceiros e Patrocinadores */}
      <section className="relative w-full bg-gradient-to-r from-purple-900 via-blue-800 to-purple-900 text-white py-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Patrocinadores e Parceiros
          </h3>
          <p className="text-gray-300 mb-12 text-lg">
            Orgulhosamente apoiados por empresas inovadoras que acreditam na
            visão da Valora.
          </p>

          {/* Esteira de logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-16 md:gap-24 animate-infinite-scroll">
              {[...partnerItems, ...partnerItems].map((partner, index) => (
                <img
                  key={index}
                  src={partner.image}
                  alt={partner.name}
                  className="w-[120px] md:w-[160px] h-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
