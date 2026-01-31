import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const offices = [
  {
    name: "Northern Beaches",
    address: "Level 2, 24 Oaks Avenue, Dee Why NSW 2099",
    phone: "(02) 9999 8888",
  },
  {
    name: "Chatswood",
    address: "Level 5, 821 Pacific Highway, Chatswood NSW 2067",
    phone: "(02) 9413 8888",
  },
  {
    name: "Newcastle",
    address: "Level 1, 45 Hunter Street, Newcastle NSW 2300",
    phone: "(02) 4929 8888",
  },
  {
    name: "Melbourne",
    address: "Level 20, 101 Collins Street, Melbourne VIC 3000",
    phone: "(03) 9999 8888",
  },
];

const quickLinks = [
  { name: "Workers Compensation", href: "/expertise/workers-compensation" },
  { name: "Work Injury Damages", href: "/expertise/work-injury-damages" },
  { name: "Employment Law", href: "/expertise/employment-law" },
  { name: "Public Liability", href: "/expertise/public-liability" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-legal section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold">Gair Legal</span>
              <span className="block text-xs tracking-widest uppercase text-gold-light mt-1">
                Dispute Resolution Specialists
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              A progressive Australian law firm recognised among the nation's premier dispute resolution specialists.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/20 rounded-sm hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Expertise</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-medium mb-6">Our Offices</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.name} className="space-y-2">
                  <h5 className="font-medium text-gold-light">{office.name}</h5>
                  <div className="flex items-start text-sm text-primary-foreground/70">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center text-sm text-primary-foreground/70">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-gold-light transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-legal py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-primary-foreground/50">
              <span>© {new Date().getFullYear()} Gair Legal. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </Link>
            </div>
            <p className="text-xs text-primary-foreground/50 text-center md:text-right">
              Established 2011 • National Capability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
