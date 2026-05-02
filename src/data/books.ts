export type Book = {
  slug: string;
  title: string;
  description: string;
  synopsis: string;
  ageRange: string;
  coverBg: string;
  coverEmoji: string;
  tags: string[];
  buyLinks: { name: string; url: string }[];
  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "tajna-zelene-sume",
    title: "Tajna zelene šume",
    description: "Mala Mia otkriva da šuma čuva neverovatne tajne — ali samo oni koji umeju da slušaju mogu da ih čuju.",
    synopsis: "Sedmogodišnja Mia se jednog jutra probudi pre sunca i odluči da istraži šumu iza kuće. Tamo otkriva da drveće šapuće, da cveće ima svoju pesmu i da svaki kamen pamti priču. Ali tajnu šume može da čuje samo ono dete koje nije zaboravilo da sluša.",
    ageRange: "5–8 godina",
    coverBg: "#c8e6c9",
    coverEmoji: "🌲",
    tags: ["avantura", "priroda", "prijateljstvo"],
    buyLinks: [
      { name: "Delfi", url: "#" },
      { name: "Vulkan", url: "#" },
    ],
    featured: true,
  },
  {
    slug: "decak-koji-je-hvatao-oblake",
    title: "Dečak koji je hvatao oblake",
    description: "Luka veruje da oblaci skrivaju priče. Jednog dana, jedan oblak sleti baš u njegov dvorište.",
    synopsis: "Luka provodi svako jutro na prozoru, posmatrajući oblake i zamišljajući šta se krije u njima. Kada jedan neobično mek oblak sleti pravo u njegovo dvorište, počinje avantura koja će ga odvesti dalje nego što je ikad sanjao — i naučiti ga da mašta nema granica.",
    ageRange: "6–10 godina",
    coverBg: "#bbdefb",
    coverEmoji: "☁️",
    tags: ["mašta", "avantura", "hrabrost"],
    buyLinks: [
      { name: "Delfi", url: "#" },
      { name: "Laguna", url: "#" },
    ],
  },
  {
    slug: "zmajeva-pesmica",
    title: "Zmajeva pesmica",
    description: "Zmaj koji ne ume da riče — ali peva najlepše pesme na svetu. Priča o tome da je različitost dar.",
    synopsis: "Svi zmajevi u dolini ričući plaše sela i osvajaju zamkove. Ali mali Žar ne ume da riče — on peva. Deca ga vole, ali ostali zmajevi ga zadirkuju. Kada dolinom počne da se širi tuga, jedino Žareva pesma može da je rastjera.",
    ageRange: "3–6 godina",
    coverBg: "#f8bbd0",
    coverEmoji: "🐉",
    tags: ["pesmica", "različitost", "hrabrost"],
    buyLinks: [
      { name: "Vulkan", url: "#" },
      { name: "Delfi", url: "#" },
    ],
  },
];
