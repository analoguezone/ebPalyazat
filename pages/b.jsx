import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import blogData from "../data/blogData";
import Organizer from "../components/Organizer";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";

export default withTranslation("common")(function BlogCatalog(props) {
  function ellipsis(text) {
    const length = text.length;
    const updatedText = text.substring(0, 100);
    const isLonger = length > updatedText.length;
    return isLonger ? updatedText + "..." : text;
  }

  function BlogPostWithImage(blog) {
    return (
      <Center py={6} px="10" cursor="pointer">
        <NextLink href={`/b/${blog.link}`}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image src={blog?.hero?.imageUrl} layout={"fill"} />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {blog.tags.map((tag) => `${tag} | `)}
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
                height="70px"
              >
                {blog.title}
              </Heading>
              <Text height="80px" color={"gray.500"}>
                {ellipsis(blog.description)}
              </Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <Avatar src={"/images/favico/favicon-96x96.png"} alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{blog.publisher}</Text>
                <Text color={"gray.500"}>
                  {blog.date} · {blog.readTime}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </NextLink>
      </Center>
    );
  }

  if (!blogData) return <div />;
  return (
    <Layout {...props}>
      <NextLink href="/">
        <Box padding={["10px 20px", "20px 50px"]}>
          <div
            style={{
              // paddingBottom: "50px",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >{`< vissza`}</div>
        </Box>
      </NextLink>
      <Center backgroundColor="white" pb="100px">
        <Organizer>
          {blogData?.map((blog) => {
            return BlogPostWithImage(blog);
          })}
        </Organizer>
      </Center>
    </Layout>
  );
});
