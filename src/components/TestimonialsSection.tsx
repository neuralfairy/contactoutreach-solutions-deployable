import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Sales",
      company: "TechGrowth Inc.",
      avatar: "SC",
      rating: 5,
      quote: "Contactoutreach transformed our lead generation process. We've seen a 300% increase in qualified leads and our conversion rate improved dramatically. The AI targeting is incredibly accurate.",
      metrics: "300% Lead Increase"
    },
    {
      name: "Michael Rodriguez",
      title: "Sales Director",
      company: "InnovateCorp",
      avatar: "MR",
      rating: 5,
      quote: "The platform's analytics and real-time insights have been game-changing for our team. We can now identify high-value prospects instantly and focus our efforts where they matter most.",
      metrics: "85% Time Saved"
    },
    {
      name: "Emily Thompson",
      title: "Head of Business Development",
      company: "ScalePoint Solutions",
      avatar: "ET",
      rating: 5,
      quote: "Outstanding ROI and exceptional support team. The lead quality is consistently high, and the integration with our existing CRM was seamless. Highly recommend for any serious sales organization.",
      metrics: "450% ROI"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by
            <span className="text-gradient"> 500+ Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why sales teams choose our platform to drive their growth and exceed their targets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-8 shadow-lg border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/60" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
                <span className="text-success font-medium text-sm">{testimonial.metrics}</span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Leads Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;