import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lovable-bg.jpg";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-[float-up_12s_linear_infinite]"></div>
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-[float-up_15s_linear_infinite] animation-delay-2000"></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-[float-up_18s_linear_infinite] animation-delay-4000"></div>
        <div className="absolute top-60 right-20 w-5 h-5 bg-accent/30 rounded-full animate-[float-up_14s_linear_infinite] animation-delay-6000"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-[pulse-glow_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-accent rounded-full opacity-15 blur-3xl animate-[pulse-glow_10s_ease-in-out_infinite] animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-blue-red rounded-full opacity-25 blur-2xl animate-[pulse-glow_6s_ease-in-out_infinite] animation-delay-4000"></div>
        
        {/* Flowing waves */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20 animate-[flow-right_20s_ease-in-out_infinite]"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-accent/20 via-transparent to-primary/30 animate-[flow-left_25s_ease-in-out_infinite] animation-delay-5000"></div>
        </div>
        
        {/* Morphing shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-secondary rounded-full opacity-10 blur-xl animate-[morph-scale_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-hero rounded-full opacity-15 blur-2xl animate-[morph-scale_18s_ease-in-out_infinite] animation-delay-3000"></div>
        
        {/* Diagonal streaks */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[streak_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-[streak_12s_ease-in-out_infinite] animation-delay-4000"></div>
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