import React from "react";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";
import dynamic from "next/dynamic";
import "react-datepicker/dist/react-datepicker.css";
const Form = dynamic(() => import("../components/LandingPage/Form"));

const FormWrapper = function (props) {
  const defaultLanguage = props.i18n?.store?.options.defaultLanguage;
  const langId =
    props.i18n.language == defaultLanguage ? "" : props.i18n.language;

  return (
    <Layout {...props}>
      <Form />
    </Layout>
  );
};

export default withTranslation(["common", "footer"])(FormWrapper);
