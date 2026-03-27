const Footer = () => {
  return (
    <footer className="bg-wedding-dark-maroon py-8 text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-12 h-[1px] bg-wedding-gold/30" />
        <span className="text-wedding-gold/50 text-sm">✦</span>
        <div className="w-12 h-[1px] bg-wedding-gold/30" />
      </div>
      <p className="font-display text-wedding-cream/40 text-sm">
        © 2024 Varun & Bhawna's Wedding. All rights reserved.
      </p>
      <p className="font-devanagari text-wedding-gold/30 text-sm mt-2">
        ॥ शुभ विवाह ॥
      </p>
    </footer>
  );
};

export default Footer;
