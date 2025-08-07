import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const trustIndicators = [
    "500+ Active Clients",
    "10M+ Leads Generated", 
    "98% Client Satisfaction",
    "24/7 Support"
  ];

  return (
    <section className="relative overflow-hidden gradient-subtle section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium text-sm">
                #1 B2B Lead Generation Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Generate High-Quality
              <span className="text-gradient block">B2B Leads</span>
              That Convert
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your sales pipeline with AI-powered lead generation. Target the right prospects, 
              accelerate your sales cycle, and achieve measurable growth with our comprehensive B2B platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild className="btn-hero group">
                <a href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" asChild className="btn-outline group">
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium text-muted-foreground">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-card rounded-xl shadow-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Lead Generation Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-sm text-muted-foreground">Leads This Month</div>
                  </div>
                  <div className="bg-success/5 rounded-lg p-4 border border-success/20">
                    <div className="text-2xl font-bold text-success">94%</div>
                    <div className="text-sm text-muted-foreground">Quality Score</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lead Qualification</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Conversion Rate</span>
                      <span className="text-success">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-success h-2 rounded-full w-[78%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
                +127 New Leads
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-3 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce delay-1000">
                98% Accuracy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;