import React, { useContext, useState, useEffect } from "react";

import VisibilityControl from "./VisibilityControl/VisibilityControl.jsx";
import Hero from "../components/LandingPage/Hero";

import ContentBlockContainer from "../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";

import { NextSeo } from "next-seo";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import Link from "next/link";

import productData from "../data/productData";

import Cart from "./Ecwid/Cart";

import Organizer from "./Organizer";
import Partnerek from "./Partnerek";

import ProductCard from "./Product/ProductCard";
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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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

function LandingPageContainer(props) {
  const { t, langId } = props;
  const [isMobile, setisMobile] = useState("");

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

  function imageStackCreator(subfolder, count) {
    const stack = [];
    for (let i = 1; i <= count; i++) {
      stack.push({
        original: subfolder + i + "-min.jpg",
        thumbnail: subfolder + "thumbnail/" + i + ".jpg",
        height: "20vw",
      });
    }

    return stack;
  }

  useEffect(() => {
    return () => {
      if (typeof Ecwid != "undefined") {
        if (typeof Ecwid.destroy === "function") {
          Ecwid?.destroy();
        }
      }
    };
  });

  return (
    <div>
      <NextSeo
        title="SafePal Wallet | Kriptovaluta hardver tárca"
        description="Kényelem és biztonság a kriptoeszközöknek"
        openGraph={{
          title: " | SafePal Wallet",
          description: "Kényelem és biztonság a kriptoeszközöknek",
          images: [
            {
              url: `/images/facebook_card_image.png`,
              width: 894,
              height: 722,
              alt: "SafePal S1 hardver kriptotárca",
            },
          ],
          site_name: "SafePal Wallet",
        }}
      />

      <Hero
        {...props}
        isMobile={isMobile}
        title={t("mainTitle")}
        description={t("mainShortDescription")}
      />
      <section id="termekek"></section>
      <VStack>
        <Heading
          fontWeight="900"
          // color="#0560d5"
          p={["20px 4vw", "100px 4vw"]}
          fontSize={["2rem", "3rem", "4rem", "4rem"]}
          lineHeight={["2rem", "3rem", "4rem", "4rem"]}
        >
          {t("Termékek")}
        </Heading>

        <Organizer>
          {productData?.map((product) => {
            return (
              <ProductCard key={product.productId} product={product}>
                <Cart productId={product.productId} />
              </ProductCard>
            );
          })}
        </Organizer>
      </VStack>

      <section id="23"></section>

      <ContentBlockContainer backgroundColor="" height="" padding="50px 0">
        <div
          style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background:
              "linear-gradient(346deg, rgba(3,55,124,1) 24%, rgba(5,96,213,1) 100%)",
          }}
        >
          <Stack direction={["column", "row"]}>
            <VStack
              // h={["calc(60vh )", "calc(100vh - 80px)"]}
              position="relative"
              w={["100vw", "50vw"]}
              align={"center"}
              justify={"center"}
              h={[null, "100vh"]}
            >
              <Heading
                fontWeight="900"
                color="white"
                fontSize={["3rem", "3rem", "4rem", "4rem"]}
                lineHeight={["3rem", "3rem", "4rem", "4rem"]}
                w={["90vw", "50vw"]}
                p={["40px 4vw", "20px 4vw"]}
              >
                SafePal App
              </Heading>
              <Text
                w={["90vw", "50vw"]}
                letterSpacing="2px"
                color="white"
                p={["0px 4vw"]}
                fontSize={["sm", "sm", "md", "md"]}
              >
                Vásárlás, tárolás, váltás, kereskedés, befektetés több, mint 10
                000 kriptovalutával egyetlen applikációban
              </Text>
              <HStack
                w={["90vw", "50vw"]}
                p={["20px 4vw", "20px 4vw"]}
                spacing="5"
              >
                <Image src="/images/downapp.svg" height="100px" width="100px" />
                <Link href="/download">
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    fontWeight="bold"
                    colorScheme="whiteAlpha"
                    variant="outline"
                  >
                    Tudjon meg többet
                  </Button>
                </Link>
              </HStack>
            </VStack>

            <VisibilityControl effect="fade" always={false} lazyload>
              <Img
                // layout="fill"
                w="100%"
                src="/images/ui_SafePal_app2.png"
              />
            </VisibilityControl>
          </Stack>
        </div>
      </ContentBlockContainer>
      <ContentBlockContainer backgroundColor="white" padding="50px 0">
        <Heading
          fontWeight="900"
          // color="#0560d5"
          p={["20px 4vw", "100px 4vw"]}
          fontSize={["2rem", "3rem", "4rem", "4rem"]}
          lineHeight={["2rem", "3rem", "4rem", "4rem"]}
        >
          {t("Partnerek")}
        </Heading>
        <Partnerek />
      </ContentBlockContainer>
    </div>
  );
}

