import { Wrench } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
            <Wrench className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-sm font-bold leading-tight sm:text-base">
            Муж на час
            <span className="block text-amber-400">24/7</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <WhatsAppButton
            className="hidden px-4 py-2.5 text-sm sm:inline-flex"
            label="Написать в WhatsApp"
          />
          <WhatsAppButton
            className="sm:hidden"
            iconOnly
            label="Написать в WhatsApp"
          />
          <CallButton
            className="px-3 py-2.5 text-xs sm:px-4 sm:text-sm"
            label={PHONE_NUMBER}
          />
        </div>
      </div>
    </header>
  );
}
