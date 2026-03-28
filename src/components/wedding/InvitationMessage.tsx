import { motion } from "framer-motion";

const InvitationMessage = () => {
  return (
    <section id="ceremonies" className="relative py-20 md:py-28 bg-wedding-cream overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(43, 76%, 53%) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(43, 76%, 53%) 1px, transparent 1px)`,
        backgroundSize: "40px 40px"
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <div className="text-wedding-gold text-4xl mb-6">🙏</div>

        <h3 className="font-devanagari text-2xl md:text-3xl text-wedding-maroon mb-6">
          ॥ श्री राम ॥
        </h3>

        <p className="font-display text-xl md:text-2xl text-wedding-maroon/80 leading-relaxed mb-8 italic">
          "With the blessings of Lord Ram, we cordially invite you to celebrate the divine union of"
        </p>

        <h2 className="font-script text-5xl md:text-7xl text-wedding-gold mb-6">
          Bhawna weds Varun
        </h2>

        <p className="font-display text-lg text-wedding-maroon/70 leading-relaxed max-w-xl mx-auto">
          As two souls come together in a sacred bond of love and devotion, we request the honour of your gracious presence to bless this auspicious occasion.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <div className="w-12 h-[1px] bg-wedding-gold/50 self-center" />
          <span className="text-wedding-gold text-xl">✦</span>
          <div className="w-12 h-[1px] bg-wedding-gold/50 self-center" />
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
