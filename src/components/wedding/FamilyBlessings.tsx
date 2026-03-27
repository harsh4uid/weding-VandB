import { motion } from "framer-motion";

const FamilyBlessings = () => {
  return (
    <section id="rsvp" className="relative py-20 md:py-28 bg-wedding-maroon overflow-hidden">
      {/* Ornate border */}
      <div className="absolute inset-4 md:inset-8 border border-wedding-gold/20 rounded-lg pointer-events-none" />
      <div className="absolute inset-6 md:inset-10 border border-wedding-gold/10 rounded-lg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl gold-gradient-text text-glow tracking-widest mb-10 px-2">
          FAMILY BLESSINGS
        </h2>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-wedding-gold/40" />
          <span className="text-wedding-gold text-xl">🪔</span>
          <div className="w-16 h-[1px] bg-wedding-gold/40" />
        </div>

        <p className="font-display text-lg sm:text-xl md:text-2xl text-wedding-cream/80 leading-relaxed mb-8 italic">
          "With the divine grace of Lord Ram and the blessings of our beloved families, two hearts unite in the sacred bond of marriage."
        </p>

        {/* Gold tree symbol */}
        <div className="text-wedding-gold text-5xl mb-8 animate-gentle-pulse">
          🌳
        </div>

        <p className="font-display text-lg text-wedding-gold/70 tracking-wider">
          The Sharma & Sharma Families
        </p>

        {/* Floral corners */}
        <div className="mt-10 flex justify-center gap-2 text-wedding-gold/30">
          {"❀ ✦ ❀ ✦ ❀".split(" ").map((s, i) => (
            <span key={i} className="text-lg">{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FamilyBlessings;
