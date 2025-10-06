import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home with hash
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    
    // Otherwise, scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Only run scroll detection on home page
    if (location.pathname !== "/") return;
    
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      const productsSection = document.getElementById("products");
      
      if (contactSection && productsSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const productsRect = productsSection.getBoundingClientRect();
        
        if (contactRect.top <= 80 && contactRect.top >= 0) {
          setActiveSection("contact");
        } else if (productsRect.top < window.innerHeight / 2 && productsRect.bottom > 0) {
          setActiveSection("products");
        } else if (window.scrollY < productsRect.top + window.scrollY - window.innerHeight / 2) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle hash navigation when landing on home page with hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const isContactSection = activeSection === "contact";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-glass shadow-luxury transition-all duration-500 ease-in-out
        ${
          isContactSection
            ? "bg-gradient-secondary border-white/20"
            : "bg-gradient-to-r from-background/95 via-accent/5 to-background/95 border-white/10"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => scrollToSection("Home")}
            className={`text-2xl font-bold hover:opacity-80 transition-all duration-500 ease-in-out cursor-pointer ${
              isContactSection
                ? "text-white"
                : "bg-gradient-hero bg-clip-text text-transparent"
            }`}
          >
            OneIncrease
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`relative font-medium transition-all duration-500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full
                ${
                  isContactSection
                    ? "text-white/80 hover:text-white after:bg-white"
                    : activeSection === "hero"
                    ? "text-foreground after:w-full after:bg-gradient-hero"
                    : "text-foreground/80 hover:text-foreground after:bg-gradient-hero"
                }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("products")}
              className={`relative font-medium transition-all duration-500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full
                ${
                  isContactSection
                    ? "text-white/80 hover:text-white after:bg-white"
                    : activeSection === "products"
                    ? "text-foreground after:w-full after:bg-gradient-red-blue"
                    : "text-foreground/80 hover:text-foreground after:bg-gradient-red-blue"
                }`}
            >
              Products
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`relative font-medium transition-all duration-500 ease-in-out after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full
                ${
                  isContactSection
                    ? "text-white after:w-full after:bg-white"
                    : "text-foreground/80 hover:text-foreground after:bg-gradient-full-blue"
                }`}
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
              <X size={24} className={isContactSection ? "text-white" : "text-foreground"} />
            ) : (
              <Menu size={24} className={isContactSection ? "text-white" : "text-foreground"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4 animate-fade-in">
            {["hero", "products", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-medium text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-white/15 text-orange-500"
                    : isContactSection
                    ? "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white"
                    : "bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
