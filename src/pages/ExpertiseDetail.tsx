import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const expertiseData: Record<string, {
  title: string;
  summary: string;
  howWeHelp: string[];
  whyUs: string[];
  relatedServices: { title: string; slug: string }[];
}> = {
  "workers-compensation": {
    title: "Workers Compensation",
    summary: "We partner with insurers, employers, and self-insurers to resolve claims efficiently, reduce risk, and improve long-term outcomes. Our team delivers strategic advice from initial notification through to final resolution.",
    howWeHelp: [
      "Early liability assessments and strategic recommendations",
      "Strategy development for complex and high-volume portfolios",
      "Litigation and dispute resolution across all jurisdictions",
      "Training and advisory services for claims teams",
      "Proactive file management and regular reporting",
    ],
    whyUs: [
      "Dedicated specialist teams with deep scheme knowledge",
      "Consistent, defensible outcomes across portfolios",
      "Clear reporting and transparent cost control",
      "Technology-enabled efficiency and collaboration",
    ],
    relatedServices: [
      { title: "Work Injury Damages", slug: "work-injury-damages" },
      { title: "Employment Law & WHS", slug: "employment-law" },
    ],
  },
  "work-injury-damages": {
    title: "Work Injury Damages & Recoveries",
    summary: "Our work injury damages team provides robust defence for common law claims and pursues recovery actions to protect our clients' interests. We combine thorough investigation with pragmatic negotiation strategies.",
    howWeHelp: [
      "Defence of work injury damages claims",
      "Recovery actions against third parties",
      "Complex multi-party litigation",
      "Early assessment and settlement strategies",
      "Appellate work and precedent-setting matters",
    ],
    whyUs: [
      "Experienced trial advocates with strong courtroom presence",
      "Proven track record in complex, high-value matters",
      "Strategic approach to settlement negotiations",
      "Close collaboration with insurers and employers",
    ],
    relatedServices: [
      { title: "Workers Compensation", slug: "workers-compensation" },
      { title: "Catastrophic Injuries", slug: "catastrophic-injuries" },
    ],
  },
  "catastrophic-injuries": {
    title: "Catastrophic Injuries & Death Claims",
    summary: "High-severity claims require exceptional care, expertise, and sensitivity. Our specialist catastrophic injury team manages complex matters with the skill and attention they demand.",
    howWeHelp: [
      "Management of severe injury and death claims",
      "Assessment of long-term care needs and costs",
      "Coordination with medical and rehabilitation experts",
      "Strategic settlement and structured outcomes",
      "Appellate advocacy in significant matters",
    ],
    whyUs: [
      "Dedicated team for high-severity matters",
      "Sensitivity and discretion in difficult cases",
      "Strong relationships with expert witnesses",
      "Experience in large, complex settlements",
    ],
    relatedServices: [
      { title: "Workers Compensation", slug: "workers-compensation" },
      { title: "Public Liability", slug: "public-liability" },
    ],
  },
  "employment-law": {
    title: "Employment Law & WHS",
    summary: "We provide comprehensive employment law advice to help organisations navigate complex workplace issues. Our WHS practice supports compliance and responds effectively to incidents and investigations.",
    howWeHelp: [
      "Employment contracts and policy development",
      "Workplace investigations and disciplinary matters",
      "Unfair dismissal and adverse action claims",
      "WHS compliance and incident response",
      "Prosecutions and regulatory investigations",
    ],
    whyUs: [
      "Integrated employment and WHS expertise",
      "Practical, commercially-focused advice",
      "Strong advocacy in tribunals and courts",
      "Proactive risk management approach",
    ],
    relatedServices: [
      { title: "Workers Compensation", slug: "workers-compensation" },
      { title: "Public Liability", slug: "public-liability" },
    ],
  },
  "public-liability": {
    title: "Public Liability",
    summary: "Our public liability team provides rapid response and strategic management for occupiers' liability, product liability, and professional negligence claims. We focus on early resolution and risk mitigation.",
    howWeHelp: [
      "Occupiers' and public liability claims",
      "Product liability and consumer law matters",
      "Professional negligence defence",
      "Risk assessments and loss prevention advice",
      "Complex multi-party proceedings",
    ],
    whyUs: [
      "Rapid response and early intervention",
      "Strategic approach to complex claims",
      "Strong investigative capabilities",
      "Cost-effective resolution strategies",
    ],
    relatedServices: [
      { title: "Motor Vehicle", slug: "motor-vehicle" },
      { title: "Catastrophic Injuries", slug: "catastrophic-injuries" },
    ],
  },
  "motor-vehicle": {
    title: "Motor Vehicle",
    summary: "We manage motor vehicle claims at scale, providing clear pathways to resolution for CTP insurers and fleet operators. Our streamlined processes deliver consistent outcomes efficiently.",
    howWeHelp: [
      "CTP claim management and litigation",
      "Third party property damage recovery",
      "Fleet claims management",
      "Fraud investigation and defence",
      "Appellate advocacy",
    ],
    whyUs: [
      "High-volume capability with quality outcomes",
      "Efficient processes and clear reporting",
      "Strong relationships with CTP schemes",
      "Technology-enabled collaboration",
    ],
    relatedServices: [
      { title: "Public Liability", slug: "public-liability" },
      { title: "Workers Compensation", slug: "workers-compensation" },
    ],
  },
};

export default function ExpertiseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const expertise = slug ? expertiseData[slug] : null;

  if (!expertise) {
    return (
      <main className="pt-24 section-padding">
        <div className="container-legal text-center">
          <h1 className="heading-section mb-4">Page not found</h1>
          <Link to="/expertise" className="link-gold">
            Return to Expertise
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        >
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative container-legal">
          <Link
            to="/expertise"
            className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-gold-light mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Expertise
          </Link>
          <h1 className="heading-display text-primary-foreground">{expertise.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <div>
                <p className="text-xl text-foreground leading-relaxed">{expertise.summary}</p>
              </div>

              {/* How We Help */}
              <div>
                <h2 className="heading-card text-foreground mb-6">How we help</h2>
                <ul className="space-y-3">
                  {expertise.howWeHelp.map((item) => (
                    <li key={item} className="flex items-start text-body">
                      <Check className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Gair Legal */}
              <div>
                <h2 className="heading-card text-foreground mb-6">Why Gair Legal</h2>
                <ul className="space-y-3">
                  {expertise.whyUs.map((item) => (
                    <li key={item} className="flex items-start text-body">
                      <Check className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="gradient-navy p-8 rounded-sm">
                <h3 className="font-serif text-xl font-medium text-primary-foreground mb-4">
                  Speak to our team
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Get expert advice on your {expertise.title.toLowerCase()} matters.
                </p>
                <Link to="/contact" className="btn-primary w-full text-center bg-gold hover:bg-gold-light text-navy">
                  Contact us
                </Link>
              </div>

              {/* Related Services */}
              <div className="p-8 bg-secondary rounded-sm">
                <h3 className="font-serif text-lg font-medium text-foreground mb-6">
                  Related services
                </h3>
                <ul className="space-y-4">
                  {expertise.relatedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/expertise/${service.slug}`}
                        className="flex items-center text-foreground hover:text-gold transition-colors group"
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
