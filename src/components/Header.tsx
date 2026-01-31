import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "/expertise" },
  { name: "Our Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-legal">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Gair Legal
              </span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Dispute Resolution Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+61299998888"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              (02) 9999 8888
            </a>
            <Link to="/contact" className="btn-primary">
              Speak to our team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-elevated transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="container-legal py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block py-2 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "text-gold"
                  : "text-foreground hover:text-gold"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <Link
              to="/contact"
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speak to our team
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
