import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tok izrade",
  description: "Kako ide izrada blok kuhinje: razgovor, merenje, materijal, radionica i montaža.",
  alternates: { canonical: "/proces/" },
};

const steps = [
  ["Razgovor", "Koje aparate zadržavate, da li je rerna ugradna, gde je sudopera danas i da li se menja pod ili pločice pre montaže. Ako šaljete fotografije, slikajte ceo zid, ne samo ugao."],
  ["Merenje", "Dužina zida u više visina, jer zidovi nisu uvek paralelni. Beležimo prozor, radijator, dovod vode, odvod, utičnice i visinu do plafona ili spuštenog plafona."],
  ["Raspored i materijal", "Predlog gde idu sudopera, rerna, frižider i fioke. Vi birate front, kant, radnu ploču i okov. Ponuda nabraja te stavke, da se vidi šta menja cenu."],
  ["Radionica", "Sečenje korpusa, kantovanje, bušenje za šarke i fioke, sklapanje elemenata. Frontovi koji se farbaju ili naručuju čekaju svoj rok, pa se termin montaže vezuje za to."],
  ["Montaža", "Elementi se vezuju, niveliraju i pričvršćuju. Zatim ploča, sokl, ručice i podešavanje frontova da fuga bude ravna. Ako je dogovoreno, stara kuhinja se skida pre toga."],
];

export default function ProcesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Izrada</p>
        <h1 className="mt-3 text-4xl md:text-6xl">Prvo zid i priključci, pa tek sečenje</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Blok se ne kroji iz kataloga. Mera, aparati i materijal određuju elemente. Tek tada ide radionica, pa montaža.
        </p>
        <ol className="mt-10 space-y-4">
          {steps.map(([title, text], index) => (
            <li key={title} className="rounded-[1.5rem] border border-line bg-card p-5">
              <p className="text-sm font-semibold text-wood">0{index + 1}</p>
              <h2 className="mt-1 text-2xl">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
      <aside className="h-fit rounded-[1.75rem] bg-sand p-6 lg:sticky lg:top-28">
        <h2 className="text-2xl">Šta pomaže na merenju</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
          <li>Da li ostaju frižider, sudopera, rerna i aspirator, i koje su im širine.</li>
          <li>Gas ili indukcija, i da li se menja mesto ploče za kuvanje.</li>
          <li>Da li će zidovi i pod biti gotovi pre montaže.</li>
          <li>Visina spuštenog plafona, ako postoji.</li>
          <li>Da li u istoj prostoriji treba i visoki plakar.</li>
        </ul>
        <p className="mt-4 text-sm leading-6 text-muted">Garancija na izradu i montažu piše se u ponudi, uz rok koji važi za izabrani materijal.</p>
        <Link href="/kontakt/" className="mt-6 inline-flex rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210]">
          Zakaži merenje
        </Link>
      </aside>
    </div>
  );
}
