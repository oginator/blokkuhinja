import { Reveal } from "@/components/reveal";
import { blockPrice } from "@/data/kitchens";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Mala firma sa dvadeset godina iskustva u sklapanju kuhinja. Blok kuhinje od 2 m i kuhinje po meri.",
  alternates: { canonical: "/o-nama/" },
};

const points = [
  {
    title: "Sklapanje, ne katalog",
    text: "Dvadeset godina sklapamo kuhinje: korpus, kant, front i šarke. Svaki element se složi u radionici, pa ide na zid.",
  },
  {
    title: "Blok kuhinje",
    text: "Pet modela, od 2 m, gornji i donji deo. Dezen birate vi. Poručite danas, preuzimanje je za tri dana.",
  },
  {
    title: "Kuhinje po meri",
    text: "Radimo i kuhinje po meri. U tom slučaju cena je drugačija. Najbolje je da nas kontaktirate, da popričamo i dogovorimo se.",
  },
  {
    title: "Malo i veliko",
    text: "Prodajemo na malo i na veliko, firmama koje preprodaju naše blokove. Popust ide prema količini.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">O nama</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl">Mala firma, dvadeset godina za radnim stolom</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Blok kuhinja je mala radionica. Ne jurimo veliki salon. Dvadeset godina radimo isto: sklapamo kuhinje, element po element, dok front ne legne i fuga ne bude ravna.
      </p>
      <p className="mt-4 max-w-2xl leading-8 text-muted">
        Osnova su blok kuhinje od iverice. Korpus je univer 18 mm, kant je ABS. Pre sečenja dolazimo na merenje, da se vidi da model staje i gde ostaju sudopera, rerna i frižider. {blockPrice.label} je {blockPrice.amount} {blockPrice.included}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {points.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.04} className="rounded-[1.5rem] border border-line bg-card p-6">
            <h2 className="text-2xl">{point.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{point.text}</p>
          </Reveal>
        ))}
      </div>

      <section className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.75rem] bg-sand p-6 md:p-8">
          <h2 className="flex items-center gap-2 text-3xl">
            Mladenovac
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mladenovac"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mladenovac na Google mapama"
              className="text-[#ea4335]"
            >
              <MapPin size={28} aria-hidden="true" />
            </a>
          </h2>
          <p className="mt-3 leading-7 text-muted">
            Nalazimo se u Mladenovcu, prevoz organizujemo mi ili vi, a za sva dodatna pitanja stojimo vam na raspolaganju.
          </p>
        </div>
        <aside className="rounded-[1.75rem] border border-line bg-card p-6 md:p-8">
          <h2 className="text-3xl">Javite se</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Za blok kuhinju ili kuhinju po meri pozovite ili pišite. Tu dogovaramo merenje i šta ostaje od aparata.
          </p>
          <a href={site.phoneHref} className="mt-6 flex items-center gap-3 rounded-2xl bg-sand px-4 py-4">
            <Phone className="text-wood" />
            <span>
              <span className="block text-xs tracking-wide text-muted uppercase">Telefon</span>
              <span className="font-semibold">{site.phone}</span>
            </span>
          </a>
          <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 rounded-2xl bg-sand px-4 py-4">
            <Mail className="text-wood" />
            <span>
              <span className="block text-xs tracking-wide text-muted uppercase">Email</span>
              <span className="font-semibold">{site.email}</span>
            </span>
          </a>
          <Link
            href="/kontakt/"
            className="mt-4 inline-flex rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210] hover:bg-wood-dark"
          >
            Zatraži ponudu
          </Link>
        </aside>
      </section>
    </div>
  );
}
