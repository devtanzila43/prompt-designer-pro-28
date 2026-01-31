import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Michael Gair",
    title: "Managing Principal",
    location: "Northern Beaches",
    areas: ["Workers Compensation", "Work Injury Damages"],
    image: null,
    email: "michael.gair@gairlegal.com.au",
    phone: "(02) 9999 8888",
    bio: "Michael founded Gair Legal in 2011 with a vision to create a progressive, values-based law firm. With over 25 years of experience in insurance law, he leads the firm's strategic direction and manages complex disputes.",
  },
  {
    name: "Sarah Chen",
    title: "Principal",
    location: "Chatswood",
    areas: ["Employment Law", "WHS"],
    image: null,
    email: "sarah.chen@gairlegal.com.au",
    phone: "(02) 9413 8888",
    bio: "Sarah leads our employment law practice, advising employers on complex workplace matters. She has extensive experience in unfair dismissal, discrimination claims, and WHS prosecutions.",
  },
  {
    name: "James Morrison",
    title: "Principal",
    location: "Melbourne",
    areas: ["Public Liability", "Motor Vehicle"],
    image: null,
    email: "james.morrison@gairlegal.com.au",
    phone: "(03) 9999 8888",
    bio: "James heads our Melbourne office and brings over 20 years of experience in civil liability. He is known for his strategic approach to complex litigation and strong courtroom advocacy.",
  },
  {
    name: "Emma Wright",
    title: "Senior Associate",
    location: "Newcastle",
    areas: ["Workers Compensation", "Catastrophic Injuries"],
    image: null,
    email: "emma.wright@gairlegal.com.au",
    phone: "(02) 4929 8888",
    bio: "Emma specialises in catastrophic injury claims and workers compensation matters. She manages our Newcastle presence and is committed to achieving the best outcomes for clients.",
  },
  {
    name: "David Park",
    title: "Senior Associate",
    location: "Northern Beaches",
    areas: ["Work Injury Damages", "Motor Vehicle"],
    image: null,
    email: "david.park@gairlegal.com.au",
    phone: "(02) 9999 8888",
    bio: "David is an experienced litigator with a focus on work injury damages and motor vehicle claims. He is known for his thorough preparation and effective advocacy.",
  },
  {
    name: "Lisa Thompson",
    title: "Associate",
    location: "Chatswood",
    areas: ["Employment Law", "Public Liability"],
    image: null,
    email: "lisa.thompson@gairlegal.com.au",
    phone: "(02) 9413 8888",
    bio: "Lisa advises on employment law and public liability matters. She provides practical, commercially-focused advice and is dedicated to responsive client service.",
  },
];

export default function Team() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container-legal">
          <span className="text-label text-gold-light mb-4 block">Our Team</span>
          <h1 className="heading-display text-primary-foreground max-w-3xl">
            Senior specialists dedicated to your success
          </h1>
          <p className="text-xl text-primary-foreground/70 mt-6 max-w-2xl">
            Every matter is managed by experienced practitioners who take personal responsibility for outcomes.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-card transition-all duration-300"
              >
                {/* Photo placeholder */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <span className="font-serif text-4xl text-muted-foreground/30">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-2">{member.title}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.location}</p>

                  {/* Areas */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.areas.map((area) => (
                      <span
                        key={area}
                        className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Contact */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-muted-foreground hover:text-gold transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="p-2 text-muted-foreground hover:text-gold transition-colors"
                      aria-label={`Call ${member.name}`}
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-gold transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-cream">
        <div className="container-legal text-center">
          <h2 className="heading-section text-foreground mb-4">Join our team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We're always interested in hearing from talented lawyers who share our values and commitment to excellence.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
