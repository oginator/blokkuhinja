"use client";

import { decorById, decors, kitchenById, kitchens } from "@/data/kitchens";
import { site } from "@/data/site";
import { useMemo, useState } from "react";

const field =
  "mt-1.5 w-full rounded-2xl border border-line bg-card px-4 py-3 text-sm outline-none transition focus:border-wood focus:ring-2 focus:ring-wood/20";

type Tip = "maloprodaja" | "veleprodaja";

export function InquiryForm({
  initialModel = "",
  initialDecor = "",
  initialTip = "maloprodaja",
}: {
  initialModel?: string;
  initialDecor?: string;
  initialTip?: Tip;
}) {
  const [tip, setTip] = useState<Tip>(initialTip === "veleprodaja" ? "veleprodaja" : "maloprodaja");
  const [modelId, setModelId] = useState(kitchenById(initialModel)?.id ?? "");
  const [decorId, setDecorId] = useState(decorById(initialDecor)?.id ?? "");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const modelOptions = useMemo(() => kitchens, []);
  const selectedModel = kitchenById(modelId);
  const decorOptions = (
    selectedModel ? selectedModel.decorIds.map((id) => decorById(id)) : decors
  ).filter((item) => item != null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (String(data._honey || "").trim()) {
      setStatus("Hvala. Poruka je zabeležena.");
      form.reset();
      return;
    }

    const model = kitchenById(String(data.model || ""));
    const decor = decorById(String(data.dezen || ""));
    setSending(true);
    setStatus("");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Upit za blok kuhinju — ${data.ime || "sajt"}`,
          _template: "table",
          _captcha: "false",
          _replyto: data.email || undefined,
          tip: data.tip === "veleprodaja" ? "Firma / Salon (Veleprodaja)" : "Fizičko lice",
          firma: data.firma || "",
          ime: data.ime || "",
          telefon: data.telefon || "",
          email: data.email || "nije naveden",
          grad: data.grad || "",
          model: model ? `${model.name} — ${model.title}` : "Nisam siguran",
          dezen: decor?.name || "Još ne znam",
          raspored: data.raspored || "",
          poruka: data.poruka || "",
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
      const ok = response.ok && String(result?.success) !== "false";
      if (!ok) {
        setStatus(result?.message || `Poruka nije otišla. Pišite direktno na ${site.email}.`);
        return;
      }
      setStatus("Upit je poslat. Javićemo se na telefon ili email koji ste naveli.");
      form.reset();
      setModelId("");
      setDecorId("");
    } catch {
      setStatus(`Poruka nije otišla. Proverite internet i pokušajte ponovo, ili pišite na ${site.email}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="upit" onSubmit={onSubmit} className="rounded-[1.75rem] border border-line bg-card p-6 shadow-[0_18px_50px_-32px_rgba(28,25,23,0.45)] md:p-8">
      <h2 className="text-3xl">Upit za ponudu</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Upit stiže direktno na adresu radionice. Tačnu meru uzimamo na licu mesta.
      </p>
      <input className="hidden" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">Kome je upit</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {(
            [
              ["maloprodaja", "Fizičko lice"],
              ["veleprodaja", "Firma / Salon (Veleprodaja)"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className={`cursor-pointer rounded-2xl border px-3 py-3 text-sm ${
                tip === value ? "border-wood bg-sand" : "border-line"
              }`}
            >
              <input
                className="mr-2 accent-[#c6a15a]"
                type="radio"
                name="tip"
                value={value}
                checked={tip === value}
                onChange={() => setTip(value)}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {tip === "veleprodaja" ? (
        <label className="mt-4 block text-sm font-medium">
          Firma ili salon
          <input className={field} name="firma" autoComplete="organization" />
        </label>
      ) : null}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Ime
          <input className={field} name="ime" required autoComplete="name" />
        </label>
        <label className="text-sm font-medium">
          Telefon
          <input className={field} name="telefon" required autoComplete="tel" inputMode="tel" />
        </label>
        <label className="text-sm font-medium">
          Email
          <input className={field} name="email" type="email" autoComplete="email" />
        </label>
        <label className="text-sm font-medium">
          Grad
          <input className={field} name="grad" required autoComplete="address-level2" />
        </label>
        <label className="text-sm font-medium">
          Model
          <select
            className={field}
            name="model"
            value={modelId}
            onChange={(event) => {
              const next = event.target.value;
              setModelId(next);
              const kitchen = kitchenById(next);
              if (kitchen && !kitchen.decorIds.includes(decorId)) setDecorId(kitchen.decorIds[0] ?? "");
            }}
          >
            <option value="">Nisam siguran</option>
            {modelOptions.map((kitchen) => (
              <option key={kitchen.id} value={kitchen.id}>
                {kitchen.name} — {kitchen.title}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Dezen
          <select className={field} name="dezen" value={decorId} onChange={(event) => setDecorId(event.target.value)}>
            <option value="">Još ne znam</option>
            {decorOptions.map((decor) => (
              <option key={decor.id} value={decor.id}>
                {decor.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium">
        Ako zid nije kao u modelu
        <select className={field} name="raspored" defaultValue="Držim se modela">
          <option>Držim se modela</option>
          <option>Treba prilagoditi zidu</option>
        </select>
      </label>
      <label className="mt-4 block text-sm font-medium">
        Poruka
        <textarea
          className={`${field} min-h-32 resize-y`}
          name="poruka"
          placeholder="Šta ostaje od aparata, da li ima prozor, da li se skida stara kuhinja..."
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="mt-5 rounded-full bg-wood px-5 py-3 text-sm font-semibold text-[#141210] hover:bg-wood-dark disabled:opacity-60"
      >
        {sending ? "Šalje se…" : "Pošalji upit"}
      </button>
      {status ? (
        <p className="mt-3 text-sm leading-6 text-muted" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
