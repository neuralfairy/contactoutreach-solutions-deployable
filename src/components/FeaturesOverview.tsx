import { Target, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesOverview = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced AI algorithms identify and target your ideal prospects with laser precision, ensuring higher conversion rates.",
      metrics: "95% Accuracy Rate"
    },
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Streamline your sales process with automated workflows, smart sequencing, and real-time lead scoring.",
      metrics: "3x Faster Pipeline"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with GDPR compliance, ensuring your prospect data is always protected and compliant.",
      metrics: "SOC 2 Certified"
    },
    {
      icon: Zap,
      title: "Real-time Intelligence",
      description: "Get instant insights on prospect behavior, engagement patterns, and buying signals to optimize your outreach.",
      metrics: "Live Updates"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Unified workspace for your entire sales team with shared pipelines, notes, and performance tracking.",
      metrics: "Unlimited Users"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to measure ROI, track performance, and optimize your lead generation strategy.",
      metrics: "50+ Metrics"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="text-gradient"> Modern Sales Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to generate, qualify, and convert high-quality B2B leads. 
            Built for sales professionals who demand results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Metrics Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-primary font-medium text-sm">{feature.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Lead Generation?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of sales professionals who trust our platform to drive their growth.
              Start your free trial today and see the difference quality leads make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" asChild className="btn-outline">
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  View Interactive Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;