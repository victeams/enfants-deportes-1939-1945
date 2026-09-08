export type FamilyMember = {
  name: string;
  role: string;
  birth: string;
  age: string;
  fate: string;
};

export type Family = {
  slug: string;
  name: string;
  city: string;
  address: string;
  deportation: string;
  camp: string;
  imageUrl: string;
  imageAlt: string;
  imageCredit: string;
  sourceUrl: string;
  excerpt: string;
  members: FamilyMember[];
  story: string[];
  archivalNote?: string;
};

export const families: Family[] = [
  {
    slug: "famille-dreyfus",
    name: "Famille Dreyfus",
    city: "Saint-Étienne · rassemblée à Lyon",
    address: "21, rue du Treuil, Saint-Étienne",
    deportation: "Convoi 71, parti de Drancy le 13 avril 1944",
    camp: "Auschwitz-Birkenau",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5cadef7b51f4d4fb6d1b63fc/1569017812304-4QCJRO9G9OQXKR2V279E/Dreyfus%2BArlette.jpg",
    imageAlt: "Edmond et Jeanne Dreyfus photographiés avec leurs enfants Arlette et Roland",
    imageCredit: "Mémorial de la Shoah, photographie reproduite par le CDDEJ de Lyon",
    sourceUrl:
      "https://www.deportesdelyon.fr/les-archives-par-famille-a-m/enfants-dreyfus",
    excerpt:
      "Edmond et Jeanne Dreyfus posent avec leurs deux enfants, Arlette et Roland. Arrêtés ensemble parce qu’ils étaient juifs, aucun des quatre n’est revenu d’Auschwitz.",
    members: [
      { name: "Edmond Dreyfus", role: "Père", birth: "22 avril 1898, Vitry-le-François", age: "45 ans", fate: "Décédé à Auschwitz le 18 avril 1944" },
      { name: "Jeanne Dreyfus, née Gensburger", role: "Mère", birth: "26 mai 1902, Strasbourg", age: "41 ans", fate: "Décédée à Auschwitz le 18 avril 1944" },
      { name: "Roland Louis Dreyfus", role: "Fils", birth: "19 octobre 1929, Strasbourg", age: "14 ans", fate: "Décédé à Auschwitz le 19 avril 1944" },
      { name: "Arlette Adèle Dreyfus", role: "Fille", birth: "22 juillet 1935, Strasbourg", age: "8 ans", fate: "Décédée à Auschwitz le 19 avril 1944" },
    ],
    story: [
      "Réfugiée à Saint-Étienne, la famille Dreyfus vivait au 21, rue du Treuil. La photographie réunit tout le foyer : Edmond, Jeanne, leur fils Roland et leur fille Arlette.",
      "Le 3 avril 1944, les quatre membres de la famille furent arrêtés parce qu’ils étaient juifs. Après leur transfert à Drancy, ils furent déportés ensemble vers Auschwitz-Birkenau par le convoi 71 du 13 avril 1944.",
      "Les actes officiels fixent le décès d’Edmond et de Jeanne au 18 avril 1944, puis ceux de Roland et d’Arlette au 19 avril. Les archives consultées ne permettent pas d’établir le procédé exact de leur mise à mort ; elles établissent qu’aucun des quatre n’est revenu d’Auschwitz.",
    ],
    archivalNote: "Une phrase de la notice du CDDEJ attribue par erreur 19 ans à Arlette et 15 ans à Roland. Leurs dates de naissance établissent qu’ils avaient respectivement 8 et 14 ans lors de la déportation.",
  },
  {
    slug: "famille-wassermann",
    name: "Famille Wassermann",
    city: "Lyon",
    address: "41 bis, avenue Lacassagne, Lyon 3e",
    deportation: "Convoi 61, parti de Drancy le 28 octobre 1943",
    camp: "Auschwitz-Birkenau",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5cadef7b51f4d4fb6d1b63fc/1568024594504-81PKC0H8MP4M0HUVQLDZ/Wasser%2BHenry%2BJules%2Bet%2BAmalie%2BWasserman%2Bposant%2Bavec%2Bleur%2Bfils%2BHenri.%2BFrance%2C%2Bvers%2B1942.jpg",
    imageAlt: "Jules et Madeleine Amalie Wassermann photographiés avec leur fils Henri vers 1942",
    imageCredit: "Mémorial de la Shoah, photographie reproduite par le CDDEJ de Lyon",
    sourceUrl:
      "https://www.deportesdelyon.fr/les-archives-par-famille-n-z/henri-wassermann-wasser",
    excerpt:
      "À Lyon, Jules et Madeleine Amalie Wassermann posent avec leur fils unique Henri. Déportés ensemble par le convoi 61, tous trois sont morts à Auschwitz.",
    members: [
      { name: "Jules Wassermann", role: "Père", birth: "5 juillet 1891, Aufhausen", age: "52 ans", fate: "Décédé à Auschwitz le 2 novembre 1943" },
      { name: "Madeleine Amalie Wassermann, née Haas", role: "Mère", birth: "26 mars 1899, Kassel", age: "44 ans", fate: "Décédée à Auschwitz le 2 novembre 1943" },
      { name: "Henri Wassermann, dit Wasser", role: "Fils unique", birth: "15 juin 1925, Francfort-sur-le-Main", age: "18 ans", fate: "Décédé à Auschwitz le 2 novembre 1943" },
    ],
    story: [
      "Vers 1942, Jules et Madeleine Amalie Wassermann se firent photographier en France avec leur fils unique Henri. Leur dernière adresse connue était le 41 bis, avenue Lacassagne, dans le troisième arrondissement de Lyon.",
      "Jules, Madeleine Amalie et Henri furent rassemblés à Lyon, internés à Drancy, puis déportés ensemble vers Auschwitz-Birkenau par le convoi 61 du 28 octobre 1943. Mille personnes se trouvaient dans ce convoi.",
      "Les actes français portant la mention « Mort en déportation » fixent leur décès au 2 novembre 1943 à Auschwitz. Ils ne décrivent pas les circonstances individuelles de leur mort. Aucun membre de ce foyer n’est revenu.",
    ],
    archivalNote: "Les sources présentent plusieurs graphies du nom — Wassermann, Wasserman ou Wasser — et hésitent entre Kassel et Francfort-sur-le-Main pour le lieu de naissance d’Henri. La date et le lieu officiels du décès sont conservés sans extrapoler la méthode de mise à mort.",
  },
];
