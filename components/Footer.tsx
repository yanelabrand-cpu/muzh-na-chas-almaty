import { MapPin, MessageCircle, Phone, Wrench } from "lucide-react";
import {
  CITY,
  MASTER_NAME,
  PHONE_HREF,
  PHONE_NUMBER,
  WHATSAPP_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
            <Wrench className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-base font-bold">
            Муж на час <span className="text-amber-400">24/7</span>
          </span>
        </div>

        <p className="max-w-xl text-sm text-slate-400">
          Услуги мелкого бытового ремонта в Алматы: сантехника, электрика,
          сборка мебели и другие работы по дому. Выезжаем круглосуточно.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
          <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-amber-400">
            <Phone className="h-4 w-4 text-amber-500" />
            {MASTER_NAME}, {PHONE_NUMBER}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-400"
          >
            <MessageCircle className="h-4 w-4 text-amber-500" />
            WhatsApp
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-amber-500" />
            {CITY}, работаем 24/7
          </span>
        </div>

        <div className="border-t border-white/10 pt-5 text-xs text-slate-500">
          © 2018 Муж на час 24/7. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
