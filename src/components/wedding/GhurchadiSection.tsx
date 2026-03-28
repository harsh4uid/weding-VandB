import { motion } from "framer-motion";

const GhurchadiSection = () => {
  return (
    <section id="ghurchadi" className="relative min-h-screen bg-wedding-maroon text-wedding-gold overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      {/* Ornate corner mandalas */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 -translate-x-1/2 -translate-y-1/2 animate-mandala-rotate">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-wedding-gold">
           <path d="M50 0 A50 50 0 0 1 100 50 L50 50 Z" />
         </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 translate-x-1/2 -translate-y-1/2 animate-mandala-rotate">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-wedding-gold scale-x-[-1]">
           <path d="M50 0 A50 50 0 0 1 100 50 L50 50 Z" />
         </svg>
      </div>

      {/* Outer ornate border frame */}
      <div className="absolute inset-4 md:inset-8 border border-wedding-gold/20 rounded-lg pointer-events-none" />
      
      <div className="max-w-2xl w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gold-gradient-text text-glow tracking-[0.2em] uppercase">
            Ghurchadi
          </h2>
          <h3 className="font-display text-2xl md:text-3xl gold-gradient-text opacity-90 tracking-widest uppercase mb-4">
            Ceremony
          </h3>
          <div className="text-4xl md:text-5xl font-display gold-gradient-text tracking-widest">
            5:30 PM
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative inline-block"
        >
          <img
            src={`${import.meta.env.BASE_URL}wedding/ghurchadi.png`}
            alt="Ghurchadi Illustration"
            className="w-full max-w-[400px] h-auto mx-auto drop-shadow-[0_0_40px_rgba(212,175,55,0.3)] rounded-2xl"
          />
        </motion.div>

        {/* Departure Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-display text-2xl md:text-3xl gold-gradient-text tracking-[0.15em] uppercase">
            Departure of Baraat
          </h3>
          <div className="text-4xl md:text-5xl font-display gold-gradient-text tracking-widest">
            6:30 PM
          </div>
        </motion.div>

        {/* Bottom decorative mandalas */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10 -translate-x-1/3 translate-y-1/3 animate-mandala-rotate pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-wedding-gold">
             <path d="M50 0 A50 50 0 0 1 100 50 L50 50 Z" />
           </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 translate-x-1/3 translate-y-1/3 animate-mandala-rotate pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-wedding-gold scale-x-[-1]">
             <path d="M50 0 A50 50 0 0 1 100 50 L50 50 Z" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default GhurchadiSection;
