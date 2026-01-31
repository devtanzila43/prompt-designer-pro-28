import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Scale, Zap, Heart } from "lucide-react";
import heroCoastal from "@/assets/hero-coastal.jpg";

const headlines = [
  "Superior representation",
  "Law firm of choice",
  "Exceeding client expectations",
  "Culture of innovation and excellence",
];

const services = [
  {
    title: "Workers Compensation",
    description: "End-to-end advice and efficient resolution strategies for insurers and employers.",
    href: "/expertise/workers-compensation",
  },
  {
    title: "Work Injury Damages",
    description: "Robust defence and pragmatic outcomes for complex injury claims.",
    href: "/expertise/work-injury-damages",
  },
  {
    title: "Catastrophic Injuries",
    description: "Specialist teams for high-severity matters and death claims.",
    href: "/expertise/catastrophic-injuries",
  },
  {
    title: "Employment Law & WHS",
    description: "Compliance, investigations, and dispute management expertise.",
    href: "/expertise/employment-law",
  },
  {
    title: "Public Liability",
    description: "Rapid response and risk mitigation for complex claims.",
    href: "/expertise/public-liability",
  },
  {
    title: "Motor Vehicle",
    description: "Clear pathways to resolution at scale.",
    href: "/expertise/motor-vehicle",
  },
];

const differentiators = [
  { icon: Shield, title: "Strategic Insight", description: "Proactive case strategy" },
  { icon: Users, title: "Senior Specialist Teams", description: "Dedicated experts" },
  { icon: Scale, title: "Cost-Effective Outcomes", description: "Measurable value" },
  { icon: Zap, title: "Technology-Enabled", description: "Modern efficiency" },
  { icon: Heart, title: "Values-Based Service", description: "Integrity first" },
];

export default function Home() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCoastal})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent" />
        </div>

        <div className="relative container-legal pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="text-label text-gold-light">Established 2011</span>
            </div>

            <h1
              className={`heading-display text-primary-foreground mb-6 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {headlines[currentHeadline]}
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
              Strategic, proactive dispute resolution for insurers, employers and corporate clients, nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Speak to our team
              </Link>
              <Link
                to="/expertise"
                className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-navy"
              >
                Explore our expertise
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Credibility Band */}
      <section className="bg-cream py-8 border-y border-border">
        <div className="container-legal">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              Established 2011
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              National Capability
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              Integrity
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              Loyalty
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              Accountability
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3" />
              Quality
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="text-center mb-16">
            <span className="text-label text-gold mb-4 block">Our Expertise</span>
            <h2 className="heading-section text-foreground mb-4">Areas of Practice</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="card-service group"
              >
                <h3 className="heading-card text-foreground mb-3 group-hover:text-navy transition-colors">
                  {service.title}
                </h3>
                <p className="text-body mb-4">{service.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-gold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-secondary">
        <div className="container-legal">
          <div className="text-center mb-16">
            <span className="text-label text-gold mb-4 block">Why Gair Legal</span>
            <h2 className="heading-section text-foreground mb-4">What Sets Us Apart</h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-navy mb-4">
                  <item.icon className="h-6 w-6 text-gold-light" />
                </div>
                <h3 className="font-serif font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="gradient-navy py-16">
        <div className="container-legal text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-4">
            Talk to a principal today
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Get expert advice from our senior specialists. We respond promptly and confidentially.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+61299998888" className="btn-secondary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-navy">
              (02) 9999 8888
            </a>
            <Link to="/contact" className="btn-primary bg-gold hover:bg-gold-light text-navy">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
