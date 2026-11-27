import { Reveal } from "@/components/reveal";
import { blockPrice, decors } from "@/data/kitchens";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dezeni i kombinacije",
  description: "Zlatni hrast, snežni hrast, Sonoma, bela polusjaj i antracit. Dvobojne kombinacije, okov, radna ploča i ABS kantovanje.",
  alternates: { canonical: "/dezeni/" },
};

const quality = [
  {
    title: "Okov",
    text: "Šarke, fioke sa mekim zatvaranjem, podizači, korpe i svetlo ispod gornjih elemenata.",
  },
  {
    title: "Radna ploča",
    text: `Laminat, kompakt, kvarc, kamen ili drvo. ${blockPrice.label} je ${blockPrice.amount} ${blockPrice.included} ${blockPrice.full}`,
  },
  {
    title: "Kantovanje",
    text: "Korpus je univer 18 mm, sa ABS kantom. Kant ide uz šemu elementa.",
  },
];

export default function DezeniPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Dezeni</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl">Ista iverica, drugi izgled fronta</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Zlatni hrast, snežni hrast, Sonoma, bela polusjaj i antracit mogu da se naruče na svakom modelu. Okov i raspored birate vi.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {decors.map((decor, index) => (
          <Reveal key={decor.id} delay={index * 0.04} className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
            {decor.image ? (
              <Image src={decor.image} alt={`Dezen ${decor.name}`} width={1100} height={800} className="h-52 w-full object-cover" />
            ) : (
              <div className="h-52" style={{ background: decor.swatch }} />
            )}
            <div className="p-5">
              <h2 className="text-2xl">{decor.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{decor.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl md:text-4xl">Dvobojne kombinacije</h2>
        <p className="mt-3 max-w-2xl text-muted">Ove dve fotografije već spajaju hrast i antracit na istom bloku.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
            <Image src="/img/modeli/model-1.jpg" alt="Zlatni hrast i antracit na istom bloku" width={1152} height={864} className="w-full" />
            <figcaption className="p-4 text-sm text-muted">Model 1. Hrast sa strane, antracit u sredini.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[1.5rem] border border-line bg-card">
            <Image src="/img/modeli/model-3.jpg" alt="Antracit i hrast na istom bloku" width={1152} height={864} className="w-full" />
            <figcaption className="p-4 text-sm text-muted">Model 3. Antracit i hrast, sudopera preko desnog elementa.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {quality.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] bg-sand p-6">
            <h2 className="text-2xl">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