LandingPageContainer.getInitialProps = async () => {
  return {
    namespacesRequired: ["common", "footer"],
  };
};

export default withTranslation("common")(LandingPageContainer);

// const ImageContent = styled.div`
//   background-position: center center;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   max-height: 800px;
//   width: 100%;
//   height: 100vh;
//   @media only screen and (max-device-width: 700px) {
//     height: 60vh;
//   }
// `;

//  <ContentBlockContainer backgroundColor="white" height="">
//         <VStack p={["20px 15px"]} maxW="740px" w="100vw" alignItems="left">
//           <Heading color="black">23 CABIN EVO ELECTRIC</Heading>
//           <Text fontSize="xs">6,9m – 7,8m | 22’ 8’’ – 25’ 7’’</Text>
//           <Text p="20px 0" fontSize="lg">
//             TÖKÉLETES FORMATERVEZÉS, MAXIMÁLIS KÉNYELEM
//           </Text>
//           <Text color="grey">
//             A 23 CABIN EVO ELECTRIC mindent tartalmaz, amire szüksége lehet egy
//             nagyszerű nap eltöltéséhez a vízen családjával vagy barátaival.
//             Tágas és kényelmes fedélzete egyszerre nyolc személy befogadására
//             alkalmas. A kabin belső kialakításánál törekedtek a tökéletes
//             helykihasználásra, így akár konyhával és WC-vel is rendelhető. A
//             fürdőplatform most még egyszerűbben megközelíthető a két oldalsó
//             bejárattal, és az egyedülállóan kihúzható napozóágyaknak
//             köszönhetően a strandolás új dimenzióját próbálhatják ki.
//           </Text>
//         </VStack>
//         <ContentBlockContainer backgroundColor="white" height="">
//           <MyStack style={{ display: "flex", paddingTop: "40px" }}>
//             <Center w={["100%", "50%"]}>
//               <VisibilityControl effect="fade" always={false} lazyload>
//                 <Img width="100%" src="/images/1-1920x1080-min.png" />
//               </VisibilityControl>
//             </Center>
//             <Center w={["100%", "50%"]}>
//               <VStack p={["40px"]} textAlign="center">
//                 <Heading color="black" fontSize="xl" lineHeight="1.5">
//                   EGYEDÜLÁLLÓ, TÁVIRÁNYÍTÁSOS HIDRAULIKUS KEMÉNYTETŐ
//                 </Heading>
//                 <Text color="grey" p="40px 0">
//                   A tető akár 30 méteres távolságból is távirányítóval lezárható
//                   kevesebb mint 30 másodperc alatt, így a hajó teljesen védett
//                   minden külső behatástól, például esőtől, levelektől és egyéb
//                   szennyeződésektől. A hajózás végeztével még sosem volt ilyen
//                   egyszerű és gyors a hajó elcsomagolása.
//                 </Text>
//               </VStack>
//             </Center>
//           </MyStack>

