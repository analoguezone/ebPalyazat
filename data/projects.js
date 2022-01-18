import React from "react";

import {
  Box,
  Stack,
  HStack,
  Center,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

export default [
  {
    title: "Hild Villa",
    subtitle:
      "Az egykori Fácán Vendégfogadó (régi nevén Hild Villa) felújítása és bővítése rendezvényházzá 1500 m2 alapterületen",
    linkRoute: "projektek",
    link: "hild_villa",
    highlight: false,
    folyamatban: new Date() < new Date("2021/06/28"),
    cover: "/images/hild_villa-min.jpg",
    imageSources: [
      {
        src: "/images/hild_villa1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/hild_villa2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "Az egykori Fácán Vendégfogadó és üdülőtelep ingatlanja Budapest XII. kerületében, amely a Hunyad-oromtól nyugatra emelkedő domb nagy részét magában foglalja. A kiemelt műemléki értékű Hild József tervezte két szintes, klasszicista üdülő-szálló épülete 1856-ban épült. Az épület a 2000-es évektől használaton kívül volt, a karbantartás hiányából adódóan romos, életveszélyes állapotban maradt az utókorra. Első lépésként műemléki épületegyüttes pusztulásának megállítása és az eredeti állapot visszaállítása történt meg. Az épület helyreállítása több ütemben történik, kezdve a veszélytelenítéstől, az állagmegóváson át az újáépítésig. Ezt követi az épület teljes kivitelezése a második ütemben. Amellett, hogy egy ilyen kiemelt helyi jelentőségű műemléképület kivitelezése megtisztelő felelősség, a legnagyobb kihívást az épület végtelenül rossz projektkezdéskori állapota jelentette.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "GINOP-1.2.1-16-2017-00509 ",
    highlight: false,
    folyamatban: new Date() < new Date("2022/06/28"),
    cover: "/images/ginop_1-min.jpg",
  },
  {
    title: "GINOP-1.2.8-20-2020-02908  ",
    highlight: false,
    folyamatban: new Date() < new Date("2022/06/28"),
    cover: "/images/ginop_2-min.jpg",
  },

  {
    title: "Zugligeti Lóvasút",
    subtitle: "Műemlék épület korhű rekonstrukciója",
    linkRoute: "projektek",
    link: "lovasut",
    highlight: true,
    cover: "/images/lovasut-min.jpg",
    imageSources: [
      {
        src: "/images/lovasut1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/lovasut2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "Az műemléképületek felújításánál, mint a Zugligeti Lóvasút a legnagyobb kihívás minden esetben a korhű rekonstrukció jelenti, amely nagy precíztást, odafigyelést, valamint a történelem és tradicionális technikák ismeretét igényli, mivel az épületek eredeti állapotának visszaállítása az adott kort és annak értékeit reprezentálja. Ezek a munkálatok minden esetben a műemlékvédelmi felügyelet mellett és régész szakemberekkel szoros együttműködésben zajlanak.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Normafa kapu",
    subtitle: "A Normafa Kapu épületegyüttesének kialakítása",
    linkRoute: "projektek",
    link: "normafa_kapu",
    highlight: true,
    cover: "/images/normafa-min.jpg",
    imageSources: [
      {
        src: "/images/normafa1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/normafa2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A Normafa Kapu egy kerítés nélküli szabadon átjárható terület, mely a nagy zöld tér mellett magában foglalja a közkedvelt normafai műfüves tanuló-sípályát, a hozzá tartozó melegedőt, a tanösvényként is funkcionáló sétányt és a telek nyugati részére épített épületegyüttest is, melyben helyet kaptak a gazdasági funkciókat ellátó helyiségek. A töredezett geometriai forma és a faburkolat homogenitásával a helyszínhez illő, harmonikus természet közeliséget képvisel az általunk kivitelezett építmény.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Fácános, Béla Király út 59-61.",
    subtitle:
      "A Zugligeti Általános Iskola új épületének kialakítása, a volt Horthy Villa teljes rekonstrukciója",
    linkRoute: "projektek",
    link: "facanos_bela_kiraly",
    highlight: true,
    cover: "/images/facanos-min.jpg",
    imageSources: [
      {
        src: "/images/facanos1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/facanos2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A Zugligeti Általános Iskolánál a környéken megnövekedett gyermeklétszám következtében szükségessé vált az alsó és felső tagozat különválasztása, mely a szomszédos Fácán (volt Horthy Villa) területén vált lehetővé. Az épület felújítása, statikai megerősítése, a tanítási igényeknek megfelelő átalakítása és a hozzá kapcsolódó új épületszárny létrejötte összesen 1850m2-es belső tér bővülést eredményeztek az iskolának. ",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Szabó Ilonka utca társasház",
    subtitle: "Új építésű prémium társasház kivitelezése",
    linkRoute: "projektek",
    link: "szabo_ilonka_tarsashaz",
    highlight: false,
    cover: "/images/szaboilonka-min.jpg",
    imageSources: [
      {
        src: "/images/szaboilonka1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/szaboilonka2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A környezetébe illeszkedő, kortárs lakóingatlan parkoló szintjén 6 db gépkocsi befogadásra alkalmas parkolót, valamint kerékpár és motorkerékpár tároló helyeket alakítottunk ki. Az épület -1. szintjén 2 lakást és mellettük lakásonként egy-egy, kb. 25 m2-es tároló egységet helyeztünk el. Az épület tényleges földszintjén egy nagy alapterületű lakás került kialakításra, kertkapcsolattal. Az épület első emeletén kialakított lakás a földszintihez hasonló elrendezésű, teraszokkal motiválva a funkcionális teret. A tetőszinten 2 db kisebb lakás került kialakításra, mindkét lakás saját terasszal, illetve az épület hátsó, toronyszerű tömegében galériás kialakítással, és tetőterasszal, kilátással az épület alatt elterülő városra.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Hegyvidéki Kulturális Szalon",
    subtitle:
      "Megújuló energiával üzemelő, akadálymentesített közösségi épület építése.",
    linkRoute: "projektek",
    link: "hegyvideki_kulturalis_szalon",
    highlight: false,
    cover: "/images/torpeutca-min.jpg",
    imageSources: [
      {
        src: "/images/torpeutca1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/torpeutca2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A XII. kerületi lakosság közösségépítésére létrehozott 663m2 belső összterületű épületnél szem előtt kellett tartanunk, hogy a helyszín otthont tudjon adni a környezet adottságainak szempontjából vegyes igényekkel rendelkező programok, bármely korosztályra specializált, kis- és nagyobb csoportos, valamint generációkat átívelő kulturális és sporteseményeknek is. Fontos, hogy mivel az épület megújuló energiával üzemel közel nulla százalékos a károsanyag kibocsátása, emellett az akadálymentesített, és az okos technikák alkalmazásának köszönhetően pedig szinte minden teljesen automatizált és az épület multifunkciós megoldásokat biztosít.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Tamási Áron Általános Iskola és Két Tannyelvű Gimnázium",
    subtitle: "Iskolabővítési, bontási és felújítási munkák",
    linkRoute: "projektek",
    link: "tamasi_aron_altalanos_iskola",
    highlight: false,
    cover: "/images/tamasia-min.jpg",
    imageSources: [
      {
        src: "/images/tamasia1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/tamasia2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "Az Archibona csapata végezte el az iskola iránti megnövekedett érdeklődés következtében szükségessé váló épület bővítési munkálatokat. Az A épület felújítási, emeletráépítési és bővítési feladatainak ellátása mellett, az új 725m2 alapterületű E épületet is megépítettük az iskola területén. A munkálatok nagy odafigyelést igényeltek, mert mind a bontási, mind az építési munkát tanítási időben kellett elvégeznünk.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Egri Vár",
    subtitle: "Az Egri Vár épületének javítási, állagmegóvási munkái",
    linkRoute: "projektek",
    link: "egri_var",
    highlight: false,
    cover: "/images/egrivar-min.jpg",
    imageSources: [
      {
        src: "/images/egrivar1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/egrivar2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "Az Egri Vár hazánk egyik legnagyobb építészeti műemléke, kultúránk és történelmünk esszenciális erőssége. Munkánk során a várfalakról eltávolítottuk a romboló növényzetet, elvégeztük a teljeskörű felülettisztításukat, majd felmértük és kiviteleztük a javítási munkálatokat. Az Egri Vár ellenállt a török ágyúknak, és a századok viharának – az Archibona pedig segített, hogy az idő múlásának ma is ellenálljon.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Rajk Villa",
    subtitle:
      "Az egykori Rajk Villa teljeskörű műemléki rekonstrukciója új közösségi",
    linkRoute: "projektek",
    link: "rajk_villa",
    highlight: true,
    cover: "/images/rajkvilla-min.jpg",
    imageSources: [
      {
        src: "/images/rajkvilla1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/rajkvilla2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A Rajk Villa klasszikus műemléki felújítása és fémlemez fedése által került kialakításra a látogatóközpont fogadó épülete. Az ingatlan belsejében recepciót, kiállítóteret és ajándékboltot is kialakítottunk, ahol egy finom kávét is fogyaszthatnak a betérők. A villaépület és a főépület közötti részen földfeltöltéssel vízszintesre kialakított térrel az épületek akadálymentesítése mellett, kitűnő szociális találkozópontot teremtettünk.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Deák Téri Aluljáró",
    subtitle:
      "Az aluljáró funkcionális és modern ügyfélcentrumának tervezése és kivitelezése",
    linkRoute: "projektek",
    link: "deak_teri_aluljaro",
    highlight: false,
    cover: "/images/deakter-min.jpg",
    imageSources: [
      {
        src: "/images/deakter1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/deakter2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A BKK Ügyfélcentrum kivitelezése során pultrendszer mögötti pénztárhelyeket, intelligens sorszámhívó rendszert és az ott működő múzeum új üvegátjáróját is kialakítottuk. Az ügyfélszolgálati tér helyének megteremtését az elektromos kapcsolóhelységek és a múzeum előterének átalakításával biztosítottuk. A nagy forgalmú Deák Ferenc téri aluljáró lokációjából adódóan a munkálatokat javarészt éjszakai munkavégzéssel és a helyszín folyamatos, biztonságos és zavartalan működésének biztosítása mellett végeztük.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Ferenc Körúti Társasház",
    subtitle:
      "Társasház bővítése, prémium otthonok és penthouse lakások kialakítása",
    linkRoute: "projektek",
    link: "ferenc_koruti_tarsashaz",
    highlight: false,
    cover: "/images/f7-min.jpg",
    imageSources: [
      {
        src: "/images/f71-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/f72-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "Az Archibona első saját beruházási projektjében a Ferenc krt. 7. szám alatti társasház kivitelezését hajtottuk végre. A meglévő 2 szintre a tető lebontását követően a forgalmas körúti lokáció okozta kihívásokat leküzdve 4 új emeletet építettünk, amelyeken 16 lakás került kialakításra. A legfelső szinten elhelyezkedő, kimagasló funkcionalitással megtervezett nagyvárosi penthouse lakásokból lenyűgöző panoráma tárul elénk a város legszebb pontjaira: a Dunára, a Gellérthegyre, a Citadellára és a Budai hegyekre.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
  {
    title: "Törpe utca Kulturális központ",
    subtitle: "Kulturális központ építése a Hegyvidék szívében",
    linkRoute: "projektek",
    link: "torpe_utca",
    highlight: true,
    cover: "/images/torpeutca-min.jpg",
    imageSources: [
      {
        src: "/images/torpeutca1-min.jpg",
        title: "kep alattti szoveg",
      },
      {
        src: "/images/torpeutca2-min.jpg",
        title: "kep alattti szoveg",
      },
    ],
    gallerysources: [],
    description:
      "A Kulturális Szalon, amely elsősorban a XII. kerület lakóit várja változatos kulturális és közösségi programokkal. A Szalon legfőbb célja a közösségteremtés, emellett helyet ad tudományos előadásoknak, közéleti beszélgetéseknek, zenei, irodalmi esteknek, kiállításoknak, egészségvédő, egészségmegőrző kluboknak és egyéb szórakozási és időtöltési lehetőségeknek. A Szalon a Hegyvidék egyik kiemelt kulturális, alapvetően nem profitorientált intézménye. Közművelődési feladatokat lát el, tevékenysége szempontjából kiemelten fontos a tudományos és kulturális értékközvetítés, a kerületi hagyományápolás, a generációk közötti kapcsolatépítés, a közösségépítés, a civil szervezetek munkájának segítése. A kialakított Kulturális Szalon belső összterülete 663 m2, közel harmincezer tégla díszíti, minden szeglete az igényeknek megfelelően lett kialakítva. A kerületben fontos szerepet kap a fenntarthatóság, így a Törpe utcai ingatlan is a környezettudatosságot szem előtt tartva készült el. Az épületnek közel nulla a károsanyag-kibocsátása, megújuló energiával üzemel, tele van okosmegoldásokkal, akadálymentesített. A tágas terek, a hatalmas üvegfelületek, a stílusos építészeti és arculati megoldások, valamint a modern felszereltség minden elvárást kielégítenek. A kivitelezési munkákat nagyban nehezítette, hogy hely szűke miatt toronydaru telepítésére nem volt lehetőség, így a teljes kivitelezést autódaru segítségével került megvalósításra. A szomszédos épület közelsége miatt olyan speciális technológiák kerültek megvalósításra, mint a lőttbetonos munkatérmegtámasztás, illetve a közös telekhatáron lévő fa miatti mikrocölöpös munkatér határolás.",
    content: (lang) => {
      // ha custom content is van
      switch (lang) {
        case "en":
          return <div></div>;
        case "ru":
          return <div></div>;
        default:
          return <div></div>;
      }
    },
  },
];
