import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    name: "Northern Beaches",
    address: "Level 2, 24 Oaks Avenue",
    suburb: "Dee Why NSW 2099",
    phone: "(02) 9999 8888",
    email: "deewy@gairlegal.com.au",
    hours: "Monday - Friday, 8:30am - 5:30pm",
    mapUrl: "https://maps.google.com/?q=24+Oaks+Avenue+Dee+Why+NSW",
  },
  {
    name: "Chatswood",
    address: "Level 5, 821 Pacific Highway",
    suburb: "Chatswood NSW 2067",
    phone: "(02) 9413 8888",
    email: "chatswood@gairlegal.com.au",
    hours: "Monday - Friday, 8:30am - 5:30pm",
    mapUrl: "https://maps.google.com/?q=821+Pacific+Highway+Chatswood+NSW",
  },
  {
    name: "Newcastle",
    address: "Level 1, 45 Hunter Street",
    suburb: "Newcastle NSW 2300",
    phone: "(02) 4929 8888",
    email: "newcastle@gairlegal.com.au",
    hours: "Monday - Friday, 8:30am - 5:30pm",
    mapUrl: "https://maps.google.com/?q=45+Hunter+Street+Newcastle+NSW",
  },
  {
    name: "Melbourne",
    address: "Level 20, 101 Collins Street",
    suburb: "Melbourne VIC 3000",
    phone: "(03) 9999 8888",
    email: "melbourne@gairlegal.com.au",
    hours: "Monday - Friday, 8:30am - 5:30pm",
    mapUrl: "https://maps.google.com/?q=101+Collins+Street+Melbourne+VIC",
  },
];

export default function Locations() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container-legal">
          <span className="text-label text-gold-light mb-4 block">Our Locations</span>
          <h1 className="heading-display text-primary-foreground">
            Local presence. National capability.
          </h1>
          <p className="text-xl text-primary-foreground/70 mt-6 max-w-2xl">
            Four offices across New South Wales and Victoria, providing responsive local service with national reach.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.name}
                className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-card transition-shadow"
              >
                {/* Map placeholder */}
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors flex items-center"
                  >
                    <MapPin className="h-8 w-8" />
                    <span className="ml-2 text-sm">View on Google Maps</span>
                  </a>
                </div>

                {/* Details */}
                <div className="p-8">
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                    {office.name}
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{office.address}</p>
                        <p className="text-muted-foreground">{office.suburb}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{office.hours}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="btn-secondary w-full text-center"
                    >
                      Contact this office
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy py-16">
        <div className="container-legal text-center">
          <h2 className="font-serif text-3xl font-medium text-primary-foreground mb-4">
            Can't find a local office?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            We service clients across Australia. Contact us to discuss how we can assist.
          </p>
          <Link to="/contact" className="btn-primary bg-gold hover:bg-gold-light text-navy">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
