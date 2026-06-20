import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { SITE } from "@/data/site";

export function Location() {
  return (
    <section id="location" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Find Us
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Visit Our <span className="gold-text">Store</span>
          </h2>
          <p className="mt-4 text-white/60">{SITE.address}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden glass gold-border-glow"
        >
          <div className="aspect-[16/9] w-full">
            <iframe
              src={SITE.mapEmbed}
              title="Sitaram Car Accessories Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[40%] contrast-110"
            />
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href={SITE.mapLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 text-black font-semibold hover:scale-[1.03] transition-transform"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
