import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Наши услуги
          </h2>
          <p className="mt-3 text-slate-400">
            Берёмся за любую бытовую задачу — от протекающего крана до сборки
            мебели. Приезжаем с инструментом и расходниками.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
