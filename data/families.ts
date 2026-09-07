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
    slug: "famille-calef",
    name: "Famille Calef",
    city: "Lyon",
    address: "1, quai de la Pêcherie, Lyon 1er",
    deportation: "Convoi 63, parti de Drancy le 17 décembre 1943",
    camp: "Auschwitz-Birkenau",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5cadef7b51f4d4fb6d1b63fc/1555412335222-E3XOQZU9XPPZS75W85Q6/Calef-famille-doisneau.jpg",
    imageAlt: "Photographie d’archives de la famille Calef",
    imageCredit: "Archives familiales Calef, document conservé par le CDDEJ de Lyon",
    sourceUrl:
      "https://www.deportesdelyon.fr/les-familles-de-lyon/parcours-enfants-calef",
    excerpt:
      "Jules et Suzanne Calef vivaient de la couture à Lyon avec leurs enfants Rita et Léon. Aucun des quatre n’est revenu d’Auschwitz.",
    members: [
      { name: "Jules Calef", role: "Père", birth: "8 décembre 1884, Smyrne", age: "59 ans", fate: "Assassiné à Auschwitz-Birkenau" },
      { name: "Suzanne Calef, née Cori ou Corry", role: "Mère", birth: "17 décembre 1897, Turquie", age: "46 ans", fate: "Assassinée à Auschwitz-Birkenau" },
      { name: "Rita Calef", role: "Fille", birth: "17 décembre 1930, Smyrne", age: "13 ans", fate: "Assassinée à Auschwitz-Birkenau" },
      { name: "Léon Calef", role: "Fils", birth: "21 juillet 1931 ou 1932", age: "11 ou 12 ans", fate: "Assassiné à Auschwitz-Birkenau" },
    ],
    story: [
      "Au 1, quai de la Pêcherie, la famille Calef menait une vie de travail et d’école. Jules et Suzanne travaillaient dans la couture. Rita fréquenta l’école de la rue Touret, l’école Meissonier puis le collège Morel. Léon était lui aussi écolier. En 1943, les deux enfants furent conduits quelque temps à Nice. Rita, éloignée de Lyon et de tout ce qu’elle aimait, confia sa nostalgie et ses espoirs à un journal de jeune fille.",
      "De retour à Lyon, les quatre membres de la famille furent arrêtés par la Milice française les 15 ou 17 novembre 1943, parce qu’ils étaient juifs. Ils furent transférés au camp de Drancy, où leur présence est attestée le 10 décembre. Le 17 décembre, jour des anniversaires de Suzanne et de Rita, ils furent entassés dans le convoi 63 à destination d’Auschwitz-Birkenau.",
      "Les archives indiquent que Jules, Suzanne, Rita et Léon furent assassinés dans les chambres à gaz à Auschwitz. Aucun ne revint. Rita avait treize ans et Léon onze ou douze ans. Le journal de Rita demeure la voix d’une adolescente qui rêvait encore d’un monde où les êtres humains choisiraient de s’aimer plutôt que de se détruire.",
      "Une adresse, quatre prénoms et quelques pages écrites à la main sont tout ce qui reste d’un foyer où l’on cousait, étudiait et espérait encore demain.",
    ],
    archivalNote: "Les documents consultés donnent deux dates possibles pour l’arrestation et deux années possibles pour la naissance de Léon. Ces incertitudes sont conservées telles quelles.",
  },
  {
    slug: "famille-goldschmidt",
    name: "Famille Goldschmidt",
    city: "Lyon",
    address: "99, rue de l’Hôtel-de-Ville, aujourd’hui rue Édouard-Herriot, Lyon",
    deportation: "Convoi 62, parti de Drancy le 20 novembre 1943",
    camp: "Auschwitz-Birkenau",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5cadef7b51f4d4fb6d1b63fc/1555589246744-PGGPY9YY8F5J5FVJWEE9/Goldschmidt02.jpg",
    imageAlt: "Élie, Janine et Jacques Goldschmidt photographiés à Lyon",
    imageCredit: "Photographie familiale d’Élie, Janine et Jacques Goldschmidt, CDDEJ de Lyon",
    sourceUrl:
      "https://www.deportesdelyon.fr/les-archives-par-famille-a-m/enfants-goldschmidt",
    excerpt:
      "Émilie Goldschmidt et ses trois enfants, Élie, Janine et Jacques, vivaient et étudiaient au cœur de Lyon. Aucun ne revint d’Auschwitz.",
    members: [
      { name: "Émilie Goldschmidt, née Cahen", role: "Mère", birth: "20 mai 1902, Mulhouse", age: "41 ans", fate: "Morte en déportation à Auschwitz-Birkenau" },
      { name: "Élie Jean Goldschmidt", role: "Fils aîné", birth: "8 novembre 1925, Lyon", age: "18 ans", fate: "Mort en déportation à Auschwitz-Birkenau" },
      { name: "Janine Goldschmidt", role: "Fille", birth: "23 juin 1927, Lyon", age: "16 ans", fate: "Morte en déportation à Auschwitz-Birkenau" },
      { name: "Jacques Simon Francis Goldschmidt", role: "Fils cadet", birth: "8 décembre 1928, Lyon", age: "14 ans", fate: "Mort en déportation à Auschwitz-Birkenau" },
    ],
    story: [
      "La famille Goldschmidt habitait au 99, rue de l’Hôtel-de-Ville, dans le centre de Lyon. Élie et Jacques étudiaient au lycée Ampère. Élie suivait la classe de philosophie-sciences. Janine était élève au lycée de jeunes filles Edgar-Quinet, devenu le lycée Édouard-Herriot. Leurs dossiers scolaires rendent encore perceptible une vie faite de cours, de projets et de retours à la maison.",
      "Émilie fut arrêtée le 29 octobre 1943 en raison de son identité juive. Ses trois enfants furent arrêtés à leur domicile deux jours plus tard. Tous furent emprisonnés à Montluc puis transférés à Drancy, où ils arrivèrent le 9 novembre. Le 20 novembre 1943, Émilie, Élie, Janine et Jacques furent déportés vers Auschwitz-Birkenau par le convoi 62.",
      "Aucun des quatre ne revint. Les notices d’archives les déclarent morts en déportation à Auschwitz-Birkenau, sans préciser pour chacun la date ni les circonstances exactes du décès. Élie avait dix-huit ans, Janine seize ans et Jacques quatorze ans lors du départ du convoi.",
      "Sur leur photographie, Élie, Janine et Jacques sont encore simplement une sœur et ses frères. Derrière eux demeure le silence d’une maison lyonnaise dont personne n’est revenu ouvrir la porte.",
    ],
    archivalNote: "Une courte présentation du CDDEJ emploie un autre prénom pour le père, tandis que les notices détaillées nomment Maurice Goldschmidt. Faute de document concordant sur son parcours, cette fiche se limite aux quatre personnes dont la déportation commune est établie.",
  },
];
