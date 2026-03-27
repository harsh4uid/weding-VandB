import { motion } from "framer-motion";
const ganeshaImg = `${import.meta.env.BASE_URL}wedding/ganesha.png`;

const HeroSection = () => {
  const scrollToNext = () => {
    document.querySelector("#save-the-date")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-wedding-maroon overflow-hidden pt-16">
      {/* Temple silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-wedding-gold" preserveAspectRatio="none">
          <path d="M0,120 L0,80 L100,80 L120,40 L130,20 L140,40 L160,80 L300,80 L310,60 L320,30 L325,10 L330,30 L340,60 L350,80 L500,80 L520,50 L530,25 L535,5 L540,25 L550,50 L560,80 L700,80 L720,45 L730,20 L735,0 L740,20 L750,45 L760,80 L900,80 L910,55 L920,30 L925,10 L930,30 L940,55 L950,80 L1100,80 L1110,50 L1120,25 L1125,8 L1130,25 L1140,50 L1150,80 L1200,80 L1200,120 Z" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        {/* Lord Ganesha Image */}
        <div className="flex justify-center mb-6">
          <motion.img
            src={ganeshaImg}
            alt="Lord Ganesha"
            className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Sanskrit invocation */}
        <h2 className="font-devanagari text-4xl md:text-6xl gold-gradient-text text-glow mb-6 leading-relaxed">
          श्री गणेशाय नमः
        </h2>

        <p className="font-devanagari text-wedding-cream/90 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed font-light tracking-wide">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>

        <h3 className="font-display text-3xl md:text-4xl gold-gradient-text text-glow max-w-lg mx-auto mb-10 tracking-widest uppercase drop-shadow-sm">
          Welcome
        </h3>

        {/* Decorative diya */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-16 h-8 rounded-b-full mx-auto" style={{ background: "linear-gradient(to top, hsl(43, 60%, 35%), hsl(43, 74%, 49%))" }} />
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-4 h-8 rounded-full animate-flame opacity-90" style={{ background: "linear-gradient(to top, hsl(25, 90%, 55%), hsl(45, 95%, 60%), hsl(50, 100%, 85%))" }} />
              <div className="absolute inset-0 w-4 h-8 rounded-full blur-sm animate-flame" style={{ background: "linear-gradient(to top, hsl(25, 90%, 55%), hsl(45, 95%, 60%), transparent)" }} />
            </div>
            <div className="absolute -inset-4 bg-wedding-gold/20 rounded-full blur-xl animate-diya-glow" />
          </div>
        </div>

        {/* CTA */}
        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3.5 rounded-full text-wedding-dark-maroon font-display font-semibold text-lg tracking-widest gold-gradient-bg lux-shadow hover:brightness-110 transition-all duration-300"
        >
          Begin the Journey
        </motion.button>
      </motion.div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
    </section>
  );
};

export default HeroSection;
