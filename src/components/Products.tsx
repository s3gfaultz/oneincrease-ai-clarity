import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Clock, BarChart3, ArrowUpRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Cassandra",
      icon: Brain,
      title: "AI Demand Prediction",
      description: "Advanced AI model that predicts future orders based on historical data, market trends, and seasonal patterns. Reduce inventory costs while ensuring demand fulfillment.",
      features: ["Historical data analysis", "Market trend integration", "Seasonal pattern recognition", "95%+ accuracy rate"],
      color: "from-primary/10 to-accent/10"
    },
    {
      name: "Dexter", 
      icon: Clock,
      title: "Smart Machine Scheduler",
      description: "Intelligent scheduling system that optimizes machine utilization, reduces downtime, and improves overall production efficiency through AI-driven resource allocation.",
      features: ["Real-time scheduling", "Downtime minimization", "Resource optimization", "40% efficiency boost"],
      color: "from-secondary/10 to-primary/10"
    },
    {
      name: "Zain",
      icon: BarChart3, 
      title: "Performance Analytics",
      description: "Comprehensive performance analyzer that monitors capacity utilization, identifies bottlenecks, and provides actionable insights to maximize operational efficiency.",
      features: ["Capacity monitoring", "Bottleneck identification", "Performance metrics", "Real-time dashboards"],
      color: "from-accent/10 to-secondary/10"
    }
  ];

  return (
    <section className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">AI-Powered</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized AI systems working together to transform your manufacturing operations into a data-driven powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
  key={product.name}
  className="group p-8 bg-gradient-card shadow-card hover:shadow-luxury transition-all duration-500 ease-luxury border-0 relative overflow-hidden flex flex-col justify-between"
>
  {/* Background gradient */}
  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
  
  <div className="relative z-10">
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <div className="p-3 rounded-lg bg-gradient-glass backdrop-blur-glass border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <product.icon className="w-8 h-8 text-primary" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
        <p className="text-sm font-medium bg-gradient-accent bg-clip-text text-transparent">{product.title}</p>
      </div>
    </div>

    <p className="text-muted-foreground mb-6 leading-relaxed">
      {product.description}
    </p>

    <ul className="space-y-2 mb-8">
      {product.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-accent" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  </div>

  <Button variant="glass" className="w-full group text-foreground hover:text-foreground relative z-10 mt-4">
    Learn More
    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
  </Button>
</Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;