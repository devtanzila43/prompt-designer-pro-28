import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import aboutImage from "@/assets/about-boardroom.jpg";

const values = [
  { title: "Quality", description: "Delivering excellence in every matter" },
  { title: "Integrity", description: "Honest, ethical representation" },
  { title: "Loyalty", description: "Committed partnership with clients" },
  { title: "Accountability", description: "Taking ownership of outcomes" },
];

const howWeWork = [
  "Proactive case strategy and early intervention",
  "Transparent communication at every stage",
  "Measurable value and cost control",
  "Technology-enabled efficiency",
  "Dedicated specialist teams",
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative container-legal">
          <span className="text-label text-gold-light mb-4 block">About Us</span>
          <h1 className="heading-display text-primary-foreground max-w-3xl">
            Values-based. Outcome-focused.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-label text-gold mb-4 block">Who We Are</span>
              <h2 className="heading-section text-foreground mb-6">
                A progressive Australian law firm
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body text-lg leading-relaxed mb-6">
                Gair Legal is recognised among the nation's premier dispute resolution specialists. Established in 2011, we have grown to become a trusted partner for insurers, employers, scheme agents, self-insurers, and corporations across Australia.
              </p>
              <p className="text-body leading-relaxed">
                Our focus is simple: deliver strategic, proactive representation that exceeds client expectations. We combine deep technical expertise with a values-based approach to achieve superior outcomes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-sm overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Gair Legal office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-navy p-6 rounded-sm">
                <span className="text-4xl font-serif font-semibold text-gold-light">2011</span>
                <p className="text-sm text-primary-foreground/70">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-legal">
          <div className="text-center mb-16">
            <span className="text-label text-gold mb-4 block">Our Values</span>
            <h2 className="heading-section text-foreground mb-4">
              The principles that guide us
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-background rounded-sm shadow-soft">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="gradient-navy p-10 rounded-sm">
                <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-8">
                  Our Approach
                </h3>
                <ul className="space-y-4">
                  {howWeWork.map((item) => (
                    <li key={item} className="flex items-start text-primary-foreground/90">
                      <Check className="h-5 w-5 text-gold-light mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-label text-gold mb-4 block">How We Work</span>
              <h2 className="heading-section text-foreground mb-6">
                Dedicated to superior client service
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-body text-lg leading-relaxed mb-6">
                We believe in proactive case management and transparent communication. Our clients receive strategic advice from the outset, enabling informed decisions and efficient dispute resolution.
              </p>
              <p className="text-body leading-relaxed">
                Every matter is managed by senior practitioners who take personal responsibility for outcomes. We invest in technology and processes that deliver measurable value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16">
        <div className="container-legal text-center">
          <h2 className="font-serif text-3xl font-medium text-primary-foreground mb-4">
            Partner with us
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Discover how Gair Legal can support your organisation's dispute resolution needs.
          </p>
          <Link to="/contact" className="btn-primary bg-gold hover:bg-gold-light text-navy">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
