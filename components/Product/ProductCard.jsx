import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Heading,
  Center,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Cart from "../../components/Ecwid/Cart";
import { ProductJsonLd } from "next-seo";

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductAddToCart({ product, children }) {
  const baseUrl = "https://safepalwallet.hu";
  return (
    <Flex
      p={50}
      w={["100vw", "500px"]}
      alignItems="center"
      justifyContent="center"
      itemType="http://schema.org/Product"
    >
      {" "}
      <ProductJsonLd
        productName="product.title"
        images={product.imageUrl}
        description={product.features?.join(", ")}
        brand="SafePal"
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
            url: baseUrl + "p/" + product.link,
            seller: {
              name: "SafePal Wallet",
            },
          },
        ]}
      />
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <Tooltip
          label="Részletek"
          bg="white"
          placement={"top"}
          color={"gray.800"}
          fontSize={"1.2em"}
        >
          <Link href={`/p/${product.link}`} as={`/p/${product.link}`} passHref>
            <Box
              backgroundColor="black"
              style={{
                cursor: "pointer",
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 11%, rgba(223,223,223,1) 100%)",
              }}
            >
              <Image
                src={product.imageURL}
                alt={`${product.title}`}
                roundedTop="lg"
              />
            </Box>
          </Link>
        </Tooltip>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {product.isNew && (
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                backgroundColor="#0560d5"
                color="white"
              >
                {product.tag}
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              pt="2"
            >
              {product.title}
            </Box>
          </Flex>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Heading fontSize="xl">{parseFloat(product.price)} Ft</Heading>
            <Tooltip
              label="Kosárba rakom"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon
                  onClick={() => Ecwid.Cart.addProduct(product.productId)}
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>
          </Flex>
          {/* <Center pt="2">
              <Cart productId={product.productId} />
            </Center> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
