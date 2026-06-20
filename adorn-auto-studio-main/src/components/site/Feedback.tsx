import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Star } from "lucide-react";

const FEEDBACK = [
  { video: "/videos/feedback/customer1.mp4", title: "Happy Customer 1", thumbTime: 0.1 },
  { video: "/videos/feedback/customer2.mp4", title: "Happy Customer 2", thumbTime: 5.0 },
];

export function Feedback() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="feedback" className="section-pad bg-black/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-amber-400/80">
            Testimonials
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Customer <span className="gold-text">Feedback</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/60">
            Hear directly from our clients about their experience with our premium accessories and expert installation.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {FEEDBACK.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden aspect-[9/16] sm:aspect-[4/5] glass transition-all duration-500 ${
                playingIndex === i ? "" : "hover:gold-border-glow cursor-pointer"
              }`}
              onClick={() => playingIndex !== i && setPlayingIndex(i)}
            >
              {playingIndex === i ? (
                <div className="absolute inset-0 z-10 bg-black">
                  <video
                    src={v.video}
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
                    src={`${v.video}#t=${v.thumbTime}`}
                    muted
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                      <Play className="h-6 w-6 ml-0.5 text-white group-hover:text-black" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="absolute top-5 left-5 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
