import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forum = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 px-6 bg-background min-h-screen">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Fórum Valora</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Participe das discussões, tire dúvidas e ajude outros membros da comunidade.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Categorias Populares</h2>
            <ul className="space-y-4">
              <li className="border-b pb-2 hover:text-primary cursor-pointer">
                 Dúvidas sobre planos e recursos
              </li>
              <li className="border-b pb-2 hover:text-primary cursor-pointer">
                 Integrações e automações
              </li>
              <li className="border-b pb-2 hover:text-primary cursor-pointer">
                 Melhores práticas de uso
              </li>
              <li className="border-b pb-2 hover:text-primary cursor-pointer">
                 Sugestões de melhorias
              </li>
              <li className="hover:text-primary cursor-pointer">
                 Bugs e feedbacks
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Forum;
