import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { MASTER_NAME, PHONE_NUMBER } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-amber-500 to-amber-600 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="text-2xl font-extrabold text-navy-950 sm:text-3xl">
          Нужна помощь по дому? Звоните прямо сейчас!
        </h2>
        <p className="mt-3 text-navy-900/80">
          Работаем 24/7 в Алматы — примем заявку и вышлем мастера в тот же день.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton className="px-8 py-4 text-lg" />
          <CallButton
            className="border-2 border-navy-950 bg-navy-950 px-8 py-4 text-lg text-white hover:brightness-125"
            label={`${MASTER_NAME}, ${PHONE_NUMBER}`}
          />
        </div>
      </div>
    </section>
  );
}
