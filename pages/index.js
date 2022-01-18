import Layout from "../components/MyLayout";
import LandingPageContainer from "../components/LandingPageContainer";
import { withTranslation } from "../server/i18n";

const Index = (props) => {
  const defaultLanguage = props.i18n?.store?.options.defaultLanguage;
  const langId =
    props.i18n.language == defaultLanguage ? "" : props.i18n.language;

  return (
    <Layout {...props}>
      <LandingPageContainer langId={langId} {...props} />
    </Layout>
  );
};

export default withTranslation(["common", "footer"])(Index);
