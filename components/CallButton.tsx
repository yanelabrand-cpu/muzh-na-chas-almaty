import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

export default function CallButton({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 font-semibold text-navy-950 transition hover:brightness-105 active:brightness-95 ${className}`}
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      {label ?? PHONE_NUMBER}
    </a>
  );
}
