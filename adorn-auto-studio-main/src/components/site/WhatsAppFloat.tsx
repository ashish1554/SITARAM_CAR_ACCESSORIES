import { SITE } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] animate-pulse-ring hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
