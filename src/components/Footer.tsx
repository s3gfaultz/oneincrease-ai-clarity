import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground">OneIncrease</h3>
            <p className="text-primary-foreground/70 text-sm">
              Revolutionizing manufacturing with AI-powered solutions for quality control and efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#hero" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Home
              </a>
              <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Products
              </a>
              <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Contact</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Mail size={16} />
                <span>info@oneincrease.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OneIncrease. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
