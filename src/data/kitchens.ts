export type Decor = {
  id: string;
  name: string;
  blurb: string;
  swatch: string;
  image?: string;
};

export const decors: Decor[] = [
  {
    id: "zlatni-hrast",
    name: "Zlatni hrast",
    blurb: "Topli dezen drveta na iverici. Može da se naruči na svakom modelu.",
    swatch: "linear-gradient(#f3e6c4 0 62%, #8d5a3b 62% 78%, #f6f1e8 78%)",
    image: "/img/dezeni/zlatni-hrast.jpg",
  },
  {
    id: "snezni-hrast",
    name: "Snežni hrast",
    blurb: "Svetli dezen hrasta. Na fotografiji je model 2, a isti dezen može da se naruči i na ostalim modelima.",
    swatch: "repeating-linear-gradient(90deg, #f4f3ef 0 3px, #cfcbc4 3px 4px)",
    image: "/img/dezeni/snezni-hrast.jpg",
  },
  {
    id: "sonoma",
    name: "Sonoma",
    blurb: "Dezen drveta. Na fotografiji je model 4, a isti dezen može da se naruči i na ostalim modelima.",
    swatch: "linear-gradient(#e6d3b4 0 62%, #a68456 62% 78%, #f4ecdf 78%)",
    image: "/img/dezeni/sonoma.jpg",
  },
  {
    id: "bela-polusjaj",
    name: "Bela polusjaj",
    blurb: "Bela polusjajna iverica, bez crteža drveta. Na fotografiji je model 5, a isti dezen može da se naruči i na ostalim modelima.",
    swatch: "linear-gradient(#ffffff 0 70%, #f2f2f2 70% 100%)",
    image: "/img/dezeni/bela-polusjaj.jpg",
  },
  {
    id: "grafit",
    name: "Antracit",
    blurb: "Tamna iverica. Front nosi boju, radna ploča može ostati u istom tonu ili svetlija, po dogovoru.",
    swatch: "#5d5f63",
    image: "/img/dezeni/antracit.png",
  },
];

export type Kitchen = {
  id: string;
  name: string;
  title: string;
  image: string;
  alt: string;
  summary: string;
  photoLabel: string;
  tags: string[];
  elements: string[];
  decorIds: string[];
};

export const kitchens: Kitchen[] = [
  {
    id: "model-1",
    name: "Model 1",
    title: "Zlatni hrast i antracit",
    image: "/img/modeli/model-1.jpg",
    alt: "Blok kuhinja u zlatnom hrastu i antracitu, sa staklenim trakama i srebrnim ručkama",
    summary:
      "Hrast sa strane, antracit u sredini. Staklene trake na gornjim vratima, srebrne ručke i radna ploča u tri dela.",
    photoLabel: "Zlatni hrast i antracit",
    tags: ["zlatni-hrast", "grafit"],
    elements: [
      "Gornji i donji elementi",
      "Hrast sa strane, antracit u sredini",
      "Staklene trake na gornjim vratima",
      "Srebrne ručke",
      "Radna ploča u tri dela",
    ],
    decorIds: ["zlatni-hrast", "snezni-hrast", "sonoma", "bela-polusjaj", "grafit"],
  },
  {
    id: "model-2",
    name: "Model 2",
    title: "Snežni hrast",
    image: "/img/modeli/model-2.jpg",
    alt: "Blok kuhinja u snežnom hrastu, sa sudoperom i staklom na gornjem elementu",
    summary: "Dezen snežni hrast, sudopera na desnoj strani i staklo na gornjem elementu.",
    photoLabel: "Snežni hrast",
    tags: ["snezni-hrast"],
    elements: [
      "Gornji i donji elementi",
      "Snežni hrast na frontovima",
      "Sudopera na desnoj strani",
      "Staklo na gornjem elementu",
    ],
    decorIds: ["snezni-hrast", "zlatni-hrast", "sonoma", "bela-polusjaj", "grafit"],
  },
  {
    id: "model-3",
    name: "Model 3",
    title: "Antracit i hrast",
    image: "/img/modeli/model-3.jpg",
    alt: "Blok kuhinja u antracitu i hrastu, sa sudoperom preko desnog donjeg elementa",
    summary:
      "Antracit i hrast, crne ručke. Sudopera ide preko celog desnog donjeg elementa.",
    photoLabel: "Antracit i hrast",
    tags: ["grafit", "zlatni-hrast"],
    elements: [
      "Gornji i donji elementi",
      "Antracit i hrast",
      "Crne ručke",
      "Sudopera preko celog desnog donjeg elementa",
    ],
    decorIds: ["grafit", "zlatni-hrast", "snezni-hrast", "sonoma", "bela-polusjaj"],
  },
  {
    id: "model-4",
    name: "Model 4",
    title: "Sonoma",
    image: "/img/modeli/model-4.jpg",
    alt: "Blok kuhinja u dezenu Sonoma, sa staklima i fiokarom u sredini",
    summary: "Sonoma, crne ručke, dva stakla gore i fiokar u sredini dole.",
    photoLabel: "Sonoma",
    tags: ["sonoma"],
    elements: [
      "Gornji i donji elementi",
      "Sonoma",
      "Crne ručke",
      "Dva stakla na gornjim elementima",
      "Fiokar u sredini",
    ],
    decorIds: ["sonoma", "zlatni-hrast", "snezni-hrast", "bela-polusjaj", "grafit"],
  },
  {
    id: "model-5",
    name: "Model 5",
    title: "Bela polusjaj",
    image: "/img/modeli/model-5.jpg",
    alt: "Bela blok kuhinja od polusjajne iverice, sa fiokarom u sredini",
    summary: "Bela polusjajna iverica, pune stranice bez stakla i fiokar u sredini.",
    photoLabel: "Bela polusjaj",
    tags: ["bela-polusjaj"],
    elements: [
      "Gornji i donji elementi",
      "Bela polusjajna iverica",
      "Pune stranice, bez stakla",
      "Fiokar u sredini",
      "Srebrne ručke",
    ],
    decorIds: ["bela-polusjaj", "zlatni-hrast", "snezni-hrast", "sonoma", "grafit"],
  },
];

export const blockPrice = {
  label: "Blok kuhinja od 2 m",
  amount: "28.000,00 din.",
  included:
    "Cena uključuje radnu ploču na većem i manjem delu, sa rupom za sudoperu.",
  full: "Za radnu ploču koja ide preko svih elemenata, kontaktirajte nas za više informacija.",
} as const;

export const worktopNote = {
  layout:
    "Svaki model blok kuhinje može da se napravi u bilo kojem dezenu koji vi odaberete. Elemente ne morate striktno pakovati kao na ovoj slici, već vi sami pravite raspored koji vam se dopada.",
  sink: "VAŽNO: Sudopera ne ulazi u cenu blok kuhinje.",
} as const;

export const specs = [
  { label: "Linija", value: "Od 2 m" },
  { label: "Delovi", value: "Gornji i donji" },
  { label: "Korpus", value: "Univer 18 mm" },
  { label: "Kant", value: "ABS" },
] as const;

export function decorById(id: string) {
  return decors.find((decor) => decor.id === id);
}

export function kitchenById(id: string) {
  return kitchens.find((kitchen) => kitchen.id === id);
}

export function inquiryHref(modelId: string, decorId: string, tip?: "veleprodaja") {
  const params = new URLSearchParams({ model: modelId, dezen: decorId });
  if (tip) params.set("tip", tip);
  return `/kontakt/?${params.toString()}`;
}
