import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-secondary border-t border-white/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-hero rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">
              OneIncrease
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Revolutionizing manufacturing with AI-powered solutions for quality control and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/70 hover:text-white text-sm transition-all duration-300 text-left hover:translate-x-1"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white/70 hover:text-white text-sm transition-all duration-300 text-left hover:translate-x-1"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/70 hover:text-white text-sm transition-all duration-300 text-left hover:translate-x-1"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:info@oneincrease.com"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>info@oneincrease.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 backdrop-blur-glass border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 backdrop-blur-glass border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 backdrop-blur-glass border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 backdrop-blur-glass border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} OneIncrease. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
