import React from "react";

interface Contributor {
  name: string;
  image: string;
}

const contributors: Contributor[] = [
  { name: "João", image: "/team/joao.png" },
  { name: "Maria", image: "/team/maria.png" },
  { name: "Carlos", image: "/team/carlos.png" },
  { name: "Ana", image: "/team/ana.png" },
  { name: "Rafael", image: "/team/rafael.png" },
  { name: "Julia", image: "/team/julia.png" },
  { name: "Thiago", image: "/team/thiago.png" },
  { name: "Beatriz", image: "/team/beatriz.png" },
  { name: "Pedro", image: "/team/pedro.png" },
  { name: "Fernanda", image: "/team/fernanda.png" },
];

const Contributors: React.FC = () => {
  return (
    <section
      id="contributors"
      className="py-24 px-6 bg-white text-black transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Texto */}
          <div className="text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Contribuidores e Colaboradores
            </h2>
            <p className="text-lg text-gray-700 mb-4 max-w-xl">
              A Valora é construída por um time apaixonado por inovação, código limpo e impacto real.
              Cada colaborador traz sua visão, energia e dedicação para criar uma plataforma que redefine a forma
              como as empresas gerenciam suas cotações.
            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Valorizamos colaboração, criatividade e o espírito de comunidade. Estes são os rostos por trás da
              tecnologia que impulsiona o futuro da Valora.
            </p>

            <button className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300">
              Conheça Nossa Equipe
            </button>
          </div>

          {/* Imagem (Esteira de fotos) */}
          <div className="order-1 lg:order-2 relative overflow-hidden">
            <div className="flex items-center gap-12 animate-infinite-scroll">
              {[...contributors, ...contributors].map((contributor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={contributor.image}
                    alt={contributor.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md border-4 border-gray-200 hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm mt-2 text-gray-700 font-medium">
                    {contributor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributors;
