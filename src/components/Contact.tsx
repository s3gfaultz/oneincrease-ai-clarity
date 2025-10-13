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
    
    const mailtoLink = `mailto:info@oneincrease.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    <section id="contact" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready To Transform Your Manufacturing Process?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Connect with our AI experts and discover how we can revolutionize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-glass border border-white/20 shadow-luxury h-full flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6 text-primary-foreground">Contact us</h3>
            <h2 className="text-lg text-primary-foreground/80 mb-8">We are eager to learn more about your business and how we can contribute to its success!</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary-foreground">Name</Label>
                  <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  spellCheck={false}
                  placeholder="John Doe"
                   className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="JohnDoe@gmail.com"
                    required
                    spellCheck={false}
                     className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-primary-foreground">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="OneIncrease"
                  spellCheck={false}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  spellCheck={false}
                  className="resize-none bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                  placeholder="Tell us about your manufacturing challenges and goals..."
                />
              </div>
              
              <Button type="submit" variant="glass-red" className="w-full group">
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
                <div className="p-3 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-primary-foreground/80">info@oneincrease.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-primary-foreground/80">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="p-3 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Consultation</p>
                  <p className="text-primary-foreground/80">Free initial assessment</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/20">
              <h4 className="font-semibold text-primary-foreground mb-3">Why Choose oneincrease?</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent" />
                  Industry-leading AI technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent" />
                  Proven ROI with measurable results
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent" />
                  Seamless integration with existing systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent" />
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