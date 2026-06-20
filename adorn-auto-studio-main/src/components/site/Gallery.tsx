import { motion } from "framer-motion";
import { GALLERY } from "@/data/site";

export function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Gallery
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Transformations That <span className="gold-text">Speak</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative rounded-2xl overflow-hidden glass ${
                i === 0 || i === 3 ? "md:row-span-2 md:col-span-1" : ""
              } ${i === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Premium car transformation ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
