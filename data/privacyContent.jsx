import React from "react";
import Layout from "../components/MyLayout";
import Link from "next/link";
import { withTranslation } from "../server/i18n";
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
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { NextSeo } from "next-seo";

export default withTranslation("common")(function privacyData(props) {
  return (
    <Layout {...props}>
      <>

        <NextSeo
          title="Electronic Beats | Szelektor 2022"
          description="Electronic Beats tehetségkutató pályázat"
          openGraph={{
            title: "Szelektor| Electronic Beats",
            description: "Electronic Beats tehetségkutató pályázat",
            images: [
              {
                url: `/images/eb/electronicbeats-12.jpg`,
                width: 1280,
                height: 634,
                alt: "Electronic Beats | Szelektor 2022",
              },
            ],
            site_name: "Electronic Beats",
          }}
        />
        <div
          style={{
            margin: "50px auto",
            width: "100vw",
            backgroundColor: "#323232",
            color: "white",
          }}
        >
          <Box
            padding={["50px 25px", "50px"]}
            margin="50px auto"
            width={["100vw"]}
            maxW="1280px"
            backgroundColor="#323232"
            color="white"
          >
            <Link href="/">
              <div
                style={{
                  paddingBottom: "50px",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >{`< vissza`}</div>
            </Link>
            <Heading
              fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["2rem", "3rem", "4rem", "4rem"]}
              lineHeight={["2rem", "3rem", "4rem", "4rem"]}
              p={["40px 0vw", "60px 0vw"]}
            >
              Adatkezelésre vonatkozó tájékoztatás
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázattal kapcsolatos adatkezelések tekintetében a Szervező
              (azaz a Magyar Telekom Nyrt.) minősül adatkezelőnek. A Pályázattal
              kapcsolatos adatkezelésre a hatályos jogszabályokkal összhangban, a
              jelen Szabályzat rendelkezései szerint kerül sor. Az adatkezelő a
              Pályázat során megadott személyes adatokat kizárólag a jelen
              Szabályzatban meghatározott célokra kezeli.
            </Text>{" "}
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A személyes adatok tervezett kezelésének célja, az adatkezelés
              jogalapja, a kezelt személyes adatok köre, az adatkezelés
              időtartama:
            </Text>{" "}
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={1}
              fontSize={["md", "lg", "xl", "xl"]}

            >
              <GridItem colSpan={1} bg="#383838">
                <Text p="2">Az adatkezelés célja</Text>
              </GridItem>
              <GridItem colSpan={1} bg="#383838">
                <Text p="2">Az adatkezelés jogalapja </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#383838">
                <Text p="2">A kezelt személyes adatok köre </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#383838">
                <Text p="2">Az adatkezelés időtartama </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A Pályázatban való részvétel regisztrálása, a részvételi
                  feltételek ellenőrzése, a Pályázat lebonyolítása.
                </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A résztvevők hozzájárulása Általános Adatvédelmi Rendelet, 6.
                  cikk (1) bekezdés a) pontja).
                </Text>
                <Text p="2">
                  A hozzájárulás bármikor visszavonható. A hozzájárulás
                  visszavonása nem érinti a hozzájáruláson alapuló, a visszavonás
                  előtti adatkezelés jogszerűségét.
                </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2"> Név </Text>
                <Text p="2"> Telefonszám</Text>
                <Text p="2"> E-mail cím</Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A hozzájárulás visszavonása esetén a személyes adatok törlésre
                  kerülnek (a regisztráció törlésével a Pályázatban való részvétel
                  egyidejűleg automatikusan megszűnik).
                </Text>
                <Text p="2">
                  A személyes adatok a Pályázat lezárását követő 3 hónapon belül
                  törlésre kerülnek.
                </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A Pályázatban való részvétel regisztrálása, a részvételi
                  feltételek ellenőrzése, a Pályázat lebonyolítása 18. életévét be
                  nem töltött személy esetén.
                </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A résztvevők hozzájárulása Általános Adatvédelmi Rendelet, 6.
                  cikk (1) bekezdés a) pontja).
                  <Text p="2">
                    A hozzájárulás bármikor visszavonható. A hozzájárulás
                    visszavonása nem érinti a hozzájáruláson alapuló, a
                    visszavonás előtti adatkezelés jogszerűségét.
                  </Text>
                </Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">Név</Text>
                <Text p="2">Telefonszám</Text>
                <Text p="2">E-mail cím</Text>
                <Text p="2">Életkor</Text>
                <Text p="2">Törvényes képviselő neve</Text>
                <Text p="2">Törvényes képviselő adatai</Text>
              </GridItem>
              <GridItem colSpan={1} bg="#282828">
                <Text p="2">
                  A hozzájárulás visszavonása esetén a személyes adatok törlésre
                  kerülnek (a regisztráció törlésével a Pályázatban való részvétel
                  egyidejűleg automatikusan megszűnik). A személyes adatok a
                  Pályázat lezárását követő 3 hónapon belül törlésre kerülnek.
                </Text>
              </GridItem>
            </Grid>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó a Pályázatban való részvétellel elismeri és elfogadja,
              hogy a Pályázat során történő adatkezelés célját megértette. A
              Pályázók személyes adatait a Szervező az adatfeldolgozó Art Village
              Kft-nek adja kizárólag tovább. A személyes adatok harmadik országba
              továbbítására nem kerül sor.
            </Text>{" "}
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Adatfeldolgozóként eljár: Art Village Kft. (1082 Budapest,
              Vajdahunyad utca 4. ASZ: 12719956-2-42)
            </Text>{" "}
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Adatbiztonság:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Szervező megfelelő intézkedésekkel védi a Pályázó személyes
              adatait különösen a jogosulatlan hozzáférés, megváltoztatás,
              továbbítás, nyilvánosságra hozatal, törlés vagy megsemmisítés,
              valamint a véletlen megsemmisülés és sérülés, továbbá az alkalmazott
              technika megváltozásából fakadó hozzáférhetetlenné válás ellen. A
              Pályázó személyes adatainak a védelmét a lehető legmagasabb fokon
              kívánja biztosítani, köteles minden olyan védelmi intézkedést
              megtenni, amelyeknek a költség/ráfordítás igénye és az ezáltal
              biztosítani kívánt védelmi szint egymással arányban van.
            </Text>{" "}
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Az adatkezeléssel kapcsolatos jogok:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó a hozzájárulását bármikor visszavonhatja. A hozzájárulás
              visszavonása nem érinti a hozzájáruláson alapuló, a visszavonás
              előtti adatkezelés jogszerűségét.
            </Text>{" "}
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              A Pályázót megilletik az alábbi adatkezeléssel kapcsolatos jogok:
            </Heading>
            <UnorderedList>
              <ListItem>
                <Text>
                  a) a rá vonatkozó személyes adatokhoz való hozzáférés joga,
                </Text>
              </ListItem>
              <ListItem>
                <Text>b) személyes adatainak helyesbítésének joga,</Text>
              </ListItem>
              <ListItem>
                <Text>
                  c) személyes adatainak - a kötelező adatkezelés kivételével -
                  törlésére vagy kezelésének korlátozására vonatkozó jog,
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  d) a jogszabályban meghatározott feltételek fennállása esetén,
                  az adathordozhatósághoz való jog, valamint
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  e) jogos érdeken alapuló adatkezelés esetén, a tiltakozás joga.
                </Text>
              </ListItem>
            </UnorderedList>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Hozzáférés joga:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó jogosult arra, hogy a Szervezőtől visszajelzést kapjon
              arra vonatkozóan, hogy személyes adatainak kezelése folyamatban
              van-e, és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy
              a személyes adatokhoz hozzáférést kapjon.
            </Text>{" "}
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Helyesbítéshez való jog:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó jogosult arra, hogy kérésére a Szervező indokolatlan
              késedelem nélkül helyesbítse a rá vonatkozó pontatlan személyes
              adatokat.
            </Text>{" "}
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Törléshez való jog:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó jogosult arra, hogy kérésére a Szervező indokolatlan
              késedelem nélkül törölje a rá vonatkozó személyes adatokat, a
              Szervező pedig köteles arra, hogy a Pályázóra vonatkozó személyes
              adatokat indokolatlan késedelem nélkül törölje, ha a
            </Text>{" "}
            <UnorderedList>
              <ListItem>
                <Text>a) személyes adat kezelése jogellenes;</Text>
              </ListItem>
              <ListItem>
                <Text>
                  b) a Pályázó ezt kéri (hozzájárulás visszavonására tekintettel);
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  c) az hiányos vagy téves - és ez az állapot jogszerűen nem
                  orvosolható -, feltéve, hogy a törlést törvény nem zárja ki;
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  d) az adatkezelés célja megszűnt, vagy az adatok tárolásának
                  törvényben meghatározott határideje lejárt;
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  e) azt a bíróság vagy a Nemzeti Adatvédelmi és
                  Információszabadság Hatóság elrendelte.
                </Text>
              </ListItem>
            </UnorderedList>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázatban résztvevő személyes adatainak a Pályázó kérésére
              történő törlése esetén, a Pályázó Pályázatban való részvétele ezzel
              egyidejűleg automatikusan megszűnik.
            </Text>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Az adatkezelés korlátozásához való jog:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó jogosult arra, hogy kérésére az Adatkezelő korlátozza az
              adatkezelést, ha az Általános Adatvédelmi Rendelet 18. cikk (1)
              bekezdésében foglaltak valamelyike teljesül. Ha az adatkezelés
              korlátozás alá esik, az ilyen személyes adatokat a tárolás
              kivételével csak az Érintett hozzájárulásával, vagy jogi igények
              előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más
              természetes vagy jogi személy jogainak védelme érdekében, vagy az
              Unió, illetve valamely tagállam fontos közérdekéből lehet kezelni.
            </Text>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Adathordozhatósághoz való jog:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó – az Általános Adatvédelmi Rendelet 20. cikkében szereplő
              feltételek teljesülése esetén - továbbá jogosult arra, hogy a rá
              vonatkozó, általa az Adatkezelő rendelkezésére bocsátott személyes
              adatokat tagolt, széles körben használt, géppel olvasható
              formátumban megkapja, továbbá jogosult arra, hogy ezeket az adatokat
              egy másik adatkezelőnek továbbítsa anélkül, hogy ezt akadályozná az
              az adatkezelő, amelynek a személyes adatokat a rendelkezésére
              bocsátotta.
            </Text>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Tiltakozáshoz való jog:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Az Érintett jogosult arra, hogy a saját helyzetével kapcsolatos
              okokból bármikor tiltakozzon személyes adatainak a 6. cikk (1)
              bekezdésének f) pontján alapuló kezelése ellen, ideértve az említett
              rendelkezéseken alapuló profilalkotást is. Ebben az esetben az
              adatkezelő a személyes adatokat nem kezelheti tovább, kivéve, ha az
              Adatkezelő bizonyítja, hogy az adatkezelést olyan kényszerítő erejű
              jogos okok indokolják, amelyek elsőbbséget élveznek az érintett
              érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi
              igények előterjesztéséhez, érvényesítéséhez vagy védelméhez
              kapcsolódnak.
            </Text>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              A joggyakorlásra vonatkozó rendelkezések:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Szervező indokolatlan késedelem nélkül, de legfeljebb a kérelem
              beérkezésétől számított egy hónapon belül tájékoztatja a Pályázót a
              kérelme nyomán hozott intézkedésekről. Ha a Pályázó elektronikus
              úton nyújtotta be a kérelmet, a tájékoztatást lehetőség szerint
              elektronikus úton kell megadni, kivéve, ha a Pályázó azt másként
              kéri. A Szervező a Pályázó részére a tájékoztatást, hozzáférést és
              egyéb intézkedést díjmentesen biztosítja. A kérelmeket az alábbi
              elérhetőségeken terjeszthetik elő a Pályázók: event@telekom.hu vagy
              Magyar Telekom, 1097 Budapest, Könyves Kálmán krt. 36.
            </Text>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Ha a Szervezőnek megalapozott kétségei vannak a kérelmet benyújtó
              természetes személy kilétével kapcsolatban, további, a Pályázó
              személyazonosságának megerősítéséhez szükséges információk nyújtását
              kérheti.
            </Text>
            <Heading
              fontWeight="900"
              py="2"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1rem", "1rem", "2rem", "2rem"]}
              lineHeight={["1rem", "1rem", "2rem", "2rem"]}
            >
              Az adatkezeléssel kapcsolatos panasz benyújtásának joga és
              jogorvoslat:
            </Heading>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Az adatkezeléssel kapcsolatos bármely panasz esetén a Szervező
              adatvédelmi tisztségviselőjéhez lehet fordulni: dr. Pók László, cím:
              1097 Budapest, Könyves Kálmán krt. 36.; email: DPO@telekom.hu.
            </Text>{" "}
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Továbbá a Pályázó panaszával a Nemzeti Adatvédelmi és
              Információszabadsághoz is fordulhat (postai cím: 1363 Budapest, Pf.:
              9., cím: 1055 Budapest, Falk Miksa utca 9-11., Telefon: +36 (1)
              391-1400; Fax: +36 (1) 391-1410; E-mail: ugyfelszolgalat@naih.hu;
              honlap: www.naih.hu).{" "}
            </Text>
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Pályázó a jogainak megsértése esetén a Szervezővel szemben
              bírósághoz fordulhat. A bíróság az ügyben soron kívül jár el. Azt,
              hogy az adatkezelés a jogszabályban foglaltaknak megfelel, a
              Szervező köteles bizonyítani. A per elbírálása a törvényszék, a
              fővárosban a Fővárosi Törvényszék hatáskörébe tartozik. A per a
              Pályázó lakóhelye vagy tartózkodási helye szerinti törvényszék előtt
              is megindítható.
            </Text>{" "}
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              A Szervező a Pályázó adatainak jogellenes kezelésével, vagy az
              adatbiztonság követelményeinek megszegésével másnak okozott kárt
              köteles megtéríteni. A Szervező mentesül a felelősség alól, ha
              bizonyítja, hogy a kárt az adatkezelés körén kívül eső
              elháríthatatlan ok idézte elő. Nem kell megtéríteni a kárt annyiban,
              amennyiben az a károsult szándékos vagy súlyosan gondatlan
              magatartásából származott.
            </Text>{" "}
            <Text
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "xl"]}
              p={["10px 0vw", "10px 0vw"]}
            >
              Budapest, 2022. január 17. Magyar Telekom Nyrt.
            </Text>{" "}
          </Box>
        </div>
      </>
    </Layout>
  );
});
