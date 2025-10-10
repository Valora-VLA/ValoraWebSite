import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// Definindo o tipo para o estado do submenu
type SubmenuState = {
  [key: string]: boolean;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<SubmenuState>({
    plans: false,
    "plans-mobile": false,
    support: false,
    "support-mobile": false,
  });

  const toggleSubmenu = (item: string) => {
    setSubmenuOpen((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <nav
      className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-black/10 z-50 transition-all duration-300 ease-in-out hover:bg-white/95 hover:shadow-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <span>
                <img src="/valoracervo.png" alt="Logo" />
              </span>
            </div>
            <span className="text-xl font-bold text-black">Valora</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Home
            </a>
            <a href="#features" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Recursos
            </a>
            <div className="relative">
              <button
                onClick={() => toggleSubmenu("plans")}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors flex items-center"
              >
                Planos <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {submenuOpen.plans && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <a href="#basic-plan" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    Plano Básico
                  </a>
                  <a href="#pro-plan" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    Plano Pro
                  </a>
                  <a href="#enterprise-plan" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    Plano Empresarial
                  </a>
                </div>
              )}
            </div>
            <a href="#about" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Sobre
            </a>
            <div className="relative">
              <button
                onClick={() => toggleSubmenu("support")}
                className="text-sm font-medium text-black/70 hover:text-black transition-colors flex items-center"
              >
                Suporte <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {submenuOpen.support && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <a href="#faq" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    FAQ
                  </a>
                  <a href="#tutorials" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    Tutoriais
                  </a>
                  <a href="#contact-support" className="block px-4 py-2 text-sm text-black/70 hover:text-black hover:bg-gray-100">
                    Contato de Suporte
                  </a>
                </div>
              )}
            </div>
            <a href="#blog" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Blog
            </a>
            <a href="#docs" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Documentação
            </a>
            <a href="#community" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Comunidade
            </a>
            <a href="#careers" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
              Carreiras
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-black hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a
              href="#home"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Recursos
            </a>
            <div>
              <button
                onClick={() => toggleSubmenu("plans-mobile")}
                className="block text-sm font-medium text-black/70 hover:text-black transition-colors flex items-center w-full text-left"
              >
                Planos <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {submenuOpen["plans-mobile"] && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#basic-plan" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    Plano Básico
                  </a>
                  <a href="#pro-plan" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    Plano Pro
                  </a>
                  <a href="#enterprise-plan" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    Plano Empresarial
                  </a>
                </div>
              )}
            </div>
            <a
              href="#about"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <div>
              <button
                onClick={() => toggleSubmenu("support-mobile")}
                className="block text-sm font-medium text-black/70 hover:text-black transition-colors flex items-center w-full text-left"
              >
                Suporte <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {submenuOpen["support-mobile"] && (
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#faq" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    FAQ
                  </a>
                  <a href="#tutorials" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    Tutoriais
                  </a>
                  <a href="#contact-support" className="block text-sm text-black/70 hover:text-black hover:bg-gray-100 px-2 py-1">
                    Contato de Suporte
                  </a>
                </div>
              )}
            </div>
            <a
              href="#blog"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="#docs"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Documentação
            </a>
            <a
              href="#community"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Comunidade
            </a>
            <a
              href="#careers"
              className="block text-sm font-medium text-black/70 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Carreiras
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-black hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Entrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;