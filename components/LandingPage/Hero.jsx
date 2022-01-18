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
import mainImage from "../../public/images/wallet10s.jpg";
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
  return (
    <div style={{ zIndex: 1 }}>
      <VisibilityControl>
        <Stack direction={["column", "row"]}>
          <VStack
            h={["calc(60vh )", "calc(100vh - 80px)"]}
            position="relative"
            order={[2, 1]}
            w={["100vw", "50vw"]}
          >
            <ContentBlock style={{ top: "20px" }}>
              <div>
                <Image
                  src="/logo/safepal_logo.svg"
                  width={["60%", "60%", "60%", "55%"]}
                  p={["10px 4vw", "10px 4vw", "10px 4vw", "20px 4vw"]}
                  color="red"
                />
                <Heading
                  fontWeight="900"
                  color="#0560d5"
                  fontSize={["2rem", "3rem", "4rem", "4rem"]}
                  lineHeight={["2rem", "3rem", "4rem", "4rem"]}
                  w={["90vw", "50vw"]}
                  p={["10px 4vw", "20px 4vw"]}
                >
                  Biztonság és kényelem bármerre jár
                </Heading>

                <Text
                  w={["90vw", "50vw"]}
                  letterSpacing="2px"
                  p={["0px 4vw"]}
                  fontSize={["sm", "sm", "md", "md"]}
                >
                  100% offline | 30000+ token | EAL 5+ biztonsági chip
                </Text>
                <Box p={["10px 4vw", "20px 4vw"]}>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    fontWeight="bold"
                    // colorScheme="teal"

                    variant="outline"
                  >
                    Tudjon meg többet
                  </Button>
                </Box>
              </div>
            </ContentBlock>
          </VStack>

          <VStack
            h={["calc(50vh - 40px)", "calc(100vh - 80px)"]}
            position="relative"
            overflow="hidden"
            w={["100vw", "50vw"]}
            order={[1, 2]}
          >
            {/* <Image
                objectFit="cover"
                h={["calc(50vh - 40px)", "calc(100vh - 80px)"]}
                w={["100vw", "50vw"]}
                alt="SafePal Wallet"
                src="/images/28-min.jpg"
              /> */}
            {props.isMobile ? (
              <Img src={mainImage} />
            ) : (
              <Video
                autoPlay
                loop
                muted
                webkit-playsinline
                playsinline
                poster={mainImage}
              >
                <source src={"images/wallet10s.mp4"} />
              </Video>
            )}

            <ContentBlock>
              <div>
                <Heading
                  w={["90vw", "50vw"]}
                  color="white"
                  fontWeight="900"
                  fontSize={["2rem", "3rem", "4rem", "4rem"]}
                  lineHeight={["2rem", "3rem", "4rem", "4rem"]}
                  textShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
                  p={["20px 4vw"]}
                >
                  SafePal S1
                </Heading>

                <Text
                  w={["90vw", "50vw"]}
                  fontSize={["sm", "sm", "md", "md"]}
                  color="white"
                  letterSpacing="2px"
                  textShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
                  p={["0px 4vw"]}
                >
                  store | buy | manage | swap | trade | stake
                </Text>
              </div>
            </ContentBlock>
          </VStack>
        </Stack>

        <section id="learn-more"></section>
      </VisibilityControl>
    </div>
  );
}

export default Hero;

{
  /* <Container
style={{
  backgroundImage: "url('" + props.backgroundImage + "')",
  height: "calc(100vh - 80px)",
}}
>
<Content>
  <ContentBlock>
    <div>
      {props.title && <Title className=" ">{props.title}</Title>}

      <SubTitle className=" ">{props.description}</SubTitle>
    </div>
  </ContentBlock>
</Content>
</Container> */
}
