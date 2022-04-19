import React from "react";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";
import dynamic from "next/dynamic";
import "react-datepicker/dist/react-datepicker.css";

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
const Form = dynamic(() => import("../components/LandingPage/Form"));

const FormWrapper = function (props) {
  const defaultLanguage = props.i18n?.store?.options.defaultLanguage;
  const langId =
    props.i18n.language == defaultLanguage ? "" : props.i18n.language;

  return (
    <Layout {...props}>
      <VStack justifyContent="center" h="90vh" color="#eee" backgroundColor="#323232">

        <Center fontSize="2xl">A jelentkezési határidő lejárt!</Center>
      </VStack>
      {/* <Form /> */}
    </Layout>
  );
};

export default withTranslation(["common", "footer"])(FormWrapper);
