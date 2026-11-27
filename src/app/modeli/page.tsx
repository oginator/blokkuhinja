import { ModelBrowser } from "@/components/model-browser";
import { blockPrice } from "@/data/kitchens";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modeli kuhinja",
  description:
    "Pet modela blok kuhinje: zlatni hrast i antracit, snežni hrast, antracit i hrast, sonoma i bela polusjaj.",
  alternates: { canonical: "/modeli/" },
};

export default function ModeliPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Modeli</p>
      <h1 className="mt-3 max-w-3xl text-4xl md:text-6xl">Pet modela, svaki svoj dezen</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Fotografija pokazuje gotov raspored. Dezen za upit birate na kartici. {blockPrice.label} je {blockPrice.amount} {blockPrice.included} {blockPrice.full} Merenje potvrđuje da model staje na zid.
      </p>
      <div className="mt-10">
        <ModelBrowser />
      </div>
    </div>
  );
}
