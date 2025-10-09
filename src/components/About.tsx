import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="">
            <img
              src="/AWSlogo.png" // Substitua por uma imagem real (ex.: equipe ou escritório)
              alt="Equipe Valora"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Sobre a Valora
            </h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-xl">
              A Valora nasceu da visão de transformar a gestão de cotações em um processo simples, seguro e eficiente. Fundada em 2023 por um time de especialistas em tecnologia e negócios, nossa missão é empoderar empresas de todos os tamanhos a alcançar resultados extraordinários através de inovação.
            </p>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Com uma equipe apaixonada por automação e análise de dados, trabalhamos incansavelmente para oferecer uma plataforma que não apenas atende às necessidades atuais, mas antecipa as demandas futuras. Junte-se a nós nessa jornada de excelência.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;