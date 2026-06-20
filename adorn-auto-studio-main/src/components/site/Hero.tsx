import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import hero from "@/assets/hero.jpg";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Premium luxury car interior with ambient lighting"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,164,71,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-40 pb-28 lg:pt-52 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          Premium Showroom · Ahmedabad
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
        >
          Upgrade Your Drive With{" "}
          <span className="gold-text">Premium Car Accessories</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          Premium seat covers, music systems, lighting upgrades, security
          solutions and luxury car styling — crafted for the modern driver in
          Ahmedabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 text-black font-semibold shadow-[0_20px_60px_-20px_rgba(232,164,71,0.6)] hover:shadow-[0_25px_70px_-15px_rgba(232,164,71,0.9)] transition-all hover:scale-[1.03]"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-white hover:bg-white/10 transition-all"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Inquiry
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl"
        >
          {[
            ["100+", "Happy Clients"],
            ["3+", "Years Expertise"],
            ["100%", "Premium Quality"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-2xl sm:text-3xl font-display font-bold gold-text">
                {k}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 mt-1">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  );
}
