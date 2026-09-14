import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.25} />
    </a>
  );
}
