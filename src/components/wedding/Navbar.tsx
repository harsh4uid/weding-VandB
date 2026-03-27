import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Ceremonies", href: "#ceremonies" },
  { label: "Venue & Family", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-wedding-maroon/95 backdrop-blur-sm border-b border-wedding-gold/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Decorative left */}
        <div className="hidden md:flex items-center gap-1 text-wedding-gold text-xs tracking-widest">
          ✦ ✦
        </div>

        {/* Center title */}
        <h1 className="font-script text-2xl md:text-3xl text-wedding-gold absolute left-1/2 -translate-x-1/2">
          Varun & Bhawna
        </h1>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-wedding-gold/80 text-sm tracking-wider uppercase hover:text-wedding-gold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-wedding-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-wedding-gold ml-auto"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-wedding-maroon border-t border-wedding-gold/20 px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-3 text-wedding-gold/80 text-sm tracking-wider uppercase hover:text-wedding-gold transition-colors border-b border-wedding-gold/10 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
