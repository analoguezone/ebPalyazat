import React, { useEffect, useState } from "react";
import VisibilityControl from "../components/VisibilityControl/VisibilityControl.jsx";
// import Link from "next/link";
import MaxWidth from "../components/MaxWidth";
import ContentBlockContainer from "../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";
import products from "./productData";

import { NextSeo } from "next-seo";

import { useRouter } from "next/router";
import { withTranslation } from "../server/i18n";
import ImageGallery from "react-image-gallery";
import Cart from "../components/Ecwid/Cart";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  HStack,
  Center,
  VStack,
  Text,
  Divider,
  Img,
  Button,
  Heading,
  Grid,
  GridItem,
  List,
  Link,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

const SLink = styled(Link)`
  color: #e20074;
`;

const Warning = styled(Heading)`
  font-weight: 900;
  color: red;
  padding-bottom: 10px;
`;

import { MdCheckCircle } from "react-icons/md";
const blogContent = {
  ajanlott_biztonsagi_gyakorlatok_kriptotarcak_eseten: (props) => {
    const { t, i18n } = props;
    return (
      <VStack
        maxW="1400px"
        id="details"
        p={["20px 20px", "20px 10px", "50px 30px", "50px 50px"]}
        alignItems={"flex-start"}
      >
        <Heading
          textAlign="center"
          width="100%"
          fontWeight="900"
          // color="#e20074"
          p={["20px 0px", "50px 0px"]}
          fontSize={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
          lineHeight={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
        >
          {t("A 4 legjobb biztonsági gyakorlat kripto tárca esetén ")}
        </Heading>
        <Heading fontSize="md" fontWeight="900">
          1. Tárolja biztonságos helyen a visszaállító kifejezését
          (seed-phrase):
        </Heading>
        <Text p="10px 0">
          A visszaállító kifejezés -a privát kulcs másik formátuma - az egyetlen
          bizonyíték a kriptoeszközei tulajdonjogára. Ha egyszer elveszett,
          senki-beleértve a SafePal csapatát is- sem tud segíteni az eszközeinek
          visszaszerzésében! Kérjük, tárolja a kifejezést offline és biztonságos
          helyen, például széfben.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          2. Mindig erős PIN kódot állítson be:
        </Heading>
        <Text p="10px 0">
          Az S1 hardvertárcán található PIN-kódot hitelesítésként használjuk,
          amikor egy tranzakciót jóvá kell hagynia és alá kell írnia. Kérjük, ne
          használjon gyenge PIN kódokat, például „123456” vagy „666666”. Inkább
          próbáljon meg összetett és erős PIN-kódot beállítani.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          3. Állítsa vissza (reset) a pénztárcát, amikor abbahagyja a készülék
          használatát:
        </Heading>
        <Text p="10px 0">
          Ha úgy dönt, hogy egy időre felhagy a SafePal pénztárca használatával,
          ne felejtse el törölni az összes adatát és alaphelyzetbe állítani a
          pénztárcát (SafePal device--Settings--Reset wallet).
          <br /> Ne aggódjon a törlés következtében pénze nem vész el! <br /> A
          megfelelő visszaállító (seed-phrase) kifejezéssel, adatai bármikor
          visszaállíthatóak. Ezért kiemelten fontos, hogy ne felejtsen el
          biztonsági másolatot készíteni a visszaállító kifejezésről. A
          biztonségi másolat lehet egy kézírásos jegyzet, de javasoljuk, hogy
          haszáljon a fizikai behatásoknak is ellenálló{" "}
          <SLink href="/p/safepal-cypher">
            Cypher kazettát <ExternalLinkIcon mx="2px" />
          </SLink>{" "}
          .
        </Text>
        <Warning fontSize="md">
          Semmi esetre se rögzítse digitálisan, illetve ne nyomtassa ki a
          helyreállító kifejezést!
        </Warning>
        <Heading fontSize="md" fontWeight="900">
          4. Tartsa titokban kriptoeszközeinek értékét:
        </Heading>
        <Text p="10px 0">
          Mindig jobb titokban tartani és senkinek sem elmondani, hogy mennyi
          eszközzel rendelkezik. Különösen óvatosnak kell lennie, amikor a
          közösségi hálózatokon keresztül beszél barátaival a kriptoeszközeiről.
          A hackerek különös figyelmet fordíthatnak az ilyen információkra, így
          óvatlan kommunikáció során az Ön fiókja is célponttá válhat.
        </Text>
      </VStack>
    );
  },
  kriptovalutak_es_bitcoin_biztonsagos_tarolasa: (props) => {
    const { t, i18n } = props;
    return (
      <VStack
        maxW="1400px"
        id="details"
        p={["20px 20px", "20px 10px", "50px 30px", "50px 50px"]}
        alignItems={"flex-start"}
      >
        <Text p="10px 0">
          A Bitcoin-, mint a többi jelentős kriptovaluta -nyilvános kulcsú
          kriptográfiára épül. A kriptográfiai rendszer kulcspárokat használ,
          ezek a kulcsok nyilvános - (Public Key) és magán kulcsokból (Private
          Key) állnak. A nyilvános kulcs, ahogy a neve is mutatja nyilvánosan
          ismert és nélkülözhetetlen az azonosításhoz. A magán kulcs nem
          nyilvános, a tranzakciók hitelesítésére és titkosítására használják.
        </Text>
        <Text p="10px 0">
          Az olyan kriptovaluták, mint a Bitcoin és az Ethereum
          decentralizáltak, vagyis nincs bank vagy bármely más intézmény
          mögötte, amely a digitális pénzét tárolná. Ehelyett a titkosítást a
          számítógépek hálózatán keresztül osztják el egy blokkláncnak nevezett
          technológia segítségével. Ezek a kriptoblokkláncok nyitottak, így
          minden nyilvános kulcs és tranzakciós információ bárki számára
          elérhető.
        </Text>
        <Text p="10px 0">
          Bonyolult matematikai számításokon keresztül a nyilvános kulcsot
          valójában az Ön privát kulcsa generálja, ami egy párossá teszi őket.
          Amikor tranzakciót kezdeményez, akkor a privát kulcsával igazolja
          (hitelesíti), hogy valóban Ön jogosult a műveletre, mert ezeket a
          tranzakciókat csak a privát kulcs birtokosa hajthatja végre. Annak
          ellenére, hogy minden nyilvános, névtelen is, mert a kriptovaluta
          használatához nem kell nevet, címet vagy bármilyen más információt
          megadnia. Tehát a privát kulcs ismerete nélkül a tranzakciók nem
          hajthatóak végre. Ez végeredményben a privát kulcsból származtatott
          számlákhoz rendelt egyenlegek feletti rendelkezési jogot jelenti.
        </Text>
        <Text p="10px 0">
          A privát kulcs elvesztése az adott kulcshoz rendelt vagyonunk
          elvesztését jelenti! Nincs mód a visszaszerzésre! Ezért kiemelten
          fontos, hogy gondoskodjunk privát kulcsaink biztonságáról!
        </Text>
        <Text p="10px 0">
          A privát kulcsokat vagy az ahhoz tartozó seed-phrase-t SOHA, SEMMILYEN
          KÖRÜLMÉNYEK KÖZT NE ADJUK KI!
        </Text>
        <Heading
          textAlign="center"
          width="100%"
          fontWeight="900"
          // color="#e20074"
          p={["20px 0px", "50px 0px"]}
          fontSize={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
          lineHeight={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
        >
          {t("Hogyan tárolja a privát kulcsait?")}
        </Heading>
        <Text p="10px 0">A privát kulcsok megőrzésének 3 fő módja van:</Text>
        <Heading fontSize="md" fontWeight="900">
          Online:
        </Heading>
        <Text p="10px 0">
          A kriptovaluták vásárlásához létrehozott fiókunkhoz (Coinbase,
          Binance), a szolgáltatók az egyenlegünket a számunkra generált privát
          kulcsokból származtatott számláinkhoz rendelik. Ebben az esetben az
          ott tárolt egyenlegünk a szolgáltatás biztonságától és/vagy a
          bejelentkezési jelszavunk, hitelesítési módok biztonságától függ. Ez a
          módszer hasonlít a legjobban a hagyományos bankokhoz.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          Saját felügyelet, szoftveresen:
        </Heading>
        <Text p="10px 0">
          Nem szükséges a kripto vagyonunkat a kereskedelmi szolgáltatók
          (exchange) felügyelete alatt tartani, mert az ott tárolt eszközeinket
          tranzakciók segítségével elküldhetjük egy saját magunk által felügyelt
          privát kulcsból származtatott szoftveres tárca címére. Ilyen
          szoftverek például Metamask, Trust Wallet, Exodus, stb… Ebben az
          esetben a privát kulcsunk biztonsága a számítógépünkhöz történő online
          vagy offline/fizikai hozzáférés biztonságán múlik. Veszélyt jelentenek
          a kriptoszámlákra a malwar-ek, vagyis a kulcsokra vadászó vírusok és a
          jogosulatlan hozzáférések. Az internetre kapcsolt számítógépeken
          szoftveresen generált privát kulcsok biztonságával kapcsolatban soha
          sem lehetünk maximálisan nyugodtak. Napi szinten hallhatóak szoftveres
          tárca hackelésekről szóló esetek, melyek többnyire felhasználói hibák
          (social engineering) kihasználásán alapulnak.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          Hardveres tárcák:
        </Heading>
        <Text p="10px 0">
          A hardveres tárcák lényegében olyan eszközök, amik a privát kulcs
          tárolását és a tranzakciók hitelesítésének biztonságos megoldását
          szolgálják. Ahogy azt korábban mér részleteztük, a pénzünk a
          blokkláncon és nem a tárcánkban van tárolva.
        </Text>
        <Text p="10px 0">
          Kulcsunkat tárolhatjuk olyan számítógépen, amely nem csatlakozik az
          internethez, papíron vagy úgynevezett Cypher segítségével. A hardveres
          megoldások biztonsága esetenként kényelmi kompromisszummal jár. A
          kompromisszum mértékét nagyban befolyásolhatja a hardver jellege és
          annak védelmi mechanizmusa.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          Mi a legbiztonságosabb tárolása a kriptovalutának?
        </Heading>
        <Text p="10px 0">
          A legbiztonságosabb módja a privát kulcsunk felügyeletére, ha azt
          olyan eszközön hozzuk létre és tároljuk, ami nem kapcsolódik az
          internethez és soha nem is reprodukáljuk, fotózzuk azt online
          eszközeinkkel. Ebben az esetben az általunk felügyelt privát kulcsunk
          az internetről érkező fenyegetésekkel szemben 100%-os biztonságban
          van!
        </Text>{" "}
        <Text p="10px 0">
          A SafePal S1 a legtöbb hardvertárcával ellentétben teljesen offline, a
          tranzakciók aláírásához nem kapcsolódik semmilyen módon a
          számítógéphez(Air-gapped Signing). Ennek okán teljesen izolált és
          nincs mód a kártékony kódoknak sérülékenységet keresni.
        </Text>
        <Text p="10px 0">
          Eltulajdonítás vagy elvesztés esetén -a fizikai behatások ellen a
          SafePal S1 többszintű biztonsági réteggel és különféle érzékelőkkel
          rendelkezik. A privát kulcs megszerzésére tett kísérletek esetén
          önmegsemmisítő mechanizmusa lép életbe, mellyel töröl minden tárolt
          adatot magáról.
        </Text>
      </VStack>
    );
  },
  mi_az_a_safepal_cypher: (props) => {
    const { t, i18n } = props;
    return (
      <VStack
        maxW="1400px"
        id="details"
        p={["20px 20px", "20px 10px", "50px 30px", "50px 50px"]}
        alignItems={"flex-start"}
      >
        <Text p="10px 0">
          A SafePal Cypher egy fém tároló, amely 304-es rozsdamentes acélból
          készül, hogy megóvja a visszaállító kódot. A szerkezet manuálisan
          összeszerelhető és rendkívül könnyen kezelhető. A SafePal Cypher
          lemezek mindkét oldalán 12, 18 vagy 24 szó tárolható, a csomag továbbá
          egy 288 betűből álló készletet is tartalmaz.
        </Text>
        <Heading
          textAlign="center"
          width="100%"
          fontWeight="900"
          // color="#e20074"
          p={["20px 0px", "50px 0px"]}
          fontSize={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
          lineHeight={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
        >
          Fontos tippek a SafePal titkosító használata előtt
        </Heading>
        <Text p="10px 0">
          A SafePal Cypher egy olyan eszköz, amely megvédi a visszaállító kódot
          tűz, víz és egyéb fizikai behatások ellen. A visszaállító kód az Ön
          kripovaluta számla tulajdonjogának egyetlen bizonyítéka. Amint valaki
          megszerzi az Ön visszaállító kódját vagy privát kulcsát, gyakorlatilag
          teljes mértékben átveheti az irányítást az eszközei felett. Ezért,
          miután rögzítette az visszaállító kódját a SafePal Cypher-re, ne
          felejtse el azt, és a fennmaradó tartozékokat biztonságos helyen
          tárolni!
        </Text>
        <Heading
          textAlign="center"
          width="100%"
          fontWeight="900"
          // color="#e20074"
          p={["20px 0px", "50px 0px"]}
          fontSize={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
          lineHeight={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
        >
          A SafePal Cypher beállítása
        </Heading>
        <Heading fontSize="md" fontWeight="900">
          1:
        </Heading>
        <Text p="10px 0">
          Csúsztassa az óramutató járásával ellentétes irányba a SafePal Cyphert
          a megnyitáshoz
        </Text>
        <Heading fontSize="md" fontWeight="900">
          2:
        </Heading>
        <Text p="10px 0">
          A dobozban található csavarhúzóval csavarja ki az alábbi képen látható
          öt csavart és helyezze be a betűlapokat a megfelelő nyílásokba.
        </Text>
        <Heading fontSize="md" fontWeight="900">
          3:
        </Heading>
        <Text p="10px 0">
          Keresse meg a megfelelő rozsdamentes acél betűlapkákat és helyezze
          őket a megfelelő nyílásokba a saját visszaállító kódja alapján. Szúrja
          be minden szó első négy betűjét. (Ha 3 betűs szóval találkozik az üres
          helyet kitöltheti a betűlapka üres oldalával (hátul). A „b” és „q”,
          „d” és „p”, „n” és „u” karakterblokkok felcserélhetően használhatók.
          Kérjük, a fel nem használt betűket is tartsa biztonságos helyen, mert
          mások kitalálhatják, hogy melyik betűket használják és visszafejthetik
          az helyreállító kifejezést!
        </Text>
        <Heading
          textAlign="center"
          width="100%"
          fontWeight="900"
          // color="#e20074"
          p={["20px 0px", "50px 0px"]}
          fontSize={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
          lineHeight={["1.5rem", "1.5rem", "2.2rem", "2.2rem"]}
        >
          Gyakran ismételt kérdések
        </Heading>
        <Heading fontSize="md" fontWeight="900">
          Miért van minden szónak csak négy karakter helye?
        </Heading>
        <Text p="10px 0">
          A SafePal Cypher a BIP39 Mnemonic Phrase szabványon alapul, amelyet a
          helyreállító kulcsok generálására használnak. Ez egy 2048 angol szóból
          álló speciális lista, amelyet gondosan összeállítottak, hogy a 2048
          emlékeztető szó mindegyike azonosítható legyen az első négy betűje
          alapján. Ez az oka annak, hogy a SafePal Cypher csak négybetűs
          nyílásokkal rendelkezik. Ha egy szó csak három karakterből áll,
          használja a betűlapka hátulját a szóköz kitöltéséhez.
        </Text>{" "}
        <Heading fontSize="md" fontWeight="900">
          Hogyan kérhetem le a teljes szót az első négy betű alapján?
        </Heading>
        <Text p="10px 0">
          A SafePal Cypher minden üres nyílása 4 betűhelyre helyezhető. A BIP39
          szerint a hereállító szavak listájában minden egyes elem első 4 betűje
          különbözik. Ez azt jelenti, hogy mát négy betű is egyértelműen
          beazonosítja az adott kifejezést. Ha 3 betűs emlékeztetővel találkozik
          az üres helyet kitöltheti a betűlapka üres oldalával (hátul). A
          2048-as mnemonikus listát itt tekintheti meg.{" "}
          <Link
            target="_blank"
            href={
              "https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt"
            }
          >
            (Link)
          </Link>
        </Text>{" "}
        <Heading fontSize="md" fontWeight="900">
          Mit tegyek, ha a megadott betűk nem elegendőek?
        </Heading>
        <Text p="10px 0">
          A SafePal Cypher által biztosított betűcsempék számát a rendszer az
          egyes betűk előfordulásának valószínűsége alapján számítja ki. Kis
          valószínűséggel azonban egy bizonyos betű nem elég. A problémát a
          következő módszerekkel oldhatja meg: A „b” és „q”, „d” és „p”, „n” és
          „u” karakterblokkok felcserélhetően használhatók. Cserélje fel ezeket
          a betűket, és ellenőrizze, hogy a probléma megoldódott-e. Vagy Hozzon
          létre új emlékeztetőt és azt állítsa össze. (Annak a valószínűsége,
          hogy a karakterblokk ismét nem lesz elég, szinte nulla.)
        </Text>
        <Heading fontSize="md" fontWeight="900">
          Milyen meleget tud elviselni a SafePal Cypher?
        </Heading>
        <Text p="10px 0">
          A SafePal Cypher 304-es rozsdamentes acélból készül. Az anyag
          1400-1450°C hőmérsékletig ellenáll, így hatékonyan tűzálló.
        </Text>
      </VStack>
    );
  },
};

export default blogContent;

// <Heading
//   textAlign="center"
//   fontWeight="900"
//   // color="#e20074"
//   p={["20px 50px", "100px 50px"]}
//   fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
//   lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
// >
//   {t("Az első hardvertárca a Binance finanszírozásval")}
// </Heading>;
