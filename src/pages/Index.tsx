import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Support from "@/components/Support";
import Contributors from "@/components/Contributors";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Support />
      <Contributors />
      <Footer />
    </div>
  );
};

export default Index;
