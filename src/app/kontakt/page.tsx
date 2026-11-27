import { ContactInquiry } from "@/components/contact-inquiry";
import { site } from "@/data/site";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Upit za blok kuhinju. Navedite grad, model i dezen. Tačnu meru uzimamo na licu mesta.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-wood uppercase">Kontakt</p>
        <h1 className="mt-3 text-4xl md:text-6xl">Zatražite ponudu</h1>
        <p className="mt-4 leading-7 text-muted">
          U poruci napišite grad, otprilike koji zid je slobodan i da li kuhinja već postoji. Tačnu meru uzimamo na licu mesta.
        </p>
        <a href={`mailto:${site.email}`} className="mt-8 flex items-center gap-3 rounded-[1.5rem] bg-sand p-5">
          <Mail className="text-wood" />
          <span>
            <span className="block text-xs tracking-wide text-muted uppercase">Email</span>
            <span className="font-semibold">{site.email}</span>
          </span>
        </a>
        <p className="mt-4 text-sm leading-6 text-muted">blokkuhinja.rs</p>
      </div>
      <Suspense fallback={<p className="text-muted">Učitavanje upita…</p>}>
        <ContactInquiry />
      </Suspense>
    </div>
  );
}
