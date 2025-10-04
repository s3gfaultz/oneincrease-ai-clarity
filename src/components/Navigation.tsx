import { Menu } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">OneIncrease</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-gradient-hero bg-clip-text text-transparent"
          >
            <Menu size={24} className="text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity text-left"
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
