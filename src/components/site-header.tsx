"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-5">
        <Link href="/" className="shrink-0" aria-label="Blok kuhinja, početna">
          <Image
            src="/img/logo-blok.png"
            alt="Blok kuhinja"
            width={475}
            height={466}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Glavni meni">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  current ? "bg-sand font-semibold text-wood" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/kontakt/"
          className="ml-auto hidden rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210] transition hover:bg-wood-dark lg:ml-2 lg:inline-flex"
        >
          Zatraži ponudu
        </Link>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobilni-meni"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav id="mobilni-meni" className="border-t border-line bg-paper px-5 py-4 lg:hidden" aria-label="Mobilni meni">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-3 text-base hover:bg-sand">
                {item.label}
              </Link>
            ))}
            <Link href="/kontakt/" className="mt-2 rounded-full bg-wood px-4 py-3 text-center font-semibold text-[#141210]">
              Zatraži ponudu
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
