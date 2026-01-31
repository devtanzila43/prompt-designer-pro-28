import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const expertiseAreas = [
  {
    title: "Workers Compensation",
    slug: "workers-compensation",
    description: "End-to-end advice and efficient resolution strategies for insurers, employers, and self-insurers.",
    services: ["Liability assessments", "Claims management", "Dispute resolution", "Training and advisory"],
  },
  {
    title: "Work Injury Damages & Recoveries",
    slug: "work-injury-damages",
    description: "Robust defence and pragmatic outcomes for work injury damages claims.",
    services: ["Common law defence", "Recovery actions", "Complex claims", "Settlement negotiations"],
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    slug: "catastrophic-injuries",
    description: "Specialist teams for high-severity matters requiring exceptional care and expertise.",
    services: ["Severe injury claims", "Death claims", "Care and support needs", "Long-term management"],
  },
  {
    title: "Employment Law & WHS",
    slug: "employment-law",
    description: "Comprehensive employment law and workplace health and safety expertise.",
    services: ["Compliance advice", "Workplace investigations", "Dispute management", "Policy development"],
  },
  {
    title: "Public Liability",
    slug: "public-liability",
    description: "Rapid response and risk mitigation for complex public liability claims.",
    services: ["Occupiers' liability", "Product liability", "Professional negligence", "Risk assessment"],
  },
  {
    title: "Motor Vehicle",
    slug: "motor-vehicle",
    description: "Clear pathways to resolution for motor vehicle claims at scale.",
    services: ["CTP claims", "Third party recovery", "Property damage", "Fleet management"],
  },
];

export default function Expertise() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        >
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative container-legal">
          <span className="text-label text-gold-light mb-4 block">Our Expertise</span>
          <h1 className="heading-display text-primary-foreground max-w-3xl">
            Specialist dispute resolution
          </h1>
          <p className="text-xl text-primary-foreground/80 mt-6 max-w-2xl">
            Deep expertise across workers compensation, employment law, and civil liability.
          </p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/expertise/${area.slug}`}
                className="group p-8 lg:p-10 bg-card border border-border rounded-sm hover:shadow-card transition-all duration-300"
              >
                <h2 className="heading-card text-foreground mb-4 group-hover:text-gold transition-colors">
                  {area.title}
                </h2>
                <p className="text-body mb-6">{area.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {area.services.map((service) => (
                    <li key={service} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1 h-1 bg-gold rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-medium text-gold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16">
        <div className="container-legal text-center">
          <h2 className="font-serif text-3xl font-medium text-primary-foreground mb-4">
            Need specialist advice?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Our senior practitioners are ready to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary bg-gold hover:bg-gold-light text-navy">
            Speak to our team
          </Link>
        </div>
      </section>
    </main>
  );
}
