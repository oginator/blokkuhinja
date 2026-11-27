import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veleprodaja",
  description: "Blok kuhinje za firme koje preprodaju. Isti modeli i dezeni, popust na količinu.",
  alternates: { canonical: "/veleprodaja/" },
};

const points = [
  {
    title: "Za firme koje preprodaju",
    text: "Isti modeli i dezeni kao u maloprodaji, spremni za salon nameštaja.",
  },
  {
    title: "Popust na količinu",
    text: "Rabat se dogovara prema broju blokova.",
  },
];

export default function VeleprodajaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Veleprodaja</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl">Blok kuhinje za firme i salone</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Pored prodaje na malo, radimo i prodaju na veliko. Saradnja je otvorena za firme koje žele da preprodaju naše blok kuhinje.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {points.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.05} className="rounded-[1.5rem] border border-line bg-card p-6">
            <h2 className="text-2xl">{point.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 max-w-3xl">
        <InquiryForm initialTip="veleprodaja" />
      </div>
    </div>
  );
}
