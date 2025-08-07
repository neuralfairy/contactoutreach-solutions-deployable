import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Setup in under 5 minutes",
    "Full platform access"
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-responsive relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-8">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to 3x Your Lead Generation?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of sales professionals who have transformed their pipeline 
            with our AI-powered lead generation platform.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              className="bg-white text-primary hover:bg-white/90 font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 group"
            >
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://salescentri.com/get-started/book-demo">
                Book Personal Demo
              </a>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="text-white/70 text-sm">
            No spam, no commitment. Cancel anytime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;