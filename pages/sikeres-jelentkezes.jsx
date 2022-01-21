import React from "react";
import Layout from "../components/MyLayout";
import { withTranslation } from "../server/i18n";
import dynamic from "next/dynamic";
const Success = dynamic(() => import("../components/LandingPage/Success"));

const SuccessWrapper = function (props) {
  const defaultLanguage = props.i18n?.store?.options.defaultLanguage;
  const langId =
    props.i18n.language == defaultLanguage ? "" : props.i18n.language;

  return (
    <Layout {...props}>
      <Success />
    </Layout>
  );
};

export default withTranslation(["common", "footer"])(SuccessWrapper);
