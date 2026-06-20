import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { NAV, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 rounded-full grid place-items-center bg-gradient-to-br from-amber-300 to-orange-600 text-black font-black">
              S
            </span>
            <div>
              <div className="font-display text-lg font-bold gold-text">
                {SITE.name}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Ahmedabad
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 max-w-xs">
            Premium Car Accessories Store Ahmedabad. Crafting luxury rides with
            world-class accessories since day one.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            Navigate
          </div>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/70 hover:text-amber-400 transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-amber-400/80 mb-4">
            Connect
          </div>
          <div className="flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 rounded-full glass grid place-items-center hover:gold-border-glow transition-all"
            >
              <Instagram className="h-4 w-4 text-amber-400" />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="h-11 w-11 rounded-full glass grid place-items-center hover:gold-border-glow transition-all"
            >
              <WhatsAppIcon className="h-4 w-4 text-amber-400" />
            </a>
          </div>
          <div className="mt-6 text-sm text-white/60">
            <div>{SITE.phone}</div>
            <div>{SITE.email}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
