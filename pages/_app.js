import App from "next/app";

import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import UiStore from "../context/UiStore.jsx";

import ScrollPositionProvider from "../components/VisibilityControl/ScrollPositionProvider.jsx";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { appWithTranslation } from "../server/i18n";
import TagManager from "react-gtm-module";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }
  componentDidMount() {
    // const link = document.createElement("link");
    // link.href =
    //   "https://fonts.googleapis.com/css?family=Libre+Franklin:200,400,600";
    // link.rel = "stylesheet";
    // document.head.appendChild(link);
    // const font = new FontFaceObserver("Libre Franklin");
    // const fetchFonts = async () => {
    //   font.load().then(() => {
    //     document.documentElement.classList.add("fonts-loaded");
    //   });
    //   // console.log("font load error");
    // };
    // fetchFonts();

    TagManager.initialize({
      gtmId: "GTM-MW3ZKX3",
    });
    console.log(TagManager);
  }

  render() {
    const { Component, pageProps } = this.props;

    // console.log(`Custom App`);
    return (
      <ChakraProvider>
        <UiStore>
          <ScrollPositionProvider>
            <GoogleReCaptchaProvider
              reCaptchaKey="6Ld7syIeAAAAADG2wnpzBIgVEXtcQWJDhJl7FXbz"
              language="hu"
              // useRecaptchaNet="[optional_boolean_value]"
              // useEnterprise="[optional_boolean_value]"
              scriptProps={{
                async: true, // optional, default to false,
                defer: true, // optional, default to false
                appendTo: "head", // optional, default to "head", can be "head" or "body",
                nonce: undefined, // optional, default undefined
              }}
            >
              <DefaultSeo {...SEO} />
              <Component {...pageProps} />
            </GoogleReCaptchaProvider>
          </ScrollPositionProvider>
        </UiStore>
      </ChakraProvider>
    );
  }
}

export default appWithTranslation(MyApp);
