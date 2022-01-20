import React, { useContext, useState, useEffect } from "react";

import VisibilityControl from "./VisibilityControl/VisibilityControl.jsx";
import Hero from "../components/LandingPage/Hero";

import ContentBlockContainer from "../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";

import { NextSeo } from "next-seo";

import Image from "next/image";
import Link from "next/link";

import Form from "../components/LandingPage/Form";
import Organizer from "./Organizer";

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

  return (
    <div>
      <NextSeo
        title="Electronic Beats | Talents 2022"
        description="Electronic Beats tehetségkutató pályázat"
        openGraph={{
          title: " | Electronic Beats",
          description: "Electronic Beats tehetségkutató pályázat",
          images: [
            {
              url: `/images/eb/electronicbeats-12.jpg`,
              width: 1280,
              height: 634,
              alt: "Electronic Beats | Talents 2022",
            },
          ],
          site_name: "Electronic Beats",
        }}
      />
      <Form {...props} />
      <Hero
        {...props}
        isMobile={isMobile}
        title={t("mainTitle")}
        description={t("mainShortDescription")}
      />
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
