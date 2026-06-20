import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Sparkles, Heart } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, title: "Premium Quality", desc: "Only certified, top-grade accessories." },
  { icon: Wrench, title: "Expert Installation", desc: "Trained technicians, precision fit." },
  { icon: Sparkles, title: "Latest Accessories", desc: "Always stocked with new arrivals." },
  { icon: Heart, title: "Customer Satisfaction", desc: "100+ delighted drivers across Ahmedabad." },
];

const STATS = [
  { k: "100+", v: "Happy Customers" },
  { k: "Premium", v: "Products" },
  { k: "Expert", v: "Service" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80 mb-4">
            About Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Welcome to <span className="gold-text">Sitaram Car Accessories</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-lg">
            For over a decade we have been Ahmedabad's trusted destination for
            premium car accessories, customization and vehicle upgrades. From
            handcrafted leather interiors to high-performance audio and
            advanced security — every install carries our signature finish.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:gold-border-glow transition-all duration-500 group"
            >
              <f.icon className="h-7 w-7 text-amber-400 mb-4 transition-transform group-hover:scale-110" />
              <div className="font-display font-semibold text-lg">{f.title}</div>
              <div className="mt-2 text-sm text-white/60">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl glass p-8 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(232,164,71,0.6),transparent_60%)]" />
              <div className="relative">
                <div className="text-4xl sm:text-5xl font-display font-bold gold-text">
                  {s.k}
                </div>
                <div className="mt-2 uppercase tracking-[0.25em] text-xs text-white/60">
                  {s.v}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
