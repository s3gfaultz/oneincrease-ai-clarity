import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      price: "2,999",
      period: "month",
      description: "Perfect for small to medium manufacturers looking to get started with AI optimization",
      features: [
        "Access to one AI solution (Cassandra, Dexter, or Zain)",
        "Up to 5 users",
        "Email support (24-48h response)",
        "Monthly performance reports",
        "Basic training and onboarding",
        "Standard integration support",
        "Community access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "6,999",
      period: "month",
      description: "Ideal for growing manufacturers ready to scale their operations",
      features: [
        "Access to two AI solutions of your choice",
        "Up to 20 users",
        "Priority email & chat support (12h response)",
        "Weekly performance reports",
        "Advanced training and onboarding",
        "Premium integration support",
        "Dedicated account manager",
        "Custom dashboard configuration",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Complete solution for large-scale manufacturers with custom requirements",
      features: [
        "Full access to all three AI solutions",
        "Unlimited users",
        "24/7 priority support with 4h SLA",
        "Real-time analytics and reporting",
        "White-glove onboarding and training",
        "Custom integration development",
        "Dedicated success team",
        "Custom feature development",
        "On-premise deployment option",
        "Advanced security and compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, <span className="bg-gradient-hero bg-clip-text text-transparent">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your manufacturing operation. All plans include our core AI capabilities with flexible scaling options.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-glass border border-white/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">30-day money-back guarantee on all plans</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative p-8 bg-gradient-card border-0 shadow-card hover:shadow-luxury transition-all duration-500 flex flex-col ${
                  plan.popular ? "md:scale-105 shadow-luxury" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-hero text-white text-sm font-medium">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 p-1 rounded-full bg-gradient-accent flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  onClick={() => navigate("/#contact")}
                  className={
                    plan.popular
                      ? "w-full bg-gradient-hero hover:opacity-90 transition-opacity text-white border-0"
                      : "w-full"
                  }
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Can I switch plans later?</h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  We offer a 14-day free trial for the Professional plan. No credit card required to start.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h3 className="text-xl font-semibold mb-2">What kind of support do you offer?</h3>
                <p className="text-muted-foreground">
                  All plans include email support. Professional plans get priority support with faster response times, and Enterprise customers receive 24/7 dedicated support with a 4-hour SLA.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card">
                <h3 className="text-xl font-semibold mb-2">How does implementation work?</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive onboarding for all plans. Enterprise customers receive white-glove implementation with dedicated engineers to ensure seamless integration with your existing systems.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-card border-0 shadow-luxury text-center">
            <h2 className="text-4xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help you find the perfect solution for your manufacturing needs.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/#contact")}
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-white border-0"
            >
              Contact Our Sales Team
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
