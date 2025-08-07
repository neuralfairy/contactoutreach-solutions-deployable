import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, TrendingUp, Shield, Zap, Users, BarChart3, Brain, Globe, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Targeting",
      description: "Advanced machine learning algorithms analyze millions of data points to identify your ideal prospects with unprecedented accuracy.",
      keyFeatures: ["Behavioral analysis", "Intent data tracking", "Lookalike modeling", "Real-time scoring"]
    },
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Streamline your entire sales process with intelligent automation, smart sequencing, and predictive analytics.",
      keyFeatures: ["Automated workflows", "Smart cadences", "Pipeline optimization", "Conversion tracking"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with full GDPR compliance, ensuring your data and your prospects' information is always protected.",
      keyFeatures: ["SOC 2 certified", "GDPR compliant", "End-to-end encryption", "Regular audits"]
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Leverage AI to predict buying behavior, optimal contact timing, and the best messaging for each prospect.",
      keyFeatures: ["Buying signal detection", "Timing optimization", "Message personalization", "Outcome prediction"]
    },
    {
      icon: Globe,
      title: "Multi-Channel Outreach",
      description: "Reach prospects across email, social media, phone, and more with coordinated campaigns and unified tracking.",
      keyFeatures: ["Email sequences", "Social selling", "Cold calling", "Multi-touch attribution"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to measure performance, track ROI, and optimize your strategies.",
      keyFeatures: ["Custom dashboards", "ROI tracking", "Performance metrics", "Predictive insights"]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Marketo", "Pardot", "LinkedIn Sales Navigator",
    "ZoomInfo", "Outreach.io", "Salesloft", "Slack", "Microsoft Teams", "Zapier"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding gradient-subtle">
          <div className="container-responsive">
            <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powerful Features for
                <span className="text-gradient block">Modern Sales Teams</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the comprehensive suite of tools designed to transform your lead generation 
                and accelerate your sales success.
              </p>
              <Button asChild className="btn-hero">
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  Try Interactive Demo
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Key Features */}
                        <div className="grid grid-cols-2 gap-2">
                          {feature.keyFeatures.map((keyFeature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{keyFeature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-responsive">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect with your existing tools and workflows
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={integration}
                  className="bg-card rounded-lg p-4 text-center border border-border hover:shadow-md transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-sm font-medium text-muted-foreground">
                    {integration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center border border-border animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience These Features?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Start your free trial today and discover how our platform can transform your lead generation results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-hero">
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                  </a>
                </Button>
                <Button variant="outline" asChild className="btn-outline">
                  <a href="https://salescentri.com/get-started/book-demo">
                    Book Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;