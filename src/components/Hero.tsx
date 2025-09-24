import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lovable-bg.jpg";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 animate-[float_20s_ease-in-out_infinite] transform scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Interactive Geometric Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-hero rounded-full opacity-30 blur-xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-accent rounded-full opacity-35 blur-lg animate-[float_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-blue-red rounded-full opacity-40 blur-md animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-secondary rounded-full opacity-25 blur-lg animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-hero rounded-full opacity-30 blur-md animate-[float_7s_ease-in-out_infinite]"></div>
        
        {/* Moving grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(0_72%_51%),transparent_70%)] animate-[spin_30s_linear_infinite]"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium tracking-wide uppercase text-foreground">Secure AI Manufacturing</span>
          <TrendingUp className="w-6 h-6 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
          Turn complexity into
          <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2">
            clarity!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
          Revolutionize your manufacturing operations with our AI-powered suite. 
          Predict demand, optimize scheduling, and maximize performance with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group shadow-red">
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button variant="glass" size="lg" className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold hover:bg-white/30 hover:shadow-blue">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-red transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">99.2%</div>
            <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
          </div>
          <div className="group p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-blue transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-blue-red bg-clip-text text-transparent mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Efficiency Increase</div>
          </div>
          <div className="group p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-orange transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;