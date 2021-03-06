import React, { useContext, useState, useEffect } from "react";

import VisibilityControl from "./VisibilityControl/VisibilityControl.jsx";
import Hero from "../components/LandingPage/Hero";

import ContentBlockContainer from "../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";

import { NextSeo } from "next-seo";

import Image from "next/image";
import { useRouter } from "next/router";


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
  Link,
  GridItem,
} from "@chakra-ui/react";

import { withTranslation } from "../server/i18n";

const Title = styled.div`
  margin: 0;
  color: black;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: bold;

  letter-spacing: 3px;
  @media only screen and (max-device-width: 700px) {
    font-size: 1.8rem;
  }
`;

const MyStack = styled.div`
  display: flex;
  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
  }
`;

const TwoCollumn = styled.div`
  column-count: 2;
  column-gap: 80px;
  max-width: 1100px;
  padding: 20px;
  @media only screen and (max-device-width: 700px) {
    column-count: 1;
  }
  @media (max-width: 900px) {
    column-count: 1;
  }
`;

const TLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #e20074;
  font-weight: bold;
  :hover,
  :visited,
  :link,
  :active {
    color: #e20074;
  }
`;

function LandingPageContainer(props) {
  const { t, langId } = props;
  const [isMobile, setisMobile] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (/Mobi/.test(navigator.userAgent) && window.innerWidth < 401) {
      // mobile!
      setisMobile("mobil_");
    }
    window.addEventListener(
      "DOMContentLoaded",
      () => (window.allowinlinemediaplayback = false)
    );
  }, []);

  return (
    <div>
      <NextSeo
        title="Electronic Beats | Szelektor 2022"
        description="Electronic Beats tehetségkutató pályázat"
        openGraph={{
          title: "Szelektor| Electronic Beats",
          description: "Electronic Beats tehetségkutató pályázat",
          images: [
            {
              url: `/images/eb/Electronic_KV_Grey_NEW_LOGO-06-min`,
              width: 1280,
              height: 634,
              alt: "Electronic Beats | Szelektor 2022",
            },
          ],
          site_name: "Electronic Beats",
        }}
      />
      {/* <Form {...props} /> */}
      <Hero
        {...props}
        isMobile={isMobile}
        title={t("mainTitle")}
        description={t("mainShortDescription")}
      />
      <section id="reszletek"></section>
      <VisibilityControl effect="fade" always={false} lazyload>
        <ContentBlockContainer
          backgroundColor="#323232"
          height=""
          padding="50px 0"
        >
          <VStack>
            <Heading
              fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["2rem", "3rem", "4rem", "4rem"]}
              lineHeight={["2rem", "3rem", "4rem", "4rem"]}
              w={["100vw", "90vw"]}
              p={["40px 4vw", "60px 4vw"]}
            >
              <span style={{ color: "#e20074" }}>Mutasd a zenédet:</span> a
              Telekom Electronic Beats keresi a legjobb 2022-es zenéket, amikből
              újabb válogatáslemez készül
            </Heading>
            <Heading
              fontWeight="500"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["1.5rem", "2rem", "2rem", "2rem"]}
              lineHeight={["1.5rem", "2rem", "2rem", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
              pb={["20px", "40px"]}
            >
              Pop, klub és kísérleti zene kategóriában várják a jelentkezéseket április 10-ig.
            </Heading>
            <Text
              // fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "2xl"]}
              // lineHeight={["1rem", "1rem", "300px", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
            >
              Ami jó, azt a felszínre kell hozni. A{" "}
              <TLink href={"https://electronicbeats.hu"}>
                Telekom Electronic Beats
              </TLink>{" "}
              csapata ebből a megfontolásból újra aktivizálja magát, ami a hazai zenei tehetségek felkutatását illeti: szeretnék ismét láthatóvá tenni, milyen figyelemre méltó dolgok történnek a hazai kisstúdiókban és hálószobákban - és később sem elengedni az előadók kezét, hanem segíteni nekik a karrierjük egyengetésében.
            </Text>

            <Text
              // fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "2xl"]}
              // lineHeight={["1rem", "1rem", "300px", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
            >
              Azért ismét, mert ez már a második felvonás lesz: az első alkalommal egy kiadótulajdonosból, dj-ből és zenei újságíróból álló szakmai zsűri részvételével
              <TLink href={"https://www.electronicbeats.hu/sslteb001/"}>{" "}
                több mint hatszáz jelentkezőből válogattunk ki 30+1 zenészt,
                akik felkerültek tripla válogatásunkra,
              </TLink> és most is ugyanebben a formátumban gondolkodnak. Az elbírálásban ezúttal a Telekom Electronic Beats tagjain kívül részt vesz majd az ország egyik legnagyobbat brillírozó rappere, Beton.Hofi, az elsöprő dalairól ismert Carson Coma, a Budapest-London tengelyen mozgó énekesnő, Solére, illetve a gépzenei közeg definitív alakjai: Tolo, LAU, Iamyank, és az EXILES kiadót navigáló Kolbenheyer Erik.
            </Text>
            <Text
              // fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "2xl"]}
              // lineHeight={["1rem", "1rem", "300px", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
            >
              A Telekom Electronic Beats projektje március 16. szerdától majdnem egy hónapon át, április 10-ig várja olyan zenei alkotók jelentkezését, akik szeretnék dalaikat a világ elé tárni, igazolva azt, hogy a hazai zenéknek is bőven van keresnivalójuk a nemzetközi mezőnyben - az elkészült válogatás ugyanis valamennyi jelentős streaming platformon elérhetővé válik majd ezt követően.
            </Text>
            <Text
              // fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "2xl"]}
              // lineHeight={["1rem", "1rem", "300px", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
            >
              A három különböző műfajú albumra felkerülő fiatal tehetségek ráadásul olyan jutalmakkal is gyarapodhatnak, mint egy további alkotást segítő, Abletonnal felruházott Macbook Pro, ELLE különdíj egy feltörekvő női előadónak, illetve fellépés a Telekom VOLT Fesztiválon, vagy a Kolorádón. És lesznek olyan indulók is, akik imPro képzéshez jutnak, hogy profi szakmai stáb segítségével mélyíthessék el elektronikus zenei ismereteiket.

            </Text>

            <Text
              // fontWeight="900"
              fontFamily="TeleNeoWeb"
              color="white"
              fontSize={["md", "lg", "xl", "2xl"]}
              // lineHeight={["1rem", "1rem", "300px", "2rem"]}
              w={["100vw", "90vw"]}
              p={["10px 4vw", "10px 4vw"]}
            >
              Lehet előkapni a félkész zenéket, leporolni a sávokat, kölcsönkérni a szintit, elvonulni napokra a mikrofonállvány árnyékába - a Telekom Electronic Beats digitális kiadója és helyierő-támogató projektje, a Szelektor tárt karokkal várja az érdekesebbnél érdekesebb trekiket, legyen az 2022 bunkertechnója vagy nyári slágere.
            </Text>
          </VStack>
        </ContentBlockContainer>
      </VisibilityControl>
      <VisibilityControl effect="fade" always={false} lazyload>
        <ContentBlockContainer
          backgroundColor="#323232"
          height=""
          padding="50px 0"
        >
          <Box pb="12">
            <Button
              fontFamily="TeleNeoWeb"
              size="lg"
              px="5"
              py="5"
              fontSize="3xl"
              backgroundColor="#e20074"
              color="white"
              colorScheme="magenta"
              onClick={() => router.push("/jelentkezem")}
            >
              JELENTKEZEM
            </Button>
          </Box>
        </ContentBlockContainer>{" "}
      </VisibilityControl>
      {/* <section id="termekek"></section>
      <VStack>
        <Heading
          fontWeight="900"
          // color="#e20074"
          p={["20px 4vw", "100px 4vw"]}
          fontSize={["2rem", "3rem", "4rem", "4rem"]}
          lineHeight={["2rem", "3rem", "4rem", "4rem"]}
        >
          {t("Termékek")}
        </Heading>
      </VStack>


      <section id="23"></section> */}
    </div>
  );
}

LandingPageContainer.getInitialProps = async () => {
  return {
    namespacesRequired: ["common", "footer"],
  };
};

export default withTranslation("common")(LandingPageContainer);

//  <ContentBlockContainer backgroundColor="" height="" padding="50px 0">
//         <div
//           style={{
//             width: "100%",
//             height: "100vh",
//             overflow: "hidden",
//             background:
//               "linear-gradient(346deg, rgba(3,55,124,1) 24%, rgba(5,96,213,1) 100%)",
//           }}
//         >
//           <Stack direction={["column", "row"]}>
//             <VStack
//               // h={["calc(60vh )", "calc(100vh - 80px)"]}
//               position="relative"
//               w={["100vw", "50vw"]}
//               align={"center"}
//               justify={"center"}
//               h={[null, "100vh"]}
//             >
//               <Heading
//                 fontWeight="900"
//                 color="white"
//                 fontSize={["3rem", "3rem", "4rem", "4rem"]}
//                 lineHeight={["3rem", "3rem", "4rem", "4rem"]}
//                 w={["90vw", "50vw"]}
//                 p={["40px 4vw", "20px 4vw"]}
//               >
//                 SafePal App
//               </Heading>
//               <Text
//                 w={["90vw", "50vw"]}
//                 letterSpacing="2px"
//                 color="white"
//                 p={["0px 4vw"]}
//                 fontSize={["sm", "sm", "md", "md"]}
//               >
//                 Vásárlás, tárolás, váltás, kereskedés, befektetés több, mint 10
//                 000 kriptovalutával egyetlen applikációban
//               </Text>
//               <HStack
//                 w={["90vw", "50vw"]}
//                 p={["20px 4vw", "20px 4vw"]}
//                 spacing="5"
//               >
//                 <Image src="/images/downapp.svg" height="100px" width="100px" />
//                 <Link href="/download">
//                   <Button
//                     rightIcon={<ArrowForwardIcon />}
//                     fontWeight="bold"
//                     colorScheme="whiteAlpha"
//                     variant="outline"
//                   >
//                     Tudjon meg többet
//                   </Button>
//                 </Link>
//               </HStack>
//             </VStack>

//             <VisibilityControl effect="fade" always={false} lazyload>
//               <Img
//                 // layout="fill"
//                 w="100%"
//                 src="/images/ui_SafePal_app2.png"
//               />
//             </VisibilityControl>
//           </Stack>
//         </div>
//       </ContentBlockContainer>
//       <ContentBlockContainer backgroundColor="white" padding="50px 0">
//         <Heading
//           fontWeight="900"
//           // color="#e20074"
//           p={["20px 4vw", "100px 4vw"]}
//           fontSize={["2rem", "3rem", "4rem", "4rem"]}
//           lineHeight={["2rem", "3rem", "4rem", "4rem"]}
//         >
//           {t("Partnerek")}
//         </Heading>
//       </ContentBlockContainer>
