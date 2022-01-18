import Layout from "../../components/MyLayout";
import React, { useEffect, useState } from "react";
import VisibilityControl from "../../components/VisibilityControl/VisibilityControl.jsx";
import Hero from "../../components/LandingPage/Hero";
import MaxWidth from "../../components/MaxWidth";
import ContentBlockContainer from "../../components/LandingPage/ContentBlockContainer";

import styled from "styled-components";
import blogs from "../../data/blogData";
import blogsContent from "../../data/blogContent";
import { NextSeo, ArticleJsonLd } from "next-seo";

import { useRouter } from "next/router";
import { withTranslation } from "../../server/i18n";
import ImageGallery from "react-image-gallery";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Stack,
  HStack,
  Center,
  Tag,
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
} from "@chakra-ui/react";

import Cart from "../../components/Ecwid/Cart";

import Organizer from "../../components/Organizer";

import ProductCard from "../../components/Product/ProductCard";
import productData from "../../data/productData";
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

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" backgroundColor="#0560d5" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const Services = (props) => {
  const router = useRouter();
  const baseUrl = "https://safepalwallet.hu";
  // const [service, setservice] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    //   setservice(blogs.find(service => blog.link == props.services));
  }, []);
  const { t, i18n } = props;
  console.log(i18n.language);

  const { id } = router.query;

  const blog = blogs.find((blog) => blog.link == id);
  console.log(id);
  console.log(blog);
  if (!blog) return <div></div>;

  function imageStackCreator(subfolder, count) {
    const stack = [];
    for (let i = 1; i <= count; i++) {
      stack.push({
        original: subfolder + i + "-min.png",
        thumbnail: subfolder + "thumbnail/" + i + "-min.png",
        originalHeight: "515px",
        originalWidth: "1024px",
        originalAlt: blog?.title || "SafePal Hardver Kriptotárca",
        thumbnailAlt: blog?.title || "SafePal Hardver Kriptotárca",
      });
    }

    return stack;
  }
  const content = blogsContent[blog.link.replace(/-/g, "_")];
  // const images = imageStackCreator("/images/" + blog.link + "/", 8);
  return (
    <Layout {...props}>
      <NextSeo
        title={blog.title + " " + " | SafePal Wallet"}
        description={blog.description}
        openGraph={{
          title: blog.title + " " + " | SafePal Wallet",
          description: blog.description,
          url: baseUrl + "b/" + blog.link,
          type: "article",
          article: {
            publishedTime: blog?.date,
            modifiedTime: blog?.date,
            // expirationTime: "2022-12-21T22:04:11Z",
            section: "Section II",
            // authors: [
            //   "https://www.example.com/authors/@firstnameA-lastnameA",
            //   "https://www.example.com/authors/@firstnameB-lastnameB",
            // ],
            tags: blog.tags,
          },
          images: [
            {
              url: baseUrl + blog?.hero?.imageUrl,
              width: blog?.hero?.width || 800,
              height: blog?.hero?.heigth || 500,
              alt: blog.title,
            },
          ],
          site_name: "SafePal Wallet - Kriptotárca",
        }}
      />
      <ArticleJsonLd
        url={`${baseUrl}/b/${blog.link}`}
        title={blog?.title}
        images={[baseUrl + blog?.hero?.imageUrl]}
        datePublished={blog?.date}
        authorName={blog?.publisher}
        publisherName={blog?.publisher}
        publisherLogo="/images/favico/favicon-96x96.png"
        description={blog?.description}
      />

      <Box
        onClick={() => router.back()}
        padding={["10px 20px", "20px 50px"]}
        fontSize="2rem"
        cursor="pointer"
      >{`< vissza`}</Box>

      <section id="tovabb"></section>
      <Center w="100vw" backgroundColor="white">
        <VStack backgroundColor="white">
          <Stack maxW="1400px" direction={["column", "row"]} align="flex-start">
            <Box
              w={["100vw", "50vw"]}
              p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
            >
              <VisibilityControl effect="fade" always={false} lazyload>
                <Image
                  src={blog?.hero?.imageUrl}
                  width={blog?.hero?.width || "800"}
                  height={blog?.hero?.height || "500"}
                />
              </VisibilityControl>
            </Box>
            <VStack
              w={["100vw", "50vw"]}
              p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
              alignItems="flex-start"
            >
              <BlogTags tags={blog.tags} />
              <Heading
                fontWeight="900"
                w="100%"
                // color="#0560d5"
                p={["20px 0vw", "20px 0vw"]}
                fontSize={["1.5rem", "1.2rem", "1.5rem", "2.5rem"]}
                lineHeight={["1.5rem", "1.2rem", "1.5rem", "2.5rem"]}
              >
                {blog.title}
              </Heading>
              <Text fontSize={["md", "sm", "sm", "md"]} paddingBottom="15px">
                {blog.description}
              </Text>
              <HStack>
                <Image
                  src="/images/favico/favicon-96x96.png"
                  width="18"
                  height="18"
                />
                <Heading fontSize={["md", "sm", "sm", "md"]} fontWeight="600">
                  {blog.publisher}
                </Heading>
                {"-"}
                <Text fontSize={["md", "sm", "sm", "md"]}>{blog.date}</Text>
              </HStack>
              <HStack>
                <Heading fontSize={["md", "sm", "sm", "md"]} fontWeight="600">
                  Idő:
                </Heading>
                <Text fontSize={["md", "sm", "sm", "md"]}>{blog.readTime}</Text>
              </HStack>
            </VStack>
          </Stack>
          {content(props)}
          <section id="termekek"></section>

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
      </Center>
    </Layout>
  );
};

// Services.getInitialProps = async function (context) {
//   return context.query;
// };

export default withTranslation("common")(Services);
