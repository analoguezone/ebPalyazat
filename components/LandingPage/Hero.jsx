import React from "react";

import styled from "styled-components";
import VisibilityControl from "../VisibilityControl/VisibilityControl.jsx";

import {
  Box,
  HStack,
  Stack,
  VStack,
  Text,
  Center,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { default as Img } from "next/image";
import mainImage from "../../public/images/eb/Electronic_KV_Grey_NEW_LOGO-06-min.png";
import mainImageMobile from "../../public/images/eb/Electronic_KV_Grey-09-min.png";
//import background from "images/background.png";

const ImageBackground = styled.img`
  margin: 0 auto;
  /* min-width: 600px; */

  position: relative;

  /* background-size: cover; */

  /* background-position: center center; */
  @media only screen and (max-device-width: 600px) {
    padding-top: 100px;
    width: 250px;
    height: 450px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;

  background-size: cover;
  background-position: center center;
`;

const Content = styled.div`
  position: absolute;

  width: 100vw;
  min-width: 600px;
  display: flex;

  height: 100%;
  flex-direction: row;
  @media only screen and (max-device-width: 600px) {
    min-width: 80vw;
  }
`;

const Video = styled.video`
  height: calc(100vh - 80px);
  max-height: none;
  max-width: none;
`;

const ContentBlock = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;
  padding: 40px 0px;
  margin: 0 auto;
  @media only screen and (max-device-width: 700px) {
    display: ${(props) => (props.hide ? "none" : "block")};
    padding: 20px 0px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding: 20px 9vw;
  color: white;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
`;

const SubTitle = styled.div`
  padding: 0 9vw;
  font-size: 1.2rem;
  font-weight: 300;
  color: white;

  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

function Hero(props) {
  const { isMobile } = props;
  return (
    <Box style={{ zIndex: 1 }} background="#323232">
      <VisibilityControl>
        <Box
          width={["100vw", "90vw"]}
          height="100%"
          position="relative"
          margin="auto"
        >
          <Img
            priority
            layout="responsive"
            objectFit="contain"
            alt="Electronic Beats | Szelektor 2022"
            src={isMobile ? mainImageMobile : mainImage}
          />
        </Box>
        <section id="learn-more"></section>
      </VisibilityControl>
    </Box>
  );
}

export default Hero;

//  <Stack direction={["column", "row"]}>
//    <VStack
//      h={["calc(60vh )", "calc(100vh - 80px)"]}
//      position="relative"
//      order={[2, 1]}
//      w={["100vw", "50vw"]}
//    >
//      <ContentBlock style={{ top: "20px" }}>
//        <div>
//          <Image
//            src="images/eb/telekom-electronic-beats-logo.svg"
//            p={["10px 4vw", "10px 4vw", "10px 4vw", "20px 4vw"]}
//            color="red"
//          />
//          <Heading
//            fontWeight="900"
//            color="#e20074"
//            fontSize={["2rem", "3rem", "4rem", "4rem"]}
//            lineHeight={["2rem", "3rem", "4rem", "4rem"]}
//            w={["90vw", "50vw"]}
//            p={["10px 4vw", "20px 4vw"]}
//          >
//            Electronic Beats válogatás 2022
//          </Heading>

//          <Text
//            w={["90vw", "50vw"]}
//            letterSpacing="2px"
//            p={["0px 4vw"]}
//            fontSize={["sm", "sm", "md", "md"]}
//          >
//            POPPING | CLUBBING | XPERIMENTING
//          </Text>
//          <Box p={["10px 4vw", "20px 4vw"]}>
//            <Button
//              rightIcon={<ArrowForwardIcon />}
//              fontWeight="bold"
//              // colorScheme="teal"

//              variant="outline"
//            >
//              Tudjon meg többet
//            </Button>
//          </Box>
//        </div>
//      </ContentBlock>
//    </VStack>

//    <VStack
//      h={["calc(50vh - 40px)", "calc(100vh - 80px)"]}
//      position="relative"
//      overflow="hidden"
//      w={["100vw", "50vw"]}
//      order={[1, 2]}
//    >
//      {/* <Image
//                 objectFit="cover"
//                 h={["calc(50vh - 40px)", "calc(100vh - 80px)"]}
//                 w={["100vw", "50vw"]}
//                 alt="SafePal Wallet"
//                 src="/images/28-min.jpg"
//               /> */}

//      <ContentBlock>
//        <div>
//          <Heading
//            w={["90vw", "50vw"]}
//            color="white"
//            fontWeight="900"
//            fontSize={["2rem", "3rem", "4rem", "4rem"]}
//            lineHeight={["2rem", "3rem", "4rem", "4rem"]}
//            textShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
//            p={["20px 4vw"]}
//          ></Heading>

//          <Text
//            w={["90vw", "50vw"]}
//            fontSize={["sm", "sm", "md", "md"]}
//            color="white"
//            letterSpacing="2px"
//            textShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
//            p={["0px 4vw"]}
//          ></Text>
//        </div>
//      </ContentBlock>
//    </VStack>
//  </Stack>;
