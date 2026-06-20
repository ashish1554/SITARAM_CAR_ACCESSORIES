import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { PRODUCTS } from "@/data/site";

export function Products() {
  return (
    <section id="products" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Showcase
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Our <span className="gold-text">Premium Products</span>
          </h2>
          <p className="mt-4 text-white/60">
            Hand-picked accessories crafted for performance, comfort and that
            unmistakable luxury feel.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p, i) => {
            const Icon = (Icons[p.icon as keyof typeof Icons] || Icons.Sparkles) as Icons.LucideIcon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07 }}
                className="group relative rounded-2xl overflow-hidden glass hover:-translate-y-2 transition-all duration-500 hover:gold-border-glow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl grid place-items-center bg-black/60 backdrop-blur border border-amber-400/30 z-10">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <div className="relative p-5 z-10">
                  <h3 className="font-display font-semibold text-lg text-white drop-shadow-md">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed drop-shadow-sm">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
