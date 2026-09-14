import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
          Отзывы клиентов
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-navy-800 bg-navy-900 p-6"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                &laquo;{t.text}&raquo;
              </p>
              <span className="mt-auto text-sm font-semibold text-white">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
