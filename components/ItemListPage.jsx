import Layout from "./MyLayout";
import React, { useEffect, useState } from "react";
import VisibilityControl from "./VisibilityControl/VisibilityControl.jsx";
import Hero from "./LandingPage/Hero";
import MaxWidth from "./MaxWidth";
import NextLink from "next/link";
import styled from "styled-components";

import { NextSeo } from "next-seo";

import { useRouter } from "next/router";
import { withTranslation } from "../server/i18n";

import {
  Box,
  Stack,
  HStack,
  Center,
  VStack,
  StackDivider,
  Text,
  Link,
} from "@chakra-ui/react";

import Image from "next/image";

const Title = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: bold;

  letter-spacing: 3px;
  @media only screen and (max-device-width: 700px) {
    font-size: 1.6rem;
  }
`;

const ItemTitle = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;

  letter-spacing: 2px;
  width: 100%;
`;

const ItemSubTitle = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 1rem;

  letter-spacing: 1px;
  width: 100%;
`;

const TovabbOlvasom = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 0.7rem;
  padding-top: 16px;
  font-weight: bold;

  letter-spacing: 1px;
  width: 100%;
  cursor: pointer;
`;
const Dot = styled.div`
  background-color: white;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  @media only screen and (max-device-width: 700px) {
    height: 5px;
    width: 5px;
  }
`;

const TwoCollumn = styled.div`
  /* column-count: 2;
  column-gap: 40px; */
  color: ${(props) => props.theme.color};
  max-width: 1200px;
  @media only screen and (max-device-width: 700px) {
    column-count: 1;
  }
  @media (max-width: 900px) {
    column-count: 1;
  }
  .p {
    padding: 0;
  }
`;

const ItemListPage = (props) => {
  // const [service, setservice] = useState(null);
  // useEffect(() => {
  //   setservice(items.find(service => project.link == props.services));
  // }, []);
  const { t, i18n, items } = props;

  if (!items) return <div></div>;

  return (
    <>
      <NextSeo
        title="SafePal Wallet"
        description="Megbízhatóság. Lendület. Rugalmasság. Generálkivitelezés az ország egész területén."
        openGraph={{
          title: " | SafePal Wallet",
          description:
            "Megbízhatóság. Lendület. Rugalmasság. Generálkivitelezés az ország egész területén.",
          images: [
            {
              url: `/images/Archibona_website_1280x_photo1-min.jpg`,
              width: 800,
              height: 600,
              alt: "Archibona",
            },
          ],
          site_name: "SafePal Wallet",
        }}
      />
      <Hero
        {...props}
        title={t("mainTitle")}
        description={t("mainShortDescription")}
        backgroundImage={`/images/Archibona_website_1280x_photo1-min.jpg`}
      />
      <Center p="20" backgroundColor="" height="">
        <Title>{props.title}</Title>
      </Center>

      <div className="background">
        <Center>
          <Box w={["100%", "1060px"]}>
            {items
              .filter((x) => x.description)
              .map((project, index) => {
                return (
                  <VisibilityControl key={index} effect="fade" always={false}>
                    <Stack
                      direction={["column", "row"]}
                      spacing={"40px"}
                      mt="12"
                      mb="12"
                      bg="#c8c8c8"
                    >
                      <VStack
                        w={["100%", "50%"]}
                        p={["20px", "50px"]}
                        style={{ overflow: "hidden" }}
                        alignItems="left"
                      >
                        <VisibilityControl effect="left" always={false}>
                          <ItemTitle fontSize="lg">{project.title}</ItemTitle>

                          <ItemSubTitle>{project.subtitle}</ItemSubTitle>
                        </VisibilityControl>{" "}
                        <VisibilityControl effect="left" always={false}>
                          <Text
                            color="gray.500"
                            w={["100%"]}
                            fontSize="xs"
                            className={"justify"}
                          >
                            {project?.description?.substring(0, 200)}
                          </Text>
                        </VisibilityControl>{" "}
                        <VisibilityControl effect="left" always={false}>
                          <HStack w="100%" pt="4">
                            <Dot></Dot>
                            <Dot></Dot>
                            <Dot></Dot>
                          </HStack>
                        </VisibilityControl>{" "}
                        <VisibilityControl effect="left" always={false}>
                          <NextLink
                            href={`${project.linkRoute}/${project.link}`}
                            passHref
                          >
                            <TovabbOlvasom>Tovább olvasom</TovabbOlvasom>
                          </NextLink>
                        </VisibilityControl>
                      </VStack>

                      <Box w={["50%"]}>
                        <Box h="100%">
                          <div
                            style={{
                              backgroundImage: "url('" + project.cover + "')",
                              height: "inherit",
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                            }}
                          ></div>
                        </Box>
                      </Box>
                    </Stack>
                  </VisibilityControl>
                );
              })}
          </Box>
        </Center>

        <section id="quality"></section>
        <Box h={["50px", "120px"]}></Box>
      </div>
    </>
  );
};

// Services.getInitialProps = async function(context) {
//   return context.query;
// };

export default withTranslation("common")(ItemListPage);
