import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, TrendingUp, Target, Users } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "How AI is Revolutionizing B2B Lead Generation in 2024",
    excerpt: "Discover the latest AI technologies transforming how businesses identify, target, and convert high-quality leads. Learn strategies that top-performing sales teams are using to achieve 300% better results.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "featured"
  };

  const blogPosts = [
    {
      title: "10 Proven Strategies to Increase Your Lead Conversion Rate",
      excerpt: "Transform your sales funnel with these data-backed tactics that have helped our clients achieve remarkable conversion improvements.",
      author: "Michael Chen",
      date: "January 12, 2024",
      readTime: "6 min read",
      category: "Lead Generation",
      icon: TrendingUp
    },
    {
      title: "The Ultimate Guide to B2B Sales Prospecting",
      excerpt: "A comprehensive walkthrough of modern prospecting techniques, from initial research to first contact and beyond.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      readTime: "12 min read",
      category: "Sales Strategy",
      icon: Target
    },
    {
      title: "Building High-Performance Sales Teams in 2024",
      excerpt: "Learn how to recruit, train, and manage sales teams that consistently exceed their targets using modern tools and methodologies.",
      author: "David Kim",
      date: "January 8, 2024",
      readTime: "9 min read",
      category: "Team Management",
      icon: Users
    },
    {
      title: "CRM Integration Best Practices for Lead Management",
      excerpt: "Maximize your ROI by properly integrating your lead generation platform with your existing CRM system.",
      author: "Lisa Thompson",
      date: "January 5, 2024",
      readTime: "7 min read",
      category: "Technology",
      icon: TrendingUp
    },
    {
      title: "Understanding Buyer Intent Data and Its Impact",
      excerpt: "Dive deep into buyer intent signals and learn how to leverage this data to prioritize prospects and improve conversion rates.",
      author: "Robert Wilson",
      date: "January 3, 2024",
      readTime: "10 min read",
      category: "Data Analytics",
      icon: Target
    },
    {
      title: "Cold Email Templates That Actually Work in 2024",
      excerpt: "Proven email templates and subject lines that get opened, read, and replied to by busy decision-makers.",
      author: "Amanda Foster",
      date: "January 1, 2024",
      readTime: "5 min read",
      category: "Email Marketing",
      icon: Users
    }
  ];

  const categories = [
    "All Posts",
    "Lead Generation", 
    "Sales Strategy",
    "AI & Technology",
    "Team Management",
    "Data Analytics",
    "Email Marketing"
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
                Sales Intelligence
                <span className="text-gradient block">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert insights, proven strategies, and the latest trends in B2B lead generation 
                and sales acceleration. Written by industry professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding -mt-16">
          <div className="container-responsive">
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <span className="text-primary font-medium text-sm">Featured Post</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button asChild className="btn-hero group">
                    <a href="https://salescentri.com/resources/whitepapers-ebooks">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Image Placeholder */}
                <div className="bg-gradient-primary flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                  <div className="text-primary-foreground text-center">
                    <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <div className="text-lg font-medium">Featured Article</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container-responsive">
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in-up">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "btn-hero" : "btn-outline"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <article
                    key={post.title}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    {/* Category */}
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 leading-tight hover:text-primary transition-colors">
                      <a href="https://salescentri.com/resources/whitepapers-ebooks">
                        {post.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12 animate-fade-in-up">
              <Button variant="outline" asChild className="btn-outline">
                <a href="https://salescentri.com/resources/tutorials-webinars">
                  Load More Articles
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-muted/30">
          <div className="container-responsive">
            <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Sales Insights
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest strategies, tips, and industry trends delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                />
                <Button asChild className="btn-hero">
                  <a href="https://salescentri.com/contact/sales-inquiry">Subscribe</a>
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

export default Blog;