import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="relative py-20 md:py-28 bg-wedding-maroon">
      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl gold-gradient-text tracking-widest mb-6 drop-shadow-sm">
              VENUE DETAILS
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-[1px] bg-wedding-gold/40" />
              <span className="text-wedding-gold text-xl">🪔</span>
              <div className="w-16 h-[1px] bg-wedding-gold/40" />
            </div>
          </div>

          {/* Venue card */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Info */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl md:text-4xl text-wedding-cream mb-4 drop-shadow-md">
                Rajendra Club
              </h3>
              <p className="text-wedding-gold/90 font-display text-xl mb-2 tracking-wide">
                Rajender Nagar, Ghaziabad
              </p>
              <p className="text-wedding-cream/50 font-display">
                Uttar Pradesh, India
              </p>
              <div className="mt-6 flex items-center gap-2 justify-center md:justify-start text-wedding-gold/60">
                <span>🪔</span>
                <span className="text-sm tracking-wider">Sunday, 19 April 2026</span>
                <span>🪔</span>
              </div>
            </div>

            {/* Right - Map card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-xl p-8 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-wedding-gold" size={24} />
                <span className="text-wedding-cream/80 font-display">Location</span>
              </div>
              <div className="bg-wedding-dark-maroon rounded-lg h-48 md:h-56 mb-6 border border-wedding-gold/20 overflow-hidden relative group">
                <img
                  src="/wedding/image.png"
                  alt="Map to Rajendra Club"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark-maroon/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
                  <p className="text-wedding-cream text-sm font-medium drop-shadow-md">Rajendra Club, Ghaziabad</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/Rajendra+Club+Rajender+Nagar+Ghaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-wedding-dark-maroon font-display font-semibold text-sm tracking-widest gold-gradient-bg lux-shadow hover:brightness-110 transition-all duration-300"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent" />
    </section>
  );
};

export default VenueSection;
