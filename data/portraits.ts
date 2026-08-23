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
  outcome:
    | "Assassinée"
    | "Assassiné"
    | "Morte en déportation"
    | "Mort en déportation"
    | "Survivante"
    | "Survivant";
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
  {
    slug: "bettje-van-delft",
    name: "Bettje van Delft",
    firstName: "Bettje",
    lastName: "van Delft",
    birthDate: "1er février 1942",
    birthPlace: "Sappemeer, Pays-Bas",
    ageLabel: "10 mois",
    ageMonths: 10,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "11 décembre 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/00749_b_bettje_van_delft_850_pix.jpg",
    imageAlt: "Bettje van Delft photographiée bébé sur une couverture",
    imageCredit:
      "Archives municipales de Hoogezand-Sappemeer, collection photographique",
    sourceUrl: "https://www.joodsmonument.nl/en/page/123347/bettje-van-delft",
    excerpt:
      "Séparée de son père avant même de savoir marcher, Bettje fut déportée avec sa mère à dix mois.",
    biography: [
      "Bettje van Delft naît le 1er février 1942 à Sappemeer. Elle est la fille de David van Delft et de Bertha Bollegraaf, mariés en 1940. David travaille d’abord comme employé d’entrepôt, puis coud des sacs à domicile lorsque les persécutions lui interdisent de conserver son emploi.",
      "David est déporté avant sa femme et son bébé. Il est assassiné à Auschwitz le 18 août 1942. Le 28 novembre, Bertha et Bettje arrivent au camp de Westerbork, désormais seules.",
      "Le 8 décembre 1942, la mère et l’enfant sont placées dans un convoi pour Auschwitz. Elles y arrivent le 11 décembre et sont assassinées immédiatement. Bettje n’avait que dix mois.",
      "Sa photographie montre un bébé éveillé, posé sur une couverture claire. Elle ne raconte pas seulement une disparition : elle restitue le visage d’une petite fille aimée, dont toute la vie aurait dû commencer.",
    ],
  },
  {
    slug: "carry-ellen-fogel",
    name: "Carry Ellen Fogel",
    firstName: "Carry Ellen",
    lastName: "Fogel",
    birthDate: "27 mars 1944",
    birthPlace: "Camp de Westerbork, Pays-Bas",
    ageLabel: "6 mois",
    ageMonths: 6,
    country: "Pays-Bas",
    camp: "Westerbork · Theresienstadt · Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "19 octobre 1944",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/fogel_carry_ellen_27_03_1944.jpg",
    imageAlt: "Carry Ellen Fogel photographiée nouveau-née à Westerbork",
    imageCredit: "Projet In Memoriam, Guus Luijters et Aline Pennewaard",
    sourceUrl: "https://www.joodsmonument.nl/en/page/217336/carry-ellen-fogel",
    excerpt:
      "Née prisonnière à Westerbork, Carry Ellen ne connut du monde que les camps et les convois.",
    biography: [
      "Carry Ellen Fogel naît à 21 h 55 le 27 mars 1944 dans le camp de Westerbork. Sa mère, Rozette Allemans, est infirmière et avait épousé le négociant Moritz Fogel dans le camp le 5 mai 1943.",
      "Malgré l’enfermement, ses parents font photographier leur nouveau-née. Sur cette image, Carry Ellen repose comme n’importe quel bébé, dans un décor qui tente de préserver un instant d’innocence.",
      "Le 4 septembre 1944, Carry Ellen et ses parents sont déportés vers Theresienstadt, puis séparés par de nouveaux transports. Rozette et son bébé arrivent à Auschwitz en octobre.",
      "Rozette est assassinée le 18 octobre 1944. La date officielle du décès de Carry Ellen est le lendemain, 19 octobre. Elle avait six mois. Les archives ne permettent pas de savoir si mère et enfant furent réellement séparées dans leurs derniers instants.",
    ],
  },
  {
    slug: "cornelia-de-boer",
    name: "Cornelia de Boer",
    firstName: "Cornelia",
    lastName: "de Boer",
    birthDate: "4 août 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "11 mois",
    ageMonths: 11,
    country: "Pays-Bas",
    camp: "Westerbork · Sobibór",
    outcome: "Assassinée",
    deathDate: "16 juillet 1943",
    deathPlace: "Sobibór",
    imageUrl:
      "https://www.joodsmonument.nl/image/2025/2/23/cornelia_de_boer.jpg",
    imageAlt: "Cornelia de Boer emmitouflée sur un coussin",
    imageCredit: "Collection privée Pierre Dingsdag",
    sourceUrl: "https://www.joodsmonument.nl/en/page/166503/cornelia-de-boer",
    excerpt:
      "Cornelia fut déportée à Sobibór avec sa mère, son frère Jacques et sa sœur Hetty.",
    biography: [
      "Cornelia de Boer naît le 4 août 1942 à Amsterdam. Elle est la plus jeune enfant de Levie de Boer et de Catharina Dingsdag. À la maison, rue Transvaalstraat, vivent aussi Jacques, âgé de cinq ans à sa naissance, et Hetty, deux ans.",
      "Son père meurt en déportation en février 1943. Catharina reste seule avec leurs trois enfants. Tous quatre sont ensuite enfermés à Westerbork.",
      "Le 13 juillet 1943, Catharina, Jacques, Hetty et Cornelia sont déportés vers Sobibór. Ils y sont assassinés le 16 juillet, le jour de l’arrivée. Cornelia avait onze mois.",
      "Dans le portrait conservé par la famille, elle est emmitouflée et lève une petite main. Ce geste d’enfant traverse le temps comme un salut que personne n’aurait jamais dû recevoir si tôt.",
    ],
  },
  {
    slug: "edith-poppelsdorf",
    name: "Edith Poppelsdorf",
    firstName: "Edith",
    lastName: "Poppelsdorf",
    birthDate: "28 décembre 1941",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "7 mois",
    ageMonths: 7,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "16 août 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/poppelsdorf_edith_28_12_1941.jpg",
    imageAlt: "Portrait en studio d’Edith Poppelsdorf bébé",
    imageCredit: "Collection privée Frits Snijder",
    sourceUrl: "https://www.joodsmonument.nl/en/page/187500/edith-poppelsdorf",
    excerpt:
      "À sept mois, Edith fut assassinée à Auschwitz avec sa mère Roosje.",
    biography: [
      "Edith Poppelsdorf naît le 28 décembre 1941 à Amsterdam. Elle est l’unique enfant de Frits Poppelsdorf et de Roosje Bokkie, mariés le 8 janvier 1941. La famille habite Nieuwe Herengracht.",
      "Frits travaille comme employé d’expédition. Roosje a vingt-huit ans lorsque la persécution emporte le foyer qu’ils viennent à peine de construire.",
      "Edith et sa mère sont déportées à Auschwitz, où elles sont assassinées le 16 août 1942. Frits meurt lui aussi à Auschwitz quelques semaines plus tard. Edith n’avait que sept mois.",
      "Son portrait en studio a la douceur des albums de famille : une petite mèche attachée, un gilet tricoté, des yeux immenses. Tout semblait annoncer une enfance, et pourtant il ne lui resta aucun lendemain.",
    ],
  },
  {
    slug: "meijer-leman",
    name: "Meijer Leman",
    firstName: "Meijer",
    lastName: "Leman",
    birthDate: "1er décembre 1941",
    birthPlace: "Zwolle, Pays-Bas",
    ageLabel: "11 mois",
    ageMonths: 11,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassiné",
    deathDate: "19 novembre 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2018/1/13/leman_henderika_rika_27_10_1940_en_meijer_01_12_1941_2_jpg_mediaclass_admin_medi.jpg",
    imageAlt: "Meijer Leman bébé dans les bras de sa famille",
    imageCredit: "Projet In Memoriam, Guus Luijters et Aline Pennewaard",
    sourceUrl: "https://www.joodsmonument.nl/en/page/149894/meijer-leman",
    excerpt:
      "Meijer fut photographié dans les bras des siens avant que toute sa famille soit déportée.",
    biography: [
      "Meijer Leman naît le 1er décembre 1941 à Zwolle. Ses parents, Abraham Leman et Annette Henriët Kroonenberg, l’appellent au quotidien au sein d’un foyer où grandit déjà sa sœur Henderika, dite Rika.",
      "Le 2 octobre 1942, Annette et les deux enfants sont enfermés dans la baraque 39 de Westerbork. Le 7 novembre, ils sont transférés dans la baraque 55.",
      "Le 16 novembre, la famille est déportée dans un convoi de 761 personnes. À Cosel, cent hommes sont contraints de quitter le train pour le travail forcé ; Abraham pourrait avoir été parmi eux. Annette, Rika et Meijer poursuivent jusqu’à Auschwitz.",
      "Ils sont assassinés dès leur arrivée, le 19 novembre 1942. Meijer avait onze mois. Sur la photographie familiale, plusieurs bras le soutiennent encore : c’est ainsi que la mémoire doit le garder, porté et aimé.",
    ],
  },
  {
    slug: "serica-bianca-gabay",
    name: "Serica Bianca Gabay",
    firstName: "Serica Bianca",
    lastName: "Gabay",
    birthDate: "30 avril 1943",
    birthPlace: "Alkmaar, Pays-Bas",
    ageLabel: "9 mois",
    ageMonths: 9,
    country: "Pays-Bas",
    camp: "Westerbork",
    outcome: "Morte en déportation",
    deathDate: "28 février 1944",
    deathPlace: "Camp de Westerbork",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/serica_gabay_1_001.jpg",
    imageAlt: "Dina Gabay tenant sa fille Serica Bianca dans ses bras",
    imageCredit: "Collection de la famille Gabay-Smeer",
    sourceUrl: "https://www.joodsmonument.nl/en/page/28931/serica-bianca-gabay",
    excerpt:
      "Arrêtée avec sa mère après une dénonciation, Serica mourut à Westerbork à neuf mois.",
    biography: [
      "Serica Bianca Gabay naît le 30 avril 1943 à Alkmaar. Elle est la fille de Semaria Gabay et de Dina Smeer. Sa photographie la montre dans les bras de sa mère, tournée vers elle avec la confiance absolue d’un nourrisson.",
      "Le 12 janvier 1944, Serica et Dina sont arrêtées après une dénonciation et conduites au camp de Westerbork. Le bébé n’a pas encore neuf mois lorsqu’il entre dans ce lieu de transit.",
      "Serica meurt dans le camp le 28 février 1944. Les archives consultées ne précisent pas la cause de son décès. Elle est incinérée le 2 mars et son urne est déposée au cimetière portugais-israélite d’Ouderkerk aan de Amstel.",
      "Ses parents seront ensuite déportés. En préservant le visage de Serica, nous refusons que son existence soit réduite à une ligne dans un registre de camp.",
    ],
  },
  {
    slug: "jacob-de-mesquita",
    name: "Jacob de Mesquita",
    firstName: "Jacob",
    lastName: "de Mesquita",
    birthDate: "9 janvier 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "9 mois",
    ageMonths: 9,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassiné",
    deathDate: "15 octobre 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/jacob_de_mesquita.jpg",
    imageAlt: "Jacob de Mesquita photographié bébé, allongé et souriant",
    imageCredit: "Collection privée, Mémorial juif numérique",
    sourceUrl: "https://www.joodsmonument.nl/en/page/188096/jacob-de-mesquita",
    excerpt:
      "Jacob fut assassiné à Auschwitz avec sa mère Femmetje alors qu’il avait neuf mois.",
    biography: [
      "Jacob de Mesquita naît le 9 janvier 1942 à Amsterdam. Il est le fils d’Isaac de Mesquita, qui travaille comme couseur de sacs, et de Femmetje Leijden van Amstel. La famille vit Nieuwe Achtergracht.",
      "Avant la déportation, quelqu’un photographie Jacob allongé, les bras levés et le visage éclairé par un sourire. C’est un instant ordinaire de bonheur familial devenu un document irremplaçable.",
      "Jacob et sa mère sont déportés à Auschwitz, où ils sont assassinés le 15 octobre 1942. Isaac est maintenu en vie pour le travail forcé et meurt à Auschwitz le 28 février 1943.",
      "Jacob avait neuf mois. Il ne reste de sa courte présence qu’un nom, quelques dates et ce sourire qui oblige aujourd’hui encore à regarder l’injustice en face.",
    ],
  },
  {
    slug: "elise-sara-esther-de-vries",
    name: "Elise Sara Esther de Vries",
    firstName: "Elise Sara Esther",
    lastName: "de Vries",
    birthDate: "7 juin 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "11 mois",
    ageMonths: 11,
    country: "Pays-Bas",
    camp: "Westerbork · Sobibór",
    outcome: "Assassinée",
    deathDate: "28 mai 1943",
    deathPlace: "Sobibór",
    imageUrl:
      "https://www.joodsmonument.nl/image/2024/11/9/1709239328_4253058_8775104984397150942.jpg",
    imageAlt: "Elise Sara Esther de Vries photographiée bébé dans son berceau",
    imageCredit: "Unique photographie connue, collection privée",
    sourceUrl:
      "https://www.joodsmonument.nl/en/page/204404/elise-sara-esther-de-vries",
    excerpt:
      "Elise et ses parents furent assassinés ensemble à Sobibór, quelques jours avant son premier anniversaire.",
    biography: [
      "Elise Sara Esther de Vries naît le 7 juin 1942 à Amsterdam. Elle est la fille de Samuel Dirk de Vries et d’Esther Ancona, tous deux âgés de vingt-deux ans lorsque leur bébé vient au monde.",
      "La famille habite Foeliedwarsstraat. L’unique photographie connue d’Elise la montre dans son berceau, dressée sur ses petits bras comme si elle cherchait déjà à découvrir ce qui l’entoure.",
      "Elise est déportée avec ses parents vers Sobibór. Le convoi arrivé le 28 mai 1943 ne laisse aucun survivant. Samuel, Esther et leur fille sont assassinés le même jour.",
      "Elise aurait eu un an dix jours plus tard. Elle aurait dû recevoir des bougies et entendre ses proches prononcer son prénom ; à la place, une photographie porte seule la promesse de cet anniversaire jamais vécu.",
    ],
  },
  {
    slug: "sophia-leser",
    name: "Sophia Leser",
    firstName: "Sophia",
    lastName: "Leser",
    birthDate: "12 juin 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "1 an",
    ageMonths: 19,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassinée",
    deathDate: "28 janvier 1944",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/sophia_leser.jpg",
    imageAlt: "Sophia Leser photographiée bébé sur une couverture",
    imageCredit: "Collection familiale, Mémorial juif numérique",
    sourceUrl: "https://www.joodsmonument.nl/en/page/111265/sophia-leser",
    excerpt:
      "Arrachée au foyer d’enfants qui la protégeait, Sophia fut déportée à Auschwitz à dix-neuf mois.",
    biography: [
      "Sophia Leser naît le 12 juin 1942 à Amsterdam. Elle est la fille de David Leser et de Sara Sajet. Devant le danger, ses parents se séparent dans l’espoir de donner davantage de chances à leurs enfants.",
      "Sophia reste d’abord avec son père, puis est confiée à un foyer d’enfants d’Amsterdam. Les éducatrices y donnent aux plus petits l’attention et l’affection que leurs parents, traqués, ne peuvent plus leur apporter.",
      "Lors d’une rafle, les enfants du foyer sont emmenés. Sophia est conduite à Westerbork puis déportée vers Auschwitz. Elle est assassinée le 28 janvier 1944, le jour de l’arrivée de son convoi.",
      "Sa mère survit grâce à des médecins, des infirmières et des résistants qui la cachent. Dans la famille, Sophia demeure la petite sœur jamais oubliée, l’enfant qu’ils n’ont pas pu voir grandir mais dont le nom continue de vivre.",
    ],
  },
  {
    slug: "levie-swart",
    name: "Levie Swart",
    firstName: "Levie",
    lastName: "Swart",
    birthDate: "6 février 1942",
    birthPlace: "Amsterdam, Pays-Bas",
    ageLabel: "6 mois",
    ageMonths: 6,
    country: "Pays-Bas",
    camp: "Westerbork · Auschwitz-Birkenau",
    outcome: "Assassiné",
    deathDate: "23 août 1942",
    deathPlace: "Auschwitz-Birkenau",
    imageUrl:
      "https://www.joodsmonument.nl/image/2016/3/28/swart_levie_06_02_1942_en_frouwke_22_10_1939.jpg",
    imageAlt: "Levie Swart bébé allongé auprès de sa sœur Frouwke",
    imageCredit: "Yad Vashem, Base centrale des noms des victimes de la Shoah",
    sourceUrl: "https://www.joodsmonument.nl/en/page/33721/levie-swart",
    excerpt:
      "Levie ne rencontra probablement jamais son père, déjà déporté lorsqu’il vint au monde.",
    biography: [
      "Levie Swart naît le 6 février 1942 à Amsterdam. Son père Markus, marchand, a déjà été déporté lorsque l’enfant vient au monde. Sa mère Esther Sacksionie, qui travaille comme chiffonnière et confectionne des cravates, reste avec Levie et sa sœur Frouwke.",
      "La photographie conservée montre Frouwke assise près de son petit frère, allongé dans une longue robe de nourrisson. Leurs prénoms ont été ajoutés sur l’image pour qu’aucun doute ne subsiste sur leur identité.",
      "Esther, Frouwke et Levie sont déportés à Auschwitz. Tous trois y sont assassinés le 23 août 1942. Markus meurt lui aussi à Auschwitz quelques semaines plus tard.",
      "Levie avait six mois. Il n’avait pas encore appris à parler, mais son portrait dit aujourd’hui ce que les enfants ne pouvaient pas crier : ils avaient une famille, une place et le droit de vivre.",
    ],
  },
];

export function getPortrait(slug: string) {
  return portraits.find((portrait) => portrait.slug === slug);
}
