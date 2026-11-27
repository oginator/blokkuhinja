import { Reveal } from "@/components/reveal";
import { blockPrice, kitchens } from "@/data/kitchens";
import { Clock3, Layers, Ruler, Store, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trust = [
  {
    icon: Clock3,
    title: "Preuzimanje za tri dana",
    text: "Poručite danas, preuzimanje je za tri dana.",
  },
  {
    icon: Layers,
    title: "Univer 18 mm i ABS kant",
    text: "Korpus je univer 18 mm, sa ABS kantom.",
  },
  {
    icon: Ruler,
    title: "Raspored prema zidu",
    text: "Niša, uglovi, priključci i visina plafona, ne mera od oka.",
  },
];

const steps = [
  {
    n: "01",
    title: "Upit",
    text: "Navedite model, dezen i aparate koje zadržavate. Ako šaljete fotografije, slikajte ceo zid.",
  },
  {
    n: "02",
    title: "Merenje",
    text: "Zidovi, prozor, radijator, utičnice i mesto dovoda vode. Merenje radimo na adresi.",
  },
  {
    n: "03",
    title: "Izrada i preuzimanje",
    text: "Sečenje, kantovanje i sklapanje u radionici, pa montaža. Preuzimanje je za tri dana.",
  },
];

const questions = [
  ["Koliko traje izrada?", "Rok se kaže posle merenja, kad se zna front i da li se ploča naručuje. Farbani front i kamen duže čekaju od univera i laminata."],
  ["Da li merenje ima smisla dok traju radovi?", "Može, ali konačna mera ide kad su zidovi, pod i priključci na svom mestu. Ako je stan još u malteru, javite u kom je stadijumu."],
  ["Skidate li staru kuhinju?", "Može da se dogovori uz montažu. U upitu napišite da li stara kuhinja ostaje do dana montaže."],
  ["Od čega zavisi cena?", `${blockPrice.label} je ${blockPrice.amount} ${blockPrice.included} ${blockPrice.full}`],
  ["Kako ide radna ploča?", `${blockPrice.included} ${blockPrice.full}`],
  ["Radite li i plakare?", "Osnova radionice su blok kuhinje. Plakar u istoj prostoriji može da se doda ako ulazi u isti materijal i isti termin montaže."],
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Mala firma od poverenja</p>
          <h1 className="mt-3 text-4xl leading-[1.05] md:text-6xl">Moderne blok kuhinje direktno iz proizvodnje</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Pravimo blok kuhinje od 2 metra, gornje i donje delove. Pet modela u više dezena, pa birate ono što vam odgovara.
          </p>
          <p className="mt-3 leading-7 text-muted">
            Pored prodaje na malo, radimo i prodaju na veliko. Saradnja je otvorena za firme koje žele da preprodaju naše blok kuhinje, uz popust na količinu.
          </p>
          <p className="mt-4 font-semibold">Poručite danas, preuzimanje je za tri dana.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/kontakt/" className="rounded-full bg-wood px-5 py-3 text-sm font-semibold text-[#141210] hover:bg-wood-dark">
              Zatraži ponudu
            </Link>
            <Link href="/modeli/" className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
              Pet modela
            </Link>
          </div>
        </div>
        <figure className="overflow-hidden rounded-[1.75rem] border border-line bg-sand">
          <Image
            src="/img/modeli/model-1.jpg"
            alt="Blok kuhinja u zlatnom hrastu i antracitu"
            width={1152}
            height={864}
            priority
            className="h-auto w-full"
          />
          <figcaption className="px-5 py-4 text-sm text-muted">Model 1 · Zlatni hrast i antracit</figcaption>
        </figure>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
          {trust.map((item) => (
            <article key={item.title} className="flex gap-3">
              <item.icon className="mt-1 shrink-0 text-wood" size={20} />
              <div>
                <h2 className="text-lg">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Modeli</p>
          <h2 className="mt-2 text-3xl md:text-5xl">Linija kreće od 2 metra</h2>
          <p className="mt-3 max-w-2xl text-muted">Pet gotovih rasporeda. Dezen je onaj sa fotografije. Dužina na zidu proverava se merenjem.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {kitchens.map((kitchen, index) => (
            <Reveal key={kitchen.id} className={index < 3 ? "md:col-span-2" : "md:col-span-3"} delay={index * 0.05}>
              <Link href={`/modeli/#${kitchen.id}`} className="block overflow-hidden rounded-[1.5rem] border border-line bg-card transition hover:-translate-y-0.5">
                <Image src={kitchen.image} alt="" width={1152} height={864} className="aspect-[4/3] w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-2xl">{kitchen.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{kitchen.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 md:grid-cols-2">
        <Reveal className="rounded-[1.75rem] border border-line bg-card p-7">
          <Store className="text-wood" />
          <h2 className="mt-4 text-3xl">Maloprodaja</h2>
          <p className="mt-3 leading-7 text-muted">
            Birate model i dezen, merimo zid na adresi i montiramo kuhinju. Ponuda nabraja korpus, front, ploču i okov.
          </p>
          <Link href="/kontakt/" className="mt-6 inline-flex rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210]">
            Upit za merenje
          </Link>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[1.75rem] border border-line bg-card p-7">
          <Building2 className="text-wood" />
          <h2 className="mt-4 text-3xl">Veleprodaja</h2>
          <p className="mt-3 leading-7 text-muted">
            Saradnja je otvorena za firme koje žele da preprodaju naše blok kuhinje, uz popust na količinu.
          </p>
          <Link href="/veleprodaja/" className="mt-6 inline-flex rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210]">
            Uslovi za firme
          </Link>
        </Reveal>
      </section>

      <section id="proces" className="scroll-mt-28 bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Poručivanje</p>
            <h2 className="mt-2 text-3xl md:text-5xl">Tri koraka do kuhinje</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.06} className="rounded-[1.5rem] bg-card p-6">
                <p className="text-sm font-semibold text-wood">{step.n}</p>
                <h3 className="mt-2 text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/proces/" className="text-sm font-semibold underline decoration-line underline-offset-4">
              Ceo tok izrade
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-3xl">Pre nego što zakažete merenje</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {questions.map(([question, answer]) => (
            <details key={question} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold">{question}</summary>
              <p className="mt-2 text-sm leading-6 text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
