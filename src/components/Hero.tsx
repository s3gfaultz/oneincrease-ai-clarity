import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lovable-bg.jpg";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Flowing Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main flowing gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/30 to-blue-500/20 animate-[flow_15s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/25 to-red-500/15 animate-[flow_20s_ease-in-out_infinite_reverse]"></div>
        
        {/* Animated flowing particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large flowing orbs */}
          <div className="absolute top-1/4 w-96 h-96 bg-gradient-radial from-red-500/30 to-transparent rounded-full blur-3xl animate-[flowRight_25s_linear_infinite]"></div>
          <div className="absolute top-2/3 w-80 h-80 bg-gradient-radial from-blue-500/25 to-transparent rounded-full blur-3xl animate-[flowRight_30s_linear_infinite] animation-delay-[5s]"></div>
          <div className="absolute top-1/2 w-72 h-72 bg-gradient-radial from-orange-500/35 to-transparent rounded-full blur-2xl animate-[flowRight_20s_linear_infinite] animation-delay-[10s]"></div>
          
          {/* Medium flowing elements */}
          <div className="absolute top-1/6 w-48 h-48 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl animate-[flowRight_18s_linear_infinite] animation-delay-[3s]"></div>
          <div className="absolute bottom-1/4 w-56 h-56 bg-gradient-radial from-cyan-500/25 to-transparent rounded-full blur-xl animate-[flowRight_22s_linear_infinite] animation-delay-[8s]"></div>
          
          {/* Small flowing particles */}
          <div className="absolute top-1/3 w-24 h-24 bg-gradient-radial from-red-400/40 to-transparent rounded-full blur-sm animate-[flowRight_12s_linear_infinite] animation-delay-[2s]"></div>
          <div className="absolute bottom-1/3 w-32 h-32 bg-gradient-radial from-orange-400/35 to-transparent rounded-full blur-sm animate-[flowRight_16s_linear_infinite] animation-delay-[6s]"></div>
          <div className="absolute top-3/4 w-20 h-20 bg-gradient-radial from-blue-400/45 to-transparent rounded-full blur-sm animate-[flowRight_14s_linear_infinite] animation-delay-[4s]"></div>
        </div>
        
        {/* Flowing wave overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,hsl(0_72%_51%/0.1),transparent,hsl(217_91%_60%/0.1),transparent)] animate-[wave_25s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(0_72%_51%/0.05),transparent_50%),radial-gradient(circle_at_80%_50%,hsl(217_91%_60%/0.05),transparent_50%)] animate-[textureFlow_30s_linear_infinite]"></div>
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