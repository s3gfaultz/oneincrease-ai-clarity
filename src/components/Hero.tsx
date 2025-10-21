import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        
        {/* Glowing orbs with staggered looping movement - ensures button area always has coverage */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-[orbit-large_20s_linear_infinite] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-accent rounded-full opacity-18 blur-3xl animate-[orbit-medium_15s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-7.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-blue-red rounded-full opacity-25 blur-2xl animate-[orbit-small_25s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-12.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-[orbit-medium_18s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-9s' }}></div>
        
        {/* Flowing waves */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20 animate-[flow-right_20s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-accent/20 via-transparent to-primary/30 animate-[flow-left_25s_ease-in-out_infinite] animation-delay-5000"></div>
        </div>
        
        {/* Morphing shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-10 blur-xl animate-[morph-scale_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-hero rounded-full opacity-15 blur-2xl animate-[morph-scale_18s_ease-in-out_infinite] animation-delay-3000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Cpu className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium tracking-wide text-foreground">Smart AI Planning For Smart Manufacturers</span>
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
          <Button 
            variant="hero" 
            size="lg" 
            className="group shadow-red"
            onClick={() => navigate("/pricing")}
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button variant="glass" size="lg" className="bg-white/25 backdrop-blur-md border-2 border-white/40 text-white font-semibold hover:bg-white/35 hover:shadow-blue shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
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