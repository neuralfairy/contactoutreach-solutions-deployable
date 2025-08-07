import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "10M+", label: "Leads Generated" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5 Years", label: "Industry Experience" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years of B2B sales experience.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "AI and machine learning expert with deep experience in sales technology platforms.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring our clients achieve their growth objectives through our platform.",
      avatar: "ER"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your success. Every feature is designed to drive measurable results."
    },
    {
      icon: Users,
      title: "Customer-First",
      description: "Your growth is our mission. We build relationships, not just software."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously pushing boundaries with AI and technology to give you competitive advantages."
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Honest communication, clear pricing, and straightforward solutions you can trust."
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
                About
                <span className="text-gradient"> Contactoutreach</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're on a mission to revolutionize B2B lead generation through intelligent technology 
                and exceptional service. Founded by sales professionals, for sales professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding -mt-16">
          <div className="container-responsive">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We believe every business deserves access to high-quality leads that drive real growth. 
                  That's why we've built the most advanced B2B lead generation platform powered by AI and 
                  backed by human expertise.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Since our founding in Reno, Nevada, we've helped over 500 companies transform their 
                  sales processes and achieve remarkable results. Our platform has generated over 10 million 
                  qualified leads, contributing to billions in revenue for our clients.
                </p>
                <Button asChild className="btn-hero">
                  <a href="https://salescentri.com/get-started/book-demo">Learn How We Can Help</a>
                </Button>
              </div>

              <div className="animate-fade-in-right">
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <div className="font-medium">Proven Track Record</div>
                        <div className="text-sm text-muted-foreground">500+ successful implementations</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <div className="font-medium">Advanced Technology</div>
                        <div className="text-sm text-muted-foreground">AI-powered targeting and automation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div>
                        <div className="font-medium">Expert Support</div>
                        <div className="text-sm text-muted-foreground">Dedicated success managers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="flex gap-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-responsive">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl p-6 text-center border border-border shadow-sm card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {member.avatar}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
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
                Ready to Work With Us?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of companies who trust us to drive their lead generation and sales growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-hero">
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial
                  </a>
                </Button>
                <Button variant="outline" asChild className="btn-outline">
                  <a href="https://salescentri.com/company/about-us/leadership-team">
                    Meet Our Team
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

export default About;