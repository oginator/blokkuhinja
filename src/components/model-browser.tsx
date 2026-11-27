"use client";

import { blockPrice, decors, inquiryHref, kitchens, specs, worktopNote, type Kitchen } from "@/data/kitchens";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const filters = [
  { id: "svi", label: "Svi" },
  ...decors.map((decor) => ({ id: decor.id, label: decor.name })),
];

export function ModelBrowser() {
  const [filter, setFilter] = useState("svi");
  const visible = kitchens.filter((kitchen) => filter === "svi" || kitchen.tags.includes(filter));

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filter po dezenu">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm ${
              filter === item.id ? "bg-wood text-[#141210]" : "bg-sand text-muted hover:text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8 space-y-8">
        {visible.length === 0 ? (
          <p className="rounded-3xl bg-sand px-5 py-8 text-muted">Nijedan model nema taj dezen na fotografiji.</p>
        ) : (
          visible.map((kitchen) => <ModelPanel key={kitchen.id} kitchen={kitchen} />)
        )}
      </div>
    </div>
  );
}

function ModelPanel({ kitchen }: { kitchen: Kitchen }) {
  const [decorId, setDecorId] = useState(kitchen.decorIds[0]);
  const reduce = useReducedMotion();
  const decor = decors.find((item) => item.id === decorId);
  const sameAsPhoto = decor?.name === kitchen.photoLabel || decorId === kitchen.decorIds[0];

  return (
    <article id={kitchen.id} className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-line bg-card">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
        <Image
          src={kitchen.image}
          alt={kitchen.alt}
          width={1152}
          height={864}
          className="h-auto w-full"
        />
        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-wood uppercase">{kitchen.name}</p>
            <h2 className="mt-2 text-3xl">{kitchen.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted">{kitchen.summary}</p>
          </div>

          <div>
          <p className="text-sm font-semibold">Dezen za upit</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {kitchen.decorIds.map((id) => {
              const item = decors.find((decorItem) => decorItem.id === id);
              if (!item) return null;
              const on = id === decorId;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setDecorId(id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
                    on ? "border-wood bg-sand" : "border-line"
                  }`}
                >
                  <span className="h-4 w-4 rounded-full border border-black/10" style={{ background: item.swatch }} />
                  {item.name}
                </button>
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={decorId}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="mt-3 text-sm leading-6 text-muted"
            >
              {`Fotografija prikazuje ${kitchen.photoLabel}.${sameAsPhoto ? "" : ` Upit ide za dezen ${decor?.name}.`}`}
            </motion.p>
          </AnimatePresence>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-wood uppercase">{blockPrice.label}</p>
            <p className="mt-1 text-2xl font-semibold">{blockPrice.amount}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={inquiryHref(kitchen.id, decorId)}
              className="inline-flex items-center gap-2 rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210] hover:bg-wood-dark"
            >
              Pošalji upit za ovaj model
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-4">
        {specs.map((spec) => (
          <div key={spec.label} className="bg-card px-5 py-4">
            <dt className="text-xs tracking-wide text-muted uppercase">{spec.label}</dt>
            <dd className="mt-1 text-sm font-semibold">{spec.value}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-line bg-sand px-5 py-4">
        <p className="text-sm leading-6">{blockPrice.included}</p>
        <p className="mt-2 text-sm leading-6">
          Za radnu ploču koja ide preko svih elemenata,{" "}
          <Link href="/kontakt/" className="font-semibold text-wood underline">
            kontaktirajte nas
          </Link>{" "}
          za više informacija.
        </p>
        <p className="mt-2 text-sm leading-6">{worktopNote.layout}</p>
        <p className="mt-3 text-sm font-semibold leading-6 text-[#ef4444]">{worktopNote.sink}</p>
      </div>
    </article>
  );
}
