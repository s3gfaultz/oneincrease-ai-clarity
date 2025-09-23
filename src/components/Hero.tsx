import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        <div className="flex items-center justify-center gap-3 mb-6 opacity-90">
          <Shield className="w-6 h-6" />
          <span className="text-sm font-medium tracking-wide uppercase">Secure AI Manufacturing</span>
          <TrendingUp className="w-6 h-6" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Turn complexity into
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent block mt-2">
            clarity!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Revolutionize your manufacturing operations with our AI-powered suite. 
          Predict demand, optimize scheduling, and maximize performance with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button variant="outline-premium" size="lg">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
            <div className="text-sm opacity-80">Prediction Accuracy</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2">40%</div>
            <div className="text-sm opacity-80">Efficiency Increase</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm opacity-80">Real-time Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;