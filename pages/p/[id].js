import Layout from "../../components/MyLayout";
import React, { useEffect, useState } from "react";
import VisibilityControl from "../../components/VisibilityControl/VisibilityControl.jsx";
import Hero from "../../components/LandingPage/Hero";
import MaxWidth from "../../components/MaxWidth";
import ContentBlockContainer from "../../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";
import products from "../../data/productData";
import productsContent from "../../data/productsContent";
import { NextSeo, ProductJsonLd } from "next-seo";

import { useRouter } from "next/router";
import { withTranslation } from "../../server/i18n";
import ImageGallery from "react-image-gallery";
import Cart from "../../components/Ecwid/Cart";
import Image from "next/image";
import Link from "next/link";

import { useScript } from "usehooks-ts";

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
  ListItem,
  ListIcon,
  Input,
} from "@chakra-ui/react";

import EcwidProductPage from "../../components/Ecwid/EcwidProductPage";

import { MdCheckCircle } from "react-icons/md";

const Title = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: bold;

  letter-spacing: 3px;
  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
    padding-bottom: 20px;
  }
`;

const SubTitle = styled.div`
  margin: 0;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;

  letter-spacing: 3px;
  @media only screen and (max-width: 700px) {
    font-size: 0.8rem;
    text-align: left;
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

const Services = (props) => {
  const baseUrl = "https://safepalwallet.hu";
  // const [service, setservice] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    //   setservice(products.find(service => product.link == props.services));
  }, []);
  const { t, i18n } = props;
  console.log(i18n.language);
  const router = useRouter();
  const { id } = router.query;

  const [toBuy, settoBuy] = useState(1);

  const product = products.find((product) => product.link == id);
  console.log(id);
  console.log(product);
  if (!product) return <div></div>;

  function imageStackCreator(subfolder, count) {
    const stack = [];
    for (let i = 1; i <= count; i++) {
      stack.push({
        original: subfolder + i + "-min.png",
        thumbnail: subfolder + "thumbnail/" + i + "-min.png",
        originalHeight: "515px",
        originalWidth: "1024px",
        originalAlt: product?.title || "SafePal Hardver Kriptotárca",
        thumbnailAlt: product?.title || "SafePal Hardver Kriptotárca",
      });
    }

    return stack;
  }

  const [quantity, setquantity] = useState(null);

  function updateQty() {
    Ecwid.Cart.get(function (cart) {
      const thisProduct = cart?.items?.find(
        (item) => item.product.id == product.productId
      );
      const qty = thisProduct ? thisProduct.quantity : 0;
      setquantity(qty);
    });
  }

  const status = useScript(
    `https://app.ecwid.com/script.js?69386864&data_platform=code`
  );

  useEffect(() => {
    if (typeof Ecwid !== "undefined") {
      // jQuery is loaded => print the version
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      // Ecwid?.getOwnerId ? alert(Ecwid?.getOwnerId()) : alert("initialising");
      Ecwid.OnAPILoaded.add(function () {
        console.log("Ecwid storefront JS API has loaded");
        Ecwid.OnCartChanged.add(function (cart) {
          updateQty();
        });

        updateQty();
      });
    }
    return () => {
      Ecwid.OnCartChanged.clear(function (cart) {
        updateQty();
      });
    };
  }, [status]);

  // useEffect(() => {

  //   updateQty();
  //   Ecwid.OnCartChanged.add(function (cart) {
  //     updateQty();
  //   });
  //   return () => {
  //     Ecwid.OnCartChanged.clear(function (cart) {
  //       updateQty();
  //     });
  //   };
  // });

  // const qtyCart =
  const content = productsContent[product.link.replace(/-/g, "_")];
  // const images = imageStackCreator("/images/" + product.link + "/", 8);
  return (
    <Layout {...props}>
      <NextSeo
        title={product.title + " " + " | SafePal Wallet"}
        description={product.features?.join(", ")}
        openGraph={{
          type: "website",
          title: product.title + " " + " | SafePal Wallet",
          description: product.features?.join(", "),
          url: baseUrl + "p/" + product.link,
          images: [
            {
              url: baseUrl + product.imageURL,
              width: 800,
              height: 600,
              alt: product.title + product.features?.join(", "),
            },
          ],
          site_name: "SafePal Wallet - Kriptotárca",
        }}
      />
      <ProductJsonLd
        productName={product.title}
        images={baseUrl + product.imageURL}
        description={product.features?.join(", ")}
        brand="SafePal"
        sku={product.sku}
        mpn={product.productId}
        manufacturerName="SafePal"
        manufacturerLogo={baseUrl + "logo/safepal_logo.svg"}
        slogan="Kényelem és biztonság mindenhol."
        releaseDate="2021-02-05T08:00:00+08:00"
        aggregateRating={{
          ratingValue: "4.8",
          reviewCount: "89",
        }}
        offers={[
          {
            price: product.price,
            priceCurrency: "HUF",
            priceValidUntil: "2022-11-05",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            url: baseUrl + `/p/${product.link}`,
            seller: {
              name: "SafePal Wallet",
            },
          },
        ]}
      />
      <Link href="/">
        <Box
          padding={["10px 20px", "20px 50px"]}
          fontSize="2rem"
          cursor="pointer"
        >{`< vissza`}</Box>
      </Link>
      <section id="termekek"></section>
      <Center w="100vw" backgroundColor="white">
        <VStack backgroundColor="white">
          <Stack
            maxW="1400px"
            direction={["column", "row"]}
            align="flex-start"
            pb={["20px", 0]}
          >
            <Box
              w={["100vw", "60vw"]}
              p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
            >
              <VisibilityControl effect="fade" always={false} lazyload>
                <ImageGallery
                  // showThumbnails={false}
                  autoPlay={false}
                  lazyLoad={true}
                  showPlayButton={false}
                  items={imageStackCreator(
                    "/images/" + product.link + "/",
                    8,
                    product
                  )}
                />
              </VisibilityControl>
            </Box>
            <VStack
              w={["100vw", "40vw"]}
              p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
              alignItems="flex-start"
            >
              <Heading
                fontWeight="900"
                w="100%"
                // color="#0560d5"
                p={["20px 0vw", "20px 0vw"]}
                pb="0"
                fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
                lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
              >
                {product.title}
              </Heading>
              <div
                style={{ fontSize: "80%" }}
                // class="EanCode"
                itemprop="brand"
                itemtype="https://schema.org/Brand"
                itemscope
              >
                <meta itemprop="name" content="Safepal" />
                Safepal
              </div>
              <List
                fontSize={["xs", "xs", "lg", "lg"]}
                spacing={1}
                pr="5vw"
                w="100%"
              >
                {product.features?.map((feature) => {
                  return (
                    <ListItem key={feature}>
                      <ListIcon as={MdCheckCircle} color="blue.500" />
                      {feature}
                    </ListItem>
                  );
                })}
              </List>

              {/* <HStack pt="5">
                <Heading fontSize={["md", "sm", "sm", "md"]} fontWeight="600">
                  Garancia:
                </Heading>
                <Text fontSize={["md", "sm", "sm", "md"]}>
                  1 év gyártói garancia
                </Text>
              </HStack> */}
              <Stack direction={["column", "row"]}>
                <HStack pt="2">
                  <Heading
                    fontSize={["3xl", "lg", "lg", "3xl"]}
                    fontWeight="300"
                  >
                    {product.price} Ft
                  </Heading>
                </HStack>
                <HStack pt="2">
                  <Heading
                    color="gray.500"
                    fontSize={["md", "sm", "sm", "md"]}
                    fontWeight="300"
                  >
                    Az ár tartalmazza ÁFA-t (
                    {product.price - Math.round(product.price / 1.27)} Ft )
                  </Heading>
                </HStack>
              </Stack>

              <HStack pt="2">
                <Heading fontSize={["md", "sm", "sm", "md"]} fontWeight="600">
                  Átvehető:
                </Heading>
                <Text fontSize={["md", "sm", "sm", "md"]}>
                  {product.status}
                </Text>
              </HStack>
              {quantity ? (
                <Heading fontSize="lg">{`${quantity} darab a kosárban`}</Heading>
              ) : null}
              <Box py="20px">
                <HStack pb="5px">
                  <Heading fontSize="lg">{`Mennyiség`}</Heading>
                  <Input
                    value={toBuy}
                    onChange={(e) => settoBuy(e.target.value)}
                    placeholder="Basic usage"
                  />
                </HStack>
                <Button
                  my="5px"
                  onClick={() => {
                    Ecwid.Cart.addProduct({
                      id: product.productId,
                      quantity: toBuy,
                    });

                    settoBuy(1);
                  }}
                  width="100%"
                >
                  Továbbiak hozzáadása
                </Button>
                <Button
                  my="5px"
                  onClick={() => Ecwid.openPage("cart")}
                  width="100%"
                  colorScheme="blue"
                >
                  Tovább a pénztárhoz
                </Button>
              </Box>
              {/* <Center w="100%" pt="2">
                <Cart productId={product.productId} />
              </Center> */}
            </VStack>
          </Stack>
          {content(props)}
        </VStack>
      </Center>
    </Layout>
  );
};

Services.getInitialProps = async function (context) {
  return context.query;
};

export default withTranslation("common")(Services);
