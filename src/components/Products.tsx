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
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "Dexter", 
      icon: Clock,
      title: "Smart Machine Scheduler",
      description: "Intelligent scheduling system that optimizes machine utilization, reduces downtime, and improves overall production efficiency through AI-driven resource allocation.",
      features: ["Real-time scheduling", "Downtime minimization", "Resource optimization", "40% efficiency boost"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      name: "Zain",
      icon: BarChart3, 
      title: "Performance Analytics",
      description: "Comprehensive performance analyzer that monitors capacity utilization, identifies bottlenecks, and provides actionable insights to maximize operational efficiency.",
      features: ["Capacity monitoring", "Bottleneck identification", "Performance metrics", "Real-time dashboards"],
      color: "from-green-500/20 to-green-600/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our AI-Powered Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three specialized AI systems working together to transform your manufacturing operations into a data-driven powerhouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="group p-8 bg-gradient-card shadow-card hover:shadow-luxury transition-all duration-500 ease-luxury border-0 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-sm font-medium text-accent">{product.title}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="premium" className="w-full group">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;