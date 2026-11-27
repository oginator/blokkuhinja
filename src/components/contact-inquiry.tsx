"use client";

import { InquiryForm } from "@/components/inquiry-form";
import { useSearchParams } from "next/navigation";

export function ContactInquiry() {
  const params = useSearchParams();
  const model = params.get("model") ?? "";
  const dezen = params.get("dezen") ?? "";
  const tip = params.get("tip") === "veleprodaja" ? "veleprodaja" : "maloprodaja";

  return <InquiryForm key={`${model}-${dezen}-${tip}`} initialModel={model} initialDecor={dezen} initialTip={tip} />;
}
