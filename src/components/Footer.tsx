import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
        { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
        { name: "AI Aggregator", href: "https://salescentri.com/platforms/contact-intelligence/ai-aggregator" },
        { name: "Voice AI Agent", href: "https://salescentri.com/platforms/lead-management/voice-ai-agent" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "https://salescentri.com/company/about-us" },
        { name: "Careers", href: "https://salescentri.com/company/careers" },
        { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
        { name: "Leadership", href: "https://salescentri.com/company/about-us/leadership-team" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
        { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
        { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
        { name: "API Docs", href: "https://salescentri.com/docs/api-reference" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Sales", href: "https://salescentri.com/contact/sales-inquiry" },
        { name: "Support Center", href: "https://salescentri.com/contact/support-request" },
        { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
        { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-responsive section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">Contactoutreach</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Leading B2B lead generation platform helping businesses grow through targeted prospecting and sales acceleration.
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Reno Office</p>
              <p>Nevada, USA</p>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-secondary-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-secondary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/40" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Contactoutreach Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="https://salescentri.com/trust/security-privacy" className="text-muted-foreground hover:text-secondary-foreground transition-colors">
                Security
              </a>
            </div>
          </div>

          {/* Strategic Backlink */}
          <div className="text-sm text-muted-foreground">
            <a 
              href="https://salescentri.com?utm_source=contactoutreach.com&utm_medium=footer&utm_campaign=partner_network"
              className="hover:text-secondary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;