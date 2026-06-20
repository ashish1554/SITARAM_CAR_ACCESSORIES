import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, X } from "lucide-react";
import { SITE, VIDEOS } from "@/data/site";

export function Videos() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="videos" className="section-pad">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
              Reels
            </div>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              See Our <span className="gold-text">Premium Work</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            Real installations, real transformations. A glimpse into the
            craftsmanship that defines every Sitaram build.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group relative rounded-3xl overflow-hidden aspect-[9/16] glass transition-all duration-500 ${
                playingIndex === i ? "" : "hover:gold-border-glow cursor-pointer"
              }`}
              onClick={() => playingIndex !== i && setPlayingIndex(i)}
            >
              {playingIndex === i ? (
                <div className="absolute inset-0 z-10 bg-black">
                  <video
                    src={(v as any).video}
                    autoPlay
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                    onEnded={() => setPlayingIndex(null)}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlayingIndex(null);
                    }}
                    className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/60 border border-white/20 grid place-items-center text-white hover:bg-amber-400 hover:text-black transition-all z-20"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <>
                  <video
                    src={(v as any).video}
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                      <Play className="h-5 w-5 ml-0.5 text-white group-hover:text-black" fill="currentColor" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full glass hover:gold-border-glow transition-all hover:scale-[1.03]"
          >
            <Instagram className="h-5 w-5 text-amber-400" />
            <span className="font-medium">Watch More Transformations</span>
          </a>
        </div>
      </div>
    </section>
  );
}