//           <MyStack>
//             <Center w={["100%", "50%"]}>
//               <VStack p={["40px"]} textAlign="center">
//                 <Heading color="black" fontSize="xl" lineHeight="1.5">
//                   KÖRBEJÁRHATÓ FEDÉLZET
//                 </Heading>
//                 <Text color="grey" p="40px 0">
//                   A kétoldali folyosó megkönnyíti a hajón való közlekedést, így
//                   még nagyobb teret és kényelmet biztosít. A biztonság érdekében
//                   pedig ajtókkal zárhatjuk le a fedélzetet. A hajó végében
//                   található napágynak köszönhetően megtapasztalhatjuk a
//                   tökéletes luxus életérzést, melyet akár 140 centiméterrel
//                   kibővíthetünk a maximális kényelem érdekében.
//                 </Text>
//               </VStack>
//             </Center>
//             <Center w={["100%", "50%"]}>
//               <VisibilityControl effect="fade" always={false} lazyload>
//                 <Img width="100%" src="/images/3-scaled-1920x1080.jpg" />{" "}
//               </VisibilityControl>
//             </Center>
//           </MyStack>
//           <VStack p="100px 0">
//             <Heading color="black" lineHeight="1.5">
//               EXTERIOR LAYOUTS
//             </Heading>
//             <VisibilityControl effect="fade" always={false} lazyload>
//               <Img
//                 width="100%"
//                 height="100%"
//                 src="/images/exterior_layouts23.png"
//               />
//             </VisibilityControl>
//           </VStack>
//         </ContentBlockContainer>
//         <TechnikaiJellemzok
//           jellemzok={[
//             {
//               megnevezes: "Hossz",
//               ertek: "22’ 8’’/6,93m",
//             },
//             {
//               megnevezes: "Teljes hossz",
//               ertek: "25’ 7’’/7,8m",
//             },
//             {
//               megnevezes: "Beam",
//               ertek: "7’ 10’’/2,42m",
//             },
//             {
//               megnevezes: "Tömeg",
//               ertek: "4630 lbs/2100kg",
//             },
//             {
//               megnevezes: "Draft",
//               ertek: "min 1’ 8’’/min 0,50m",
//             },
//             {
//               megnevezes: "Max persons",
//               ertek: "8 adults",
//             },
//             {
//               megnevezes: "CE certificate",
//               ertek: "C",
//             },
//             {
//               megnevezes: "Engine",
//               ertek: "up to 30kW",
//             },
//           ]}
//         />
//       </ContentBlockContainer>
//       <Center>
//         <Box maxW="740px" w="100vw">
//           <Heading fontSize="sm">
//             * A választható színekről bővebben itt:{" "}
//             <Link href="https://safepalwallet.com/customization/">
//               https://safepalwallet.com/customization/
//             </Link>
//           </Heading>
//         </Box>
//       </Center>
//       <ContentBlockContainer backgroundColor="white" height="">
//         <Box
//           p={["40px 0"]}
//           maxW={["100vw", "740px"]}
//           maxH={["500px", "900px"]}
//           h={["50vh", "100vh"]}
//         >
//           <VisibilityControl effect="fade" always={false} lazyload>
//             <ImageGallery
//               // showThumbnails={false}
//               autoPlay={true}
//               lazyLoad={true}
//               showPlayButton={false}
//               items={imageStackCreator("images/23/", 13)}
//             />
//           </VisibilityControl>
//         </Box>
//       </ContentBlockContainer>
//       <section id="28"></section>
//       <ContentBlockContainer backgroundColor="" height="" padding="0">
//         <div style={{ width: "100vw" }}>
//           <Heading
//             letterSpacing="3px"
//             p={["20px 4vw"]}
//             position="absolute"
//             color="white"
//           >
//             28 CABIN ELECTRIC
//           </Heading>
//           <VisibilityControl effect="fade" always={false} lazyload>
//             <Img
//               // layout="fill"
//               w="100%"
//               src="/images/28cabin-2-min.png"
//             />
//           </VisibilityControl>
//         </div>
//       </ContentBlockContainer>

//       <ContentBlockContainer backgroundColor="white" height="">
//         <Box
//           p={["40px 0"]}
//           maxW={["100vw", "740px"]}
//           maxH={["500px", "900px"]}
//           h={["50vh", "100vh"]}
//         >
//           <VisibilityControl effect="fade" always={false} lazyload>
//             <ImageGallery
//               // showThumbnails={false}
//               autoPlay={true}
//               lazyLoad={true}
//               showPlayButton={false}
//               items={imageStackCreator("images/28/", 13)}
//             />{" "}
//           </VisibilityControl>
//         </Box>
//       </ContentBlockContainer>
