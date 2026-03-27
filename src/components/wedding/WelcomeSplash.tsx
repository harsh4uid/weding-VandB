import { motion, AnimatePresence } from "framer-motion";

interface WelcomeSplashProps {
  onEnter: () => void;
}

const WelcomeSplash = ({ onEnter }: WelcomeSplashProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-wedding-maroon"
      >
        {/* Decorative mandala background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-wedding-gold/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-wedding-gold/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-wedding-gold/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center px-6 relative z-10"
        >
          {/* Om/Ganesh symbol */}
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-devanagari text-5xl md:text-7xl gold-gradient-text text-glow mb-6"
          >
            ॐ
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-wedding-cream/60 font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            You are invited to the wedding of
          </motion.p>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-script text-5xl md:text-7xl gold-gradient-text text-glow mb-8"
          >
            Varun & Bhawna
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="h-[1px] bg-wedding-gold/50 mx-auto mb-8"
          />

          {/* Enter button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onEnter}
            className="px-10 py-4 rounded-full text-wedding-dark-maroon font-display font-semibold text-lg tracking-widest gold-gradient-bg lux-shadow hover:brightness-110 transition-all duration-300"
          >
            Open Invitation 🪔
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-wedding-cream/30 text-xs mt-4 font-display tracking-wider"
          >
            TAP TO ENTER WITH MUSIC
          </motion.p>
        </motion.div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeSplash;
