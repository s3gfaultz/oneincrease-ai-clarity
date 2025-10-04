import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-accent/5 to-background/95 backdrop-blur-glass border-b border-white/10 shadow-luxury">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
            OneIncrease
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-hero after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative font-medium text-foreground/80 hover:text-foreground transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-secondary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20 hover:border-white/40 transition-all"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-medium text-left py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="font-medium text-left py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground transition-all duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium text-left py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground transition-all duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
