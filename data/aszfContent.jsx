import React from "react";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";
import Link from "next/link";
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

export default withTranslation("common")(function aszf(props) {
  return (
    <Layout {...props}>

      <div
        style={{
          margin: "50px auto",
          width: "100vw",
          backgroundColor: "#323232",
          color: "white",
        }}
      >
        <NextSeo
          title="Electronic Beats | Szelektor 2022"
          description="Electronic Beats tehetségkutató pályázat"
          openGraph={{
            title: "Szelektor| Electronic Beats",
            description: "Electronic Beats tehetségkutató pályázat",
            images: [
              {
                url: `/images/eb/Electronic_KV_Grey_NEW_LOGO-06-min.png`,
                width: 1280,
                height: 634,
                alt: "Electronic Beats | Szelektor 2022",
              },
            ],
            site_name: "Electronic Beats",
          }}
        />
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
            Telekom Electronic Beats Szelektor: Magyar jövőbe magyar zenét! A
            Telekom Electronic Beats keresi a legjobb 2022-es dalokat, amikből
            újabb válogatáslemez készül
          </Heading>


          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          >
            A legjobbnak ítélt zenék - amelyek elbírálásába elismert neveket is
            bevonunk a szcénából - végül hivatalosan kiadott válogatásokra
            kerülnek majd fel, amiket a Telekom Electronic Beats a Selected
            Sounds kiadóval közösen jelentet meg, professzionális masteringet
            követően (köszönhetően az Analogue Zone-nak), biztosítva a tökéletes
            megszólalást. A kiválasztott zenék szerzői pénzjutalomban
            részesülnek, a Keretblog és Elle Magazin felajánlásának köszönhetően
            két különdíj is elnyerhető, vagy fellépési lehetőség a Telekom Volt
            Fesztiválon, valamint zenei producer képzésen való részvétel az
            imPro School által szervezett programban. A fődíj pedig egy MacBook
            Pro 16” (10 magos CPU, 32 magos GPU, 1 TB SSD) készülék Ableton Live
            licensszel.
          </Text>
          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          >
            A Telekom Electronic Beats folyamatosan frissített Spotify
            lejátszási listáin már futó hármas tematika alapján Pop , Club
            (vagyis éjszakai táncparketteket célzó zenék) és Xperi (kísérleti
            darabok) kategóriákban lehet indulni kettő és nyolc perc közötti
            zenei dolgozatokkal. Ennél több feltételt nem is szeretne szabni a
            TEB csapata, akik hisznek abban, hogy ugyan most fizikai korlátok
            közé vagyunk szorítva, együtt mégis egy olyan, határokon átívelő
            dolgot lehet létrehozni, amire az utánunk jövő generációk is
            boldogan nyomják meg a play gombot.
          </Text>{" "}
          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          >
            <strong>A jelentkezés menete, feltételek:</strong>
          </Text>{" "}
          <OrderedList
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          >
            <ListItem>
              <Text>
                A Pályázat a Magyar Telekom Nyrt. (Cg. 01-10-041928, 1097
                Budapest, Könyves Kálmán krt. 36., a továbbiakban Szervező)
                által kerül lebonyolításra. Adatfeldolgozó: Art Village Kft.
                (1082 Budapest, Vajdahunyad utca 4. ASZ: 12719956-2-42)
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A pályázatra a Szervező kizárólag elektronikus úton várja a
                jelentkezést 2022. március 16. reggel 8 órától 2022. április 10..
                éjfélig. Az elkészült alkotásokat az előre erre a célra
                létrehozott weboldalra kell feltölteni.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A nevezett alkotások hossza legalább 2, legfeljebb 8 perc lehet.
                A versenymű leírásában kötelező elemek:
                <UnorderedList>
                  <ListItem>
                    <Text>alkotó művészneve</Text>
                  </ListItem>
                  <ListItem>
                    <Text>alkotás címe</Text>
                  </ListItem>
                  <ListItem>
                    <Text>alkotás stílusa</Text>
                  </ListItem>
                  <ListItem>
                    <Text>alkotás hossza</Text>
                  </ListItem>
                  <ListItem>
                    <Text>alkotás sebessége (bpm)</Text>
                  </ListItem>
                  <ListItem>
                    <Text>alkotás keletkezésének időpontja</Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      leírás az alkotó hátteréről, inspirációiról, a nevezett
                      zenéről
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      voltak-e az alkotónak korábban megjelent zenéi? Ha igen,
                      melyik kiadó(k)nál?
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      alkotó polgári neve (személyazonosító okmányon szereplő
                      teljes név)
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>születési idő</Text>
                  </ListItem>
                  <ListItem>
                    <Text>születési hely</Text>
                  </ListItem>
                  <ListItem>
                    <Text>jelenlegi lakhely</Text>
                  </ListItem>
                </UnorderedList>
              </Text>
            </ListItem>
            <ListItem>
              <Text>Egy alkotó egy zenével nevezhet.</Text>
            </ListItem>
            <ListItem>
              <Text>
                Az alkotó a zenéjét az alábbi kategóriákban (stílusokban)
                nevezheti:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>Pop (azaz könnyebben befogadható popzene)</Text>
                </ListItem>
                <ListItem>
                  <Text>Club (elektronikus, klubbarát tánczenék)</Text>
                </ListItem>
                <ListItem>
                  <Text>Xperi (kísérleti zenék)</Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text>
                A Pályázónak a Szervező feltöltő oldalán nyilatkoznia kell, hogy az elkészült és a
                Szervező részére megküldött zene eredeti, és nem sért semmilyen szerzői jogi
                jogszabályt, továbbá a zenei mű létrehozásának és felhasználásának jogi akadálya
                nincs. A Pályázó felelős továbbá azért is, hogy az általa készített versenyműre
                vonatkozóan harmadik személyek szerzői joga vagy személyiségi joga nem áll fenn,
                a versenyműben megjelenő termékek és szolgáltatások nevének és esetleges
                védjegyének szerepeltetéséhez engedéllyel rendelkezik, továbbá a versenyműben
                szereplő harmadik személyek a versenymű elkészítéséhez és közzétételéhez
                hozzájárultak, és hogy a megküldött zene eredeti, hivatalos kiadásban nem jelent
                meg. Amennyiben a Pályázó a versenyműben zenét vagy egyéb szerzői- és
                szomszédos jogi védelem alá eső művet használ fel, melyre vonatkozóan a
                szükséges felhasználási jogosultságokkal nem rendelkezik és azt nem igazolja,
                tudomásul veszi, hogy a Szervező a versenyművét jogosult kizárni a pályázatból.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A zsűri által kiválasztott legjobb zenék felkerülnek a három
                kategóriában megjelenő Telekom Electronic Beats válogatásokra,
                amelyek nyilvánosan elérhetőek lesznek a legismertebb digitális
                zenei platformokon (Spotify, Apple Music, Google Play, Beatport,
                Tracksource, Juno Download, Bandcamp, Soundcloud).
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A Pályázó az elkészült alkotás beküldésével feljogosítja a
                Szervezőt, hogy a beérkezett alkotásokat időbeli és térbeli
                korlátozás nélkül, a Szervező és a Pályázó között létrejött
                felhasználási szerződés alapján, felhasználási díj ellenében
                bemutathassa saját felületein. A felhasználás kiterjed a szerzői
                mű később megjelenő fizikai adathordozón történő közzétételére,
                többszörözésére és terjesztésére, valamint átdolgozására is.
                Zsűri a nyertes Pályázóra vonatkozó döntését nem köteles
                indokolni, a döntés ellen jogorvoslatnak helye nincs.
              </Text>
            </ListItem>
            <ListItem>
              <Text>A pályázatból való kizárás oka lehet, ha:</Text>
              <UnorderedList>
                <ListItem>
                  <Text>
                    a Pályázó nem felel meg a pályázati felhívásban szereplő
                    feltételeknek vagy a pályázati feltételeket megsérti
                  </Text>
                </ListItem>{" "}
                <ListItem>
                  <Text>a Pályázó korábban már kiadott, megjelent dalt nevez,</Text>
                </ListItem>{" "}
                <ListItem>
                  <Text>a pályázat határidőre nem érkezett meg,</Text>
                </ListItem>{" "}
                <ListItem>
                  <Text>
                    a pályázat hiányos (az alkotó nem adta meg a kötelező
                    adatait).
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text>
                A zsűri fenntartja magának a jogot, hogy egy alkalommal a
                Pályázónak hiánypótlási lehetőséget adjon.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A Szervező a sikeres Pályázókat elektronikus levélben értesíti A
                Pályázók által megadott elérhetőségen, a győztesek művésznevét
                tartalmazó listát pedig közzé teszi az electronicbeats.hu
                weboldalon.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A Szervező fenntartja magának a jogot, hogy eredménytelen
                pályázat esetén nem oszt díjat vagy különdíjat. A Szervező a
                saját felületein a pályaművek illusztrációkkal együtt történő
                korlátlan közzétételi jogát fenntartja. A közzétételi jogot a
                Szervező a Pályázó részére fizetett ellenszolgáltatás alapján
                gyakorolja, mely jog magában foglal valamennyi szerző által is
                gyakorolható, átruházható vagyoni jogosultságot. A szerzői jogi
                kérdéseket a Szervező a nyertes Pályázóval felhasználási
                szerződés megkötése alapján rendezi. A nyertes Pályázók
                pályázatban történő részvételének feltétele a pályázathoz
                csatolt nyilatkozatok megadása és a Szervező részére történő, a
                9. pontban részletezett felhasználási jog felhasználási
                szerződés útján történő biztosítása.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A Szervező fenntartja a jogot, hogy a jelen pályázati kiírásban
                foglalt feltételeket vagy magát a pályázatot akár a pályázat
                időtartama alatt módosítsa, vagy megszüntesse. A pályázati
                kiírás módosításait, illetve a pályázat esetleges
                megszüntetéséről szóló értesítést a Szervező a módosítást,
                illetve megszüntetést megelőzően írásban közli valamennyi
                Pályázóval, illetve közzéteszi az electronicbeats.hu weboldalon.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A pályázaton történő részvétel önkéntes, jelentkezési díjtól
                mentes és vásárláshoz nem kötött. A Szervező jogosult bármely
                Pályázót a pályázatból kizárni, különösen, ha a pályázat kapcsán
                visszaélés vagy a pályázati kiírásban foglalt részvételi
                feltételek megszegésének gyanúja merül fel, vagy ha valamely
                Pályázó a pályázat lefolyását bármilyen módon manipulálja,
                illetve rosszhiszeműen jár el, továbbá előre nem látott
                körülmények felmerülése vagy vis major esetén.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A Szervező fenntartja magának a jogot, hogy minden, a
                pályázatban feltöltött anyagot, egyéb pályázó által végzett
                tevékenységet, amely közerkölcsöt, mások vallási, felekezeti,
                etnikai hovatartozását, etikai szabályt, más személyek védett
                tulajdonságát, egyéb jogot, illetve jogszabályt sért, vagy a
                Magyar Telekom Nyrt. és leányvállalatai üzleti érdekeit, jó
                hírnevét vagy a jelen pályázati kiírást sérti, továbbá a Magyar
                Telekom Nyrt. megítélése szerint bármely módon sértő, azonnali
                hatállyal töröljön, illetve az ilyen anyagokat feltöltő Pályázót
                vagy a hozzászólást jegyző egyéb résztvevőt a pályázatból
                kizárjon. Az esetleges jogsértő hozzászólásokért és egyéb
                megnyilvánulásokért a felelősség kizárólag a jogsértő résztvevőt
                vagy Pályázót terheli.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                A beérkezett munkák elbírálásában a Telekom Electronic Beats
                stábja, valamint külső szakértők vesznek részt:{" "}
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text>
                    Clubbing – Tollner Máté “Tolo” (Lavalava), Tóth Laura „Lau”;{" "}
                  </Text>
                </ListItem>{" "}
                <ListItem>
                  <Text>Popping – Carson Coma, Beton.Hofi, Solere Zsófi; </Text>
                </ListItem>{" "}
                <ListItem>
                  <Text>
                    Experimenting - Kolbenheyer Erik (Exiles), iamyank.{" "}
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text>Nyeremények</Text>
              <Text>
                A 15. pontban felsorolt személyek választják ki a Nyerteseket,
                akik nettó 50.000 Ft díjban (vagyoni értékű jog felhasználása)
                részesülnek. A nyeremények bruttó értékéből Telekom a hatályos
                Szja törvény alapján levonja a 15% személyi jövedelemadó
                előleget és erről igazolást küld a Nyerteseknek. A fődíjként
                nyújtott 1 (egy) darab „MacBook Pro 16” típusú készülék a
                hatályos Szja törvény szerint verseny, vetélkedőből származó
                díjnak minősül. A nyeremény értéke után Telekom fizeti meg a
                szja-t, a főnyertesnek adófizetési kötelezettsége nem
                keletkezik.
              </Text>
            </ListItem>
            <ListItem>
              <Text>A személyes adatok védelméről </Text>
              <Link href="/adatvedelmi_nyilatkozat">
                Tovább az Adatvédelmi nyilatkozatra...
              </Link>
            </ListItem>
          </OrderedList>
          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          ></Text>
          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          ></Text>{" "}
          <Text
            fontFamily="TeleNeoWeb"
            color="white"
            fontSize={["md", "lg", "xl", "xl"]}
            p={["10px 0vw", "10px 0vw"]}
          ></Text>
        </Box>
      </div>
    </Layout>
  );
});
