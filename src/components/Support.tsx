import React from "react";

const Support: React.FC = () => {
  return (
    <section
      id="support"
      className="py-24 px-6 bg-gray-50 text-black transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Texto */}
          <div className="text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Suporte e Atendimento
            </h2>
            <p className="text-lg text-gray-700 mb-4 max-w-xl">
              Nosso time de suporte está sempre pronto para ajudar você a tirar o máximo proveito da plataforma Valora.
              Oferecemos atendimento ágil, humanizado e eficiente, garantindo que suas dúvidas sejam resolvidas o mais
              rápido possível.
            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Seja para assistência técnica, dúvidas sobre funcionalidades ou sugestões de melhoria, estamos disponíveis
              para ouvir e oferecer o suporte que sua empresa merece.
            </p>

            {/* Botão */}
            <button className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300">
              Fale com o Suporte
            </button>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2">
            <img
              src="/ValoraSupportPage.png"
              alt="Equipe de Suporte Valora"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
