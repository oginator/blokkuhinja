import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="text-4xl">Stranica nije pronađena</h1>
      <p className="mt-3 text-muted">Ova adresa ne vodi na deo sajta.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-wood px-4 py-2.5 text-sm font-semibold text-[#141210]">
        Nazad na početnu
      </Link>
    </div>
  );
}
