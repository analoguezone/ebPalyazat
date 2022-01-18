import App from "next/app";

import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import UiStore from "../context/UiStore.jsx";

import ScrollPositionProvider from "../components/VisibilityControl/ScrollPositionProvider.jsx";

import { appWithTranslation } from "../server/i18n";

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
  }

  render() {
    const { Component, pageProps } = this.props;

    // console.log(`Custom App`);
    return (
      <ChakraProvider>
        <UiStore>
          <ScrollPositionProvider>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </ScrollPositionProvider>
        </UiStore>
      </ChakraProvider>
    );
  }
}

export default appWithTranslation(MyApp);
