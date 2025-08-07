import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Building } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$49",
      period: "per user/month",
      description: "Perfect for small teams getting started with lead generation",
      popular: false,
      features: [
        "Up to 1,000 leads/month",
        "Basic targeting & filters",
        "Email integration",
        "Standard support",
        "Core analytics",
        "1 user included"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$149",
      period: "per user/month", 
      description: "Advanced features for growing sales teams",
      popular: true,
      features: [
        "Up to 5,000 leads/month",
        "AI-powered targeting",
        "Multi-channel outreach",
        "Priority support",
        "Advanced analytics",
        "Up to 5 users",
        "CRM integrations",
        "Custom workflows"
      ],
      cta: "Start Free Trial",
      href: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      period: "contact sales",
      description: "Unlimited power for large organizations",
      popular: false,
      features: [
        "Unlimited leads",
        "Custom AI models",
        "White-label options",
        "Dedicated success manager",
        "Custom integrations",
        "Unlimited users",
        "Advanced security",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      href: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Get full access to all Professional features for 14 days, no credit card required. You can generate up to 500 leads during your trial period."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing."
    },
    {
      question: "What's included in the lead count?",
      answer: "Each verified contact with complete profile information counts as one lead. This includes email, phone, company data, and enrichment."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely. Our Enterprise plan includes custom AI models, integrations, white-labeling, and dedicated support tailored to your needs."
    }
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
                Simple, Transparent
                <span className="text-gradient block">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Choose the perfect plan for your team. Start free, scale as you grow, 
                and only pay for what you need.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20">
                <span className="text-success font-medium text-sm">
                  14-day free trial • No credit card required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding -mt-16">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative bg-card rounded-xl p-8 border shadow-lg card-hover animate-fade-in-up ${
                      plan.popular ? 'border-primary shadow-primary/20 scale-105' : 'border-border'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                        plan.popular ? 'gradient-primary' : 'bg-muted'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          plan.popular ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && (
                          <span className="text-muted-foreground ml-2">{plan.period}</span>
                        )}
                      </div>
                      {plan.price === "Custom" && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      asChild 
                      className={plan.popular ? "btn-hero w-full" : "btn-outline w-full"}
                    >
                      <a href={plan.href}>{plan.cta}</a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-responsive">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of sales teams who trust our platform to drive their growth. 
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-hero">
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                  </a>
                </Button>
                <Button variant="outline" asChild className="btn-outline">
                  <a href="https://salescentri.com/get-started/book-demo">
                    Talk to Sales
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

export default Pricing;