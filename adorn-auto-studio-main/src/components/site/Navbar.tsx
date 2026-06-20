import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="h-9 w-9 rounded-full grid place-items-center bg-gradient-to-br from-amber-300 to-orange-600 text-black font-black text-lg">
            S
          </span>
          <div className="leading-tight">
            <div className="font-display text-base sm:text-lg font-bold tracking-wide">
              <span className="gold-text">Sitaram</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Car Accessories
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/70 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-amber-300 after:to-orange-500 after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-amber-300 to-orange-500 text-black hover:from-amber-200 hover:to-orange-400 transition-all shadow-[0_10px_30px_-10px_rgba(232,164,71,0.7)] hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-11 w-11 grid place-items-center rounded-full glass"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden backdrop-blur-2xl bg-black/85 border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display gold-text"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 text-black font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
