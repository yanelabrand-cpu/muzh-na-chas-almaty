import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton({
  className = "",
  label = "Написать в WhatsApp",
  iconOnly = false,
}: {
  className?: string;
  label?: string;
  iconOnly?: boolean;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? label : undefined}
      className={
        iconOnly
          ? `inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-navy-950 transition hover:brightness-105 active:brightness-95 ${className}`
          : `inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-navy-950 transition hover:brightness-105 active:brightness-95 ${className}`
      }
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {!iconOnly && label}
    </a>
  );
}
