import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  { value: "northern-beaches", label: "Northern Beaches" },
  { value: "chatswood", label: "Chatswood" },
  { value: "newcastle", label: "Newcastle" },
  { value: "melbourne", label: "Melbourne" },
];

const services = [
  { value: "workers-compensation", label: "Workers Compensation" },
  { value: "work-injury-damages", label: "Work Injury Damages" },
  { value: "catastrophic-injuries", label: "Catastrophic Injuries" },
  { value: "employment-law", label: "Employment Law & WHS" },
  { value: "public-liability", label: "Public Liability" },
  { value: "motor-vehicle", label: "Motor Vehicle" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    office: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container-legal">
          <span className="text-label text-gold-light mb-4 block">Contact Us</span>
          <h1 className="heading-display text-primary-foreground max-w-2xl">
            Speak to our team
          </h1>
          <p className="text-xl text-primary-foreground/70 mt-6 max-w-2xl">
            We respond promptly and confidentially. Get in touch to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="section-padding bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                    <svg
                      className="w-8 h-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="heading-section text-foreground mb-4">Thank you</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your message has been received. A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="office" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Office
                      </label>
                      <select
                        id="office"
                        name="office"
                        value={formData.office}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      >
                        <option value="">Select an office</option>
                        {offices.map((office) => (
                          <option key={office.value} value={office.value}>
                            {office.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Your information will be handled in accordance with our{" "}
                    <a href="/privacy" className="text-gold hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>

                  <button type="submit" className="btn-primary">
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="gradient-navy p-8 rounded-sm">
                <h3 className="font-serif text-xl font-medium text-primary-foreground mb-6">
                  Head Office
                </h3>
                <div className="space-y-4 text-primary-foreground/80">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gold-light mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>Level 2, 24 Oaks Avenue</p>
                      <p>Dee Why NSW 2099</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-light mr-3 flex-shrink-0" />
                    <a href="tel:+61299998888" className="hover:text-primary-foreground transition-colors">
                      (02) 9999 8888
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-light mr-3 flex-shrink-0" />
                    <a href="mailto:info@gairlegal.com.au" className="hover:text-primary-foreground transition-colors">
                      info@gairlegal.com.au
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gold-light mr-3 flex-shrink-0" />
                    <span className="text-sm">Mon - Fri, 8:30am - 5:30pm</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-secondary rounded-sm">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  All Offices
                </h3>
                <ul className="space-y-3">
                  {offices.map((office) => (
                    <li key={office.value}>
                      <a
                        href="/locations"
                        className="text-foreground hover:text-gold transition-colors"
                      >
                        {office.label}
                      </a>
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
