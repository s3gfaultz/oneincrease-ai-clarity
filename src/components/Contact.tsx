import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `AI Manufacturing Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:contact@oneincrease.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the pre-filled message.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Connect with our AI experts and discover how oneincrease can revolutionize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-luxury border-0">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="transition-all duration-300 focus:shadow-glow"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="resize-none transition-all duration-300 focus:shadow-glow"
                  placeholder="Tell us about your manufacturing challenges and goals..."
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Connect With Our Experts</h3>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Our team of AI specialists is ready to help you implement cutting-edge manufacturing solutions. 
                Reach out to discuss your specific needs and see how we can drive your success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-primary-foreground/80">contact@oneincrease.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 rounded-lg bg-accent/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-primary-foreground/80">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 rounded-lg bg-accent/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Consultation</p>
                  <p className="text-primary-foreground/80">Free initial assessment</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="font-semibold text-primary-foreground mb-3">Why Choose oneincrease?</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Industry-leading AI technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Proven ROI with measurable results
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Seamless integration with existing systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  24/7 expert support and monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;