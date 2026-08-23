export type Portrait = {
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  ageLabel: string;
  ageMonths: number;
  country: string;
  camp: string;
  outcome: "Assassinée" | "Assassiné" | "Survivante" | "Survivant";
  deathDate?: string;
  deathPlace?: string;
  imageUrl: string;
  imageAlt: string;
  imageCredit: string;
  sourceUrl: string;
  excerpt: string;
  biography: string[];
};

export const portraits: Portrait[] = [
  {
    slug: "sara-cohen",
    name: "Sara Cohen",
    firstName: "Sara",
    lastName: "Cohen",
    birthDate: "13 mai 1943",
    birthPlace: "Groningen, Pays-Bas",
    ageLabel: "8 mois",
    ageMonths: 8,
    country: "Pays-Bas",
    camp: "Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "11 février 1944",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl: "https://pbs.twimg.com/media/GqyLQmyXwAAoywb.jpg",
    imageAlt: "Sara Cohen photographiée bébé, allongée sur une couverture",
    imageCredit: "Collection familiale, publiée par le Mémorial d’Auschwitz",
    sourceUrl: "https://www.joodsmonument.nl/en/page/31660/sara-cohen",
    excerpt:
      "À huit mois, Sara fut déportée avec sa mère, son frère Louis et sa sœur Malka.",
    biography: [
      "Sara Cohen naît le 13 mai 1943 à Groningen. Elle est le troisième enfant de Joseph Cohen, fabricant de vêtements, et de Carolina Bachrach, qui élève Louis, Malka et leur bébé dans leur appartement de la J.C. Kapteynlaan.",
      "Son père est déjà prisonnier lorsque Sara vient au monde. Il est ensuite déporté à Sobibor, où il est assassiné le 23 juillet 1943. Carolina reste seule avec les trois enfants.",
      "Le 8 février 1944, Carolina est contrainte de rejoindre Westerbork avec Louis, Malka et Sara. Trois jours plus tard, tous quatre arrivent à Auschwitz-Birkenau. Sara est assassinée dans une chambre à gaz avec sa mère, son frère et sa sœur. Elle n’avait que huit mois.",
      "Sur la photographie conservée d’elle, Sara repose paisiblement sur une couverture. Ce visage minuscule rappelle qu’avant d’être une victime, elle était un bébé attendu, entouré et aimé.",
    ],
  },
  {
    slug: "alida-baruch",
    name: "Alida Baruch",
    firstName: "Alida",
    lastName: "Baruch",
    birthDate: "26 janvier 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "5 mois",
    ageMonths: 5,
    country: "Pays-Bas",
    camp: "Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "18 juillet 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/scan_0005_1_alida_baruch_b_29_1_1942_foto_dd_20_5_1942.jpg%28mediaclass-victim-image.b49d5c0da9ca84e2b2f4bfea5ab80e7b851508d3%29.jpg",
    imageAlt: "Portrait d’Alida Baruch photographiée le 20 mai 1942",
    imageCredit: "Collection privée, Mémorial juif numérique",
    sourceUrl: "https://www.joodsmonument.nl/en/page/177497/alida-baruch",
    excerpt:
      "Photographiée à Amsterdam quelques semaines avant sa déportation, Alida n’avait que cinq mois.",
    biography: [
      "Alida Baruch naît le 26 janvier 1942 à Amsterdam. Elle est la fille de Salomon Baruch et de Ruth Eva Horn. La famille habite au 8, Recht Boomssloot, au cœur de la ville.",
      "Le 20 mai 1942, Alida est photographiée. Son visage rond et son regard calme sont ceux d’un nourrisson qui ne peut comprendre le danger grandissant autour de sa famille.",
      "En juillet 1942, Alida est déportée à Auschwitz avec ses parents. Elle y est assassinée le 18 juillet, à l’âge de cinq mois. Sa mère et son père meurent eux aussi à Auschwitz en 1942.",
      "Il reste d’Alida une seule photographie identifiée. Elle suffit pourtant à rendre à ce bébé une présence que les bourreaux voulaient effacer.",
    ],
  },
  {
    slug: "marie-majerowicz",
    name: "Marie Majerowicz",
    firstName: "Marie",
    lastName: "Majerowicz",
    birthDate: "30 décembre 1942",
    birthPlace: "Camp de Westerbork, Pays-Bas",
    ageLabel: "1 an",
    ageMonths: 21,
    country: "Pays-Bas",
    camp: "Westerbork · Theresienstadt · Auschwitz",
    outcome: "Assassinée",
    deathDate: "8 octobre 1944",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/29/majerovicz_marie_12_12_1942.jpg%28mediaclass-landscape-large.f8e0c8814204b21f42942bc52bb8266918934a51%29.jpg",
    imageAlt: "Portrait de Marie Majerowicz bébé",
    imageCredit: "USHMM, provenance Sharon Fahrer, projet In Memoriam",
    sourceUrl: "https://www.joodsmonument.nl/en/page/238158/marie-majerowicz",
    excerpt:
      "Marie naquit prisonnière à Westerbork et passa presque toute sa courte vie derrière des barbelés.",
    biography: [
      "Marie Majerowicz naît le 30 décembre 1942 dans le camp de Westerbork. Ses parents, Julius Kurt Artur Majerowicz et Ritta Schlachet, s’étaient rencontrés alors qu’ils y étaient internés.",
      "En septembre 1944, la famille est déportée vers Theresienstadt. Le 6 octobre, Marie et sa mère sont placées dans un nouveau convoi en direction d’Auschwitz-Birkenau.",
      "Marie est assassinée dans une chambre à gaz après la sélection, le 8 octobre 1944. Elle n’a pas encore deux ans. Sa mère est assassinée avec elle. Son père meurt à Buchenwald peu avant la libération du camp.",
      "Marie avait appris à reconnaître le monde entre les baraques et les appels. Sa photographie demeure la preuve douce et terrible qu’une enfant avait vécu là.",
    ],
  },
  {
    slug: "anna-bogdanska",
    name: "Anna Bogdańska",
    firstName: "Anna",
    lastName: "Bogdańska",
    birthDate: "26 octobre 1944",
    birthPlace: "Auschwitz II-Birkenau",
    ageLabel: "Nouveau-née",
    ageMonths: 0,
    country: "Pologne",
    camp: "Auschwitz-Birkenau",
    outcome: "Survivante",
    imageUrl: "https://pbs.twimg.com/media/GaypRjCXAAAc-nT.jpg",
    imageAlt: "Kazimiera Bogdańska tenant sa fille Anna dans ses bras",
    imageCredit: "Mémorial d’Auschwitz, collection familiale",
    sourceUrl: "https://x.com/AuschwitzMuseum/status/1850039686879748162",
    excerpt:
      "Anna naquit à Birkenau en octobre 1944. Sa mère Kazimiera réussit à la garder en vie jusqu’à la libération.",
    biography: [
      "Kazimiera Bogdańska est déportée de Varsovie vers Auschwitz en août 1944. Enceinte, elle donne naissance à sa fille Anna le 26 octobre dans le camp de Birkenau.",
      "Le bébé reçoit le numéro de prisonnière 89097. Dans les conditions extrêmes du camp, chaque journée constitue une lutte contre la faim, le froid et la maladie.",
      "Anna et sa mère sont encore en vie lorsque le camp est libéré le 27 janvier 1945. Leur survie ne diminue en rien la violence de ce qu’elles ont subi, mais elle transmet aussi la force d’un lien maternel préservé au milieu de la destruction.",
    ],
  },
  {
    slug: "clarence-frank",
    name: "Clarence Frank",
    firstName: "Clarence",
    lastName: "Frank",
    birthDate: "Juin 1943",
    birthPlace: "Camp de Westerbork, Pays-Bas",
    ageLabel: "Bébé",
    ageMonths: 12,
    country: "Pays-Bas",
    camp: "Westerbork · Theresienstadt",
    outcome: "Survivant",
    imageUrl:
      "https://wwv.yadvashem.org/yv/en/exhibitions/women-in-the-holocaust/images/motherhood/katarina/01.jpg",
    imageAlt: "Catharina Frank tenant son bébé Clarence à Westerbork",
    imageCredit: "Yad Vashem, collection de la famille Frank",
    sourceUrl:
      "https://wwv.yadvashem.org/yv/en/exhibitions/women-in-the-holocaust/motherhood/catharina-frank.asp",
    excerpt:
      "Né à Westerbork, Clarence fut déporté à Theresienstadt avec sa mère Catharina et survécut.",
    biography: [
      "Catharina Frank, danseuse et infirmière originaire de Rotterdam, est enceinte lorsqu’elle est emprisonnée à Westerbork. Elle y donne naissance à Clarence en juin 1943.",
      "Jacques, le père de Clarence, voit son fils une fois avant d’être déporté à Sobibor, où il est assassiné. Catharina protège désormais seule son bébé dans le camp.",
      "En 1944, la mère et l’enfant sont transférés à Theresienstadt. Ils survivent tous les deux à la guerre. Leur photographie prise à Westerbork conserve un instant de tendresse au sein d’un univers conçu pour détruire les familles.",
    ],
  },
];

export function getPortrait(slug: string) {
  return portraits.find((portrait) => portrait.slug === slug);
}
