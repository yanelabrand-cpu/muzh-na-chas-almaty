import Image from "next/image";
import {
  AlertTriangle,
  Check,
  Droplets,
  Hammer,
  Settings,
  Sofa,
  Wrench,
  Zap,
} from "lucide-react";
import type { Service } from "@/lib/constants";

const icons = {
  wrench: Wrench,
  zap: Zap,
  sofa: Sofa,
  hammer: Hammer,
  settings: Settings,
  droplets: Droplets,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-navy-800 bg-navy-900 shadow-sm transition hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
            <Icon className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        {service.items && (
          <ul className="flex flex-col gap-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {service.sections?.map((section) => (
          <div key={section.heading}>
            <h4 className="mb-2 text-sm font-bold text-amber-400">
              {section.heading}
            </h4>
            <ul className="flex flex-col gap-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {service.highlight && (
          <div className="mt-auto rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-400">
              <AlertTriangle className="h-4 w-4" strokeWidth={2.5} />
              {service.highlight.heading}
            </h4>
            <ul className="flex flex-col gap-2">
              {service.highlight.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
