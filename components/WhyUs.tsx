import { Clock, ShieldCheck, Timer, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Timer,
    title: "Быстрый выезд",
    text: "Приезжаем в течение 1-2 часов с момента обращения.",
  },
  {
    icon: Clock,
    title: "Работаем 24/7",
    text: "Принимаем заявки круглосуточно, без выходных и праздников.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на работы",
    text: "Даём гарантию на все выполненные виды ремонта.",
  },
  {
    icon: Wallet,
    title: "Честные цены",
    text: "Озвучиваем стоимость заранее, без скрытых наценок.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
          Почему выбирают нас
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-navy-800 bg-navy-950 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <Icon className="h-6 w-6" strokeWidth={2.25} />
              </span>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
