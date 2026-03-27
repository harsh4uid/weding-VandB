import { motion } from "framer-motion";

const images = [
  { src: `${import.meta.env.BASE_URL}wedding/Screenshot From 2026-03-27 19-32-49.png`, alt: "Wedding moment 1" },
  { src: `${import.meta.env.BASE_URL}wedding/Screenshot From 2026-03-27 19-33-09.png`, alt: "Wedding moment 2" },
  { src: `${import.meta.env.BASE_URL}wedding/Screenshot From 2026-03-27 19-33-22.png`, alt: "Wedding moment 3" },
  { src: `${import.meta.env.BASE_URL}wedding/Screenshot From 2026-03-27 19-33-32.png`, alt: "Wedding moment 4" },
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-28 bg-wedding-cream">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-wedding-dark-maroon tracking-widest mb-6 drop-shadow-sm">
            GLIMPSES
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-wedding-gold/40" />
            <span className="text-wedding-gold">✿</span>
            <div className="w-16 h-[1px] bg-wedding-gold/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-wedding-gold/30 lux-shadow">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
