import { motion } from "framer-motion";

const SaveTheDate = () => {
  return (
    <section id="save-the-date" className="relative py-24 md:py-32 bg-wedding-cream overflow-hidden">
      {/* Decorative arch frame */}
      <div className="absolute inset-4 md:inset-12 border-2 border-wedding-gold/30 rounded-t-[200px] pointer-events-none" />
      <div className="absolute inset-6 md:inset-14 border border-wedding-gold/15 rounded-t-[190px] pointer-events-none" />

      {/* Hanging diyas */}
      <div className="absolute top-8 left-8 md:left-20 text-wedding-gold text-2xl animate-gentle-pulse">🪔</div>
      <div className="absolute top-12 right-8 md:right-20 text-wedding-gold text-2xl animate-gentle-pulse" style={{ animationDelay: "1s" }}>🪔</div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 md:px-16 py-8 md:py-20 max-w-2xl mx-auto glass-panel-light rounded-[60px] md:rounded-[100px]"
      >
        {/* Lotus decorations */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-wedding-gold/60 text-2xl">❀</span>
          <span className="text-wedding-gold/80 text-3xl">✿</span>
          <span className="text-wedding-gold/60 text-2xl">❀</span>
        </div>

        <p className="text-wedding-gold/70 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs sm:text-base md:text-lg mb-6 font-display px-2">
          Together with their families
        </p>

        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-wedding-maroon font-bold md:tracking-wider mb-6 md:mb-8 leading-tight">
          SAVE THE DATE
        </h2>

        <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-6" />

        <p className="font-display text-3xl md:text-4xl text-wedding-maroon/80 mb-2 md:mb-4">
          Sunday
        </p>
        <p className="font-display text-6xl md:text-8xl text-wedding-gold font-bold mb-2 md:mb-4">
          19
        </p>
        <p className="font-display text-2xl md:text-3xl text-wedding-maroon/80">
          April 2026
        </p>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mt-8 mb-6" />

        {/* Mandala border */}
        <div className="flex justify-center gap-2 text-wedding-gold/40">
          {"✦ ✦ ✦ ✦ ✦".split(" ").map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
