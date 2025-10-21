import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Clock, BarChart3, ArrowLeft, Check, ArrowRight } from "lucide-react";

const ProductDetails = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const products = {
    cassandra: {
      name: "Cassandra",
      icon: Brain,
      title: "AI Demand Prediction",
      tagline: "Predict with precision, plan with confidence",
      description: "Advanced AI model that predicts future orders based on historical data, market trends, and seasonal patterns. Reduce inventory costs while ensuring demand fulfillment.",
      longDescription: "Cassandra leverages cutting-edge machine learning algorithms to analyze years of historical data, market trends, and seasonal patterns. Our AI continuously learns from your business data to provide increasingly accurate predictions that help you optimize inventory levels, reduce waste, and meet customer demand with confidence.",
      features: [
        "Historical data analysis with deep pattern recognition",
        "Real-time market trend integration and analysis",
        "Seasonal pattern recognition and adjustment",
        "95%+ accuracy rate with continuous learning",
        "Customizable prediction horizons (daily, weekly, monthly)",
        "Integration with existing ERP systems",
        "Automated alert system for demand anomalies",
        "Multi-product forecasting capabilities"
      ],
      benefits: [
        "Reduce inventory holding costs by up to 30%",
        "Minimize stockouts and lost sales opportunities",
        "Optimize production planning and resource allocation",
        "Improve cash flow management through better inventory control"
      ],
      color: "from-primary via-accent to-primary"
    },
    dexter: {
      name: "Dexter",
      icon: Clock,
      title: "Smart Machine Scheduler",
      tagline: "Maximize uptime, minimize waste",
      description: "Intelligent scheduling system that optimizes machine utilization, reduces downtime, and improves overall production efficiency through AI-driven resource allocation.",
      longDescription: "Dexter revolutionizes manufacturing operations by intelligently scheduling machine tasks, predicting maintenance needs, and optimizing resource allocation. Using advanced algorithms, Dexter learns from your production patterns to create the most efficient schedules while considering constraints like machine capabilities, maintenance windows, and priority orders.",
      features: [
        "Real-time dynamic scheduling with instant updates",
        "Predictive maintenance integration",
        "Multi-machine coordination and optimization",
        "40% average efficiency improvement",
        "Constraint-based scheduling engine",
        "Priority-based task allocation",
        "Downtime minimization through smart planning",
        "Resource utilization analytics and reporting"
      ],
      benefits: [
        "Increase overall equipment effectiveness (OEE) by 40%",
        "Reduce unplanned downtime by up to 60%",
        "Optimize labor and material costs",
        "Improve on-time delivery rates significantly"
      ],
      color: "from-secondary via-primary to-secondary"
    },
    zain: {
      name: "Zain",
      icon: BarChart3,
      title: "Performance Analytics",
      tagline: "Transform data into actionable insights",
      description: "Comprehensive performance analyzer that monitors capacity utilization, identifies bottlenecks, and provides actionable insights to maximize operational efficiency.",
      longDescription: "Zain provides real-time visibility into your entire manufacturing operation. Through advanced analytics and intuitive dashboards, Zain identifies bottlenecks, tracks KPIs, and delivers actionable insights that drive continuous improvement. Make data-driven decisions with confidence and optimize every aspect of your production process.",
      features: [
        "Real-time capacity monitoring across all operations",
        "Automated bottleneck identification and alerts",
        "Comprehensive performance metrics tracking",
        "Customizable dashboards and reporting",
        "Trend analysis and predictive insights",
        "Multi-level drill-down capabilities",
        "Integration with existing monitoring systems",
        "Automated performance reports and recommendations"
      ],
      benefits: [
        "Identify and eliminate production bottlenecks quickly",
        "Increase overall capacity utilization by 25%",
        "Make faster, data-driven operational decisions",
        "Reduce waste and improve quality metrics"
      ],
      color: "from-accent via-secondary to-accent"
    }
  };

  const product = products[productName?.toLowerCase() as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-subtle">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glowing orbs with staggered looping movement - ensures button area always has coverage */}
          <div className="absolute top-3/4 left-2/3 w-96 h-96 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-[orbit-large_20s_linear_infinite] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-3/4 left-2/3 w-80 h-80 bg-gradient-accent rounded-full opacity-15 blur-3xl animate-[orbit-medium_15s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-7.5s' }}></div>
          <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-gradient-blue-red rounded-full opacity-25 blur-2xl animate-[orbit-small_25s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-12.5s' }}></div>
          <div className="absolute top-3/4 left-2/3 w-72 h-72 bg-gradient-secondary rounded-full opacity-10 blur-3xl animate-[orbit-medium_18s_linear_infinite] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-9s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="max-w-5xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8 animate-scale-in">
              <div className="p-4 rounded-2xl bg-gradient-glass backdrop-blur-glass border border-white/10 shadow-card">
                <Icon className="w-16 h-16 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                  {product.name}
                </h1>
                
                <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
                  {product.title}
                </p>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
                  {product.tagline}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/pricing")}
                  variant="hero"
                  className="text-lg px-8 py-6 h-auto shadow-red hover:shadow-red/50 transition-all group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="glass"
                  onClick={() => {
                    const overview = document.getElementById('overview');
                    overview?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-lg px-8 py-6 h-auto bg-white/25 backdrop-blur-md border-2 border-white/40 text-white font-semibold hover:bg-white/35 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="overview" className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, idx) => (
                <Card key={idx} className="p-4 bg-gradient-card border-0 shadow-card">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-gradient-accent">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Business Benefits</h2>
            <div className="space-y-4">
              {product.benefits.map((benefit, idx) => (
                <Card key={idx} className="p-6 bg-gradient-card border-0 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/10">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-foreground pt-1">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-card border-0 shadow-luxury text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to transform your operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading manufacturers who are already using {product.name} to optimize their production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate("/pricing")}
                className="bg-gradient-hero hover:opacity-90 transition-opacity text-white border-0"
              >
                View Pricing Plans
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate("/#contact")}
              >
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
