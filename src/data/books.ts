export type Book = {
  slug: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  description: string;
  synopsis: string;
  ageRange: string;
  coverBg: string;
  coverEmoji?: string;
  coverImage?: string;
  pages?: number;
  year?: number;
  tags: string[];
  buyLinks: { name: string; url: string }[];
  featured?: boolean;
};

export const books: Book[] = [
  {
    slug: "fanto-to-sam-ja-knjiga-1",
    title: "Fanto, to sam ja – Knjiga 1",
    author: "Natali Stanković",
    publisher: "PI Press",
    isbn: "9788660235284",
    description: "Uzbudljive avanture devojčice Tine i njenog vernog prijatelja šteneta Fanta — priče koje mešaju smeh, ludorije i važne lekcije o odrastanju.",
    synopsis: `Prvi deo uzbudljivih avantura iz serijala „FANTO – LUDORIJE JEDNOG NEOBIČNOG PSA" sadrži 8 priča o devojčici Tini i njenom vernom prijatelju štenetu Fantu. Osim zabavnih dogodovština i ludorija, knjiga donosi i važne poruke koje pomažu deci u odrastanju i upoznavanju sveta i života.`,
    ageRange: "6–8 godina",
    coverBg: "#c8e6c9",
    coverImage: "/books/fanto-knjiga-1.webp",
    pages: 80,
    year: 2023,
    tags: ["avantura", "prijateljstvo", "odrastanje"],
    buyLinks: [
      { name: "Vulkan", url: "https://www.knjizare-vulkan.rs/romani-i-price-za-decu-6-8/212166-fanto-to-sam-ja-knjiga-1" },
    ],
  },
  {
    slug: "fanto-se-zaljubio-knjiga-2",
    title: "Fanto se zaljubio – Knjiga 2",
    author: "Natali Stanković",
    publisher: "PI Press",
    isbn: "9788660235420",
    description: "Drugi deo avantura devojčice Tine i njenog šteneta Fanta — 8 novih priča koje kombinuju smeh, neočekivane zgode i poruke koje pomažu deci u odrastanju.",
    synopsis: `Drugi deo avantura iz serijala „FANTO – LUDORIJE JEDNOG NEOBIČNOG PSA" donosi 8 novih priča u kojima devojčica Tina i njeno štene Fanto prolaze kroz uzbudljiva i smešna iskustva koja pomažu deci u odrastanju i upoznavanju sveta i života.`,
    ageRange: "6–8 godina",
    coverBg: "#bbdefb",
    coverImage: "/books/fanto-knjiga-2.webp",
    pages: 80,
    year: 2023,
    tags: ["avantura", "prijateljstvo", "odrastanje"],
    buyLinks: [
      { name: "Vulkan", url: "https://www.knjizare-vulkan.rs/romani-i-price-za-decu-6-8/212171-fanto-se-zaljubio-knjiga-2" },
    ],
  },
  {
    slug: "fanto-u-svojoj-porodici-knjiga-3",
    title: "Fanto u svojoj porodici – Knjiga 3",
    author: "Natali Stanković",
    publisher: "PI Press",
    isbn: "9788660235437",
    description: "Treći deo avantura devojčice Tine i šteneta Fanta — 8 novih priča o porodici, ljubavi i važnim životnim lekcijama.",
    synopsis: `Treći deo serijala „FANTO – LUDORIJE JEDNOG NEOBIČNOG PSA" donosi 8 priča u kojima devojčica Tina i njeno štene Fanto otkrivaju šta znači biti deo porodice. Zabavne zgode prepune topline nose i važne poruke koje pomažu deci u odrastanju i upoznavanju sveta i života.`,
    ageRange: "6–8 godina",
    coverBg: "#f8bbd0",
    coverImage: "/books/fanto-knjiga-3.webp",
    pages: 80,
    year: 2023,
    tags: ["porodica", "prijateljstvo", "odrastanje"],
    buyLinks: [
      { name: "Vulkan", url: "https://www.knjizare-vulkan.rs/romani-i-price-za-decu-6-8/212176-fanto-u-svojoj-porodici-knjiga-3" },
    ],
    featured: true,
  },
  {
    slug: "bontoniranje",
    title: "Bontoniranje",
    author: "Natali Pejčić",
    publisher: "Pi-press books",
    isbn: "",
    description: "17 toplih priča o đacima-prvacima Pepiki i Lazi koji uče pravila lepog ponašanja — uz smeh, greške i važne lekcije o odrastanju.",
    synopsis: `Glavni junaci ove neobične knjige o lepom ponašanju su đaci-prvaci, Pepika i Laza, koji se svesrdno trude da savladaju brojna životna pravila i odrastu u fine i lepo vaspitane mlade ljude — da postanu „bontonirani". U 17 toplih priča, koje plene zavodljivim dečjim humorom, opisane su različite situacije, često neprijatne, ponekad smešne, u koje zapadaju Pepi i Laza na svom putu odrastanja. Bontoniranje je „doktor za probleme" koji će pomoći devojčicama i dečacima da lakše pređu iz predškolskog detinjstva u školski uzrast.`,
    ageRange: "6–8 godina",
    coverBg: "#fff9c4",
    coverImage: "/books/bontoniranje.jpg",
    tags: ["bonton", "humor", "odrastanje"],
    buyLinks: [
      { name: "Delfi", url: "https://delfi.rs/knjige/11296-bontoniranje-knjiga-delfi-knjizare.html" },
    ],
  },
];
