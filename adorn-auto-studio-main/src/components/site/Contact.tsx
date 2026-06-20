import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export function Contact() {
  const cards = [
    {
      icon: MapPin,
      title: "Address",
      body: SITE.address,
    },
    {
      icon: Phone,
      title: "Phone",
      body: SITE.phone,
      href: `tel:${SITE.phoneRaw}`,
    },
    {
      icon: Mail,
      title: "Email",
      body: SITE.email,
      href: `mailto:${SITE.email}`,
    },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Get In Touch
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Let's Build Your <span className="gold-text">Dream Drive</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 hover:gold-border-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-amber-300/20 to-orange-500/20 border border-amber-400/30">
                <c.icon className="h-5 w-5 text-amber-400" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-white/50">
                {c.title}
              </div>
              <div className="mt-2 text-base text-white/90 leading-relaxed">
                {c.body}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass hover:gold-border-glow transition-all"
          >
            <Phone className="h-4 w-4 text-amber-400" /> Call Now
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-300 to-orange-500 text-black font-semibold hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
