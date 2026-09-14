import Image from "next/image";
import { Zap, Sparkles, ShieldCheck, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const badges = [
  { icon: Zap, label: "Быстро" },
  { icon: Sparkles, label: "Аккуратно" },
  { icon: ShieldCheck, label: "Надёжно" },
  { icon: MapPin, label: "Алматы 24/7" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&w=1920&q=70"
          alt="Мастер выполняет ремонтные работы в квартире"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Муж на час в Алматы —{" "}
          <span className="text-amber-400">быстро, аккуратно, надёжно</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
          Устраним любую бытовую поломку за 1 визит. Работаем круглосуточно,
          выезд в день обращения.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur"
            >
              <Icon className="h-4 w-4 text-amber-400" strokeWidth={2.5} />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-9">
          <WhatsAppButton
            className="px-8 py-4 text-lg shadow-lg shadow-black/30"
            label="Вызвать мастера"
          />
        </div>
      </div>
    </section>
  );
}
