import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Link href="/">
            <Image src="/img/logo-blok.png" alt="Blok kuhinja" width={475} height={466} className="h-20 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Mala firma od poverenja. Dvadeset godina sklapamo kuhinje. Blok kuhinje od iverice, od 2 m, i kuhinje po meri.{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mladenovac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink hover:text-wood"
            >
              Mladenovac
              <MapPin size={14} className="text-[#ea4335]" aria-hidden="true" />
            </a>.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">Strane</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-wood">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/proces/" className="hover:text-wood">
                Tok izrade
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">Kontakt</h2>
          <p className="mt-3 text-sm leading-6">
            blokkuhinja.rs
            <br />
            <a className="underline decoration-line underline-offset-4 hover:text-wood" href={site.phoneHref}>
              {site.phone}
            </a>
            <br />
            <a className="underline decoration-line underline-offset-4 hover:text-wood" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-muted">© 2026 Blok kuhinja</div>
    </footer>
  );
}
