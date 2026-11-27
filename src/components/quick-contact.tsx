"use client";

import { Mail, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

export function QuickContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {open ? (
        <div className="w-64 rounded-3xl border border-line bg-card p-4 shadow-[0_20px_50px_-24px_rgba(28,25,23,0.45)]">
          <div className="flex items-start justify-between gap-3">
            <p className="font-display text-lg">Brzi upit</p>
            <button type="button" aria-label="Zatvori" onClick={() => setOpen(false)} className="rounded-full p-1 text-muted">
              <X size={16} />
            </button>
          </div>
          <p className="mt-1 text-sm leading-5 text-muted">Poruka ide na adresu radionice.</p>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center gap-2 rounded-2xl bg-sand px-3 py-3 text-sm font-semibold"
          >
            <Phone size={16} className="text-wood" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 flex items-center gap-2 rounded-2xl bg-sand px-3 py-3 text-sm font-semibold"
          >
            <Mail size={16} className="text-wood" />
            {site.email}
          </a>
          <Link href="/kontakt/" className="mt-2 block rounded-full bg-wood px-3 py-2.5 text-center text-sm font-semibold text-[#141210]" onClick={() => setOpen(false)}>
            Otvori formu
          </Link>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-wood text-[#141210] shadow-[0_12px_30px_-12px_rgba(28,25,23,0.55)] transition hover:bg-wood-dark"
        aria-expanded={open}
        aria-label="Brzi upit"
      >
        {open ? <X size={22} /> : <Mail size={22} />}
      </button>
    </div>
  );
}
