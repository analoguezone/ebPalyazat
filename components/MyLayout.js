import styled, { ThemeProvider } from "styled-components";
import React, { useEffect, useState } from "react";

import Head from "next/head";

import Image from "next/image";

import Header from "./Header";
import FooterContainer from "../components/LandingPage/Footer.jsx";

const theme = {
  color: "#e20074",
  blueGrey: "#7b98ac",
  lightGrey: "#c8c8c8",
  grey: "#c8c8c8",
  darkGray: "63656a",
  primaryColor: "black",
  primaryColorHighlight: "#7edeb5",
  backgroundColor: "#282828", //#333635
};

const layoutStyle = { overflowX: "hidden" };

const Content = styled.div`
  position: relative;
  z-index: 2;
  /* color: white; */
`;
import { Box, useDisclosure } from "@chakra-ui/react";

const Container = styled.div`
  position: relative;
  /* 
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 11px;
  }
  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
  @media screen and (max-width: 800px) {
    font-size: 9px;
  }
  @media screen and (max-width: 700px) {
    font-size: 8px;
  } */
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  h1 {
    font-size: 3.8rem;
    line-height: 4rem;
    font-weight: 600;
    white-space: pre-line;

    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
  .title {
    position: relative;
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 60px;
    white-space: pre-line;

    @media only screen and (max-device-width: 700px) {
      padding: 40px 20px;
    }
  }

  p {
    color: ${(props) => props.theme.darkGray};
    line-height: 1.5rem;
    font-weight: 300;
    /* padding: 0 40px; */

    white-space: pre-line;
    @media only screen and (max-device-width: 700px) {
      font-size: 0.9rem;
      /* padding: 0 20px; */
    }
  }

  /* ul {
    line-height: 200%;
    font-size: 90%;
  } */

  .block {
    padding: 40px 0px;
    @media only screen and (max-device-width: 700px) {
      padding: 0 20px;
    }
  }

  .scale {
  }

  .subtitle {
    font-size: 130%;
    line-height: 160%;
    font-weight: 400;
    color: black;
    text-align: left;

    padding: 20px 40px;
    order: 1;
    hyphens: manual;
    //text-transform: uppercase;
    .highlight {
      color: ${(props) => props.theme.primaryColorHighlight};
    }
    @media only screen and (max-device-width: 700px) {
      padding: 20px;
    }
  }

  .shadow {
    text-shadow: 3px 3px 10px #33333333;
  }

  .box-shadow {
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.75);
  }

  .primary {
    color: ${(props) => props.theme.primaryColor};
  }

  .center {
    text-align: center;
  }

  .justify {
    text-align: justify;
  }

  .error {
    background-color: #ec2828;
    color: white;
    padding: 10px;
    border-radius: 3px;
  }

  .right {
    text-align: right;
  }

  table {
    font-size: 0.9rem;
    width: 100%;
  }
  td {
    width: 50%;
    padding: 5px;
  }
  tr {
  }

  .exceptional {
    font-family: Exceptional;
    line-height: 3.9rem;
  }

  .tafelSans {
    font-family: "Tafel Sans";
  }

  .noMobile {
    @media only screen and (max-device-width: 700px) {
      display: none;
    }
  }

  .noDesktop {
    display: none;
    @media only screen and (max-device-width: 700px) {
      display: block;
    }
  }

  .showOneColumn {
    display: none;
    @media screen and (max-width: 1214px) {
      display: block;
    }
  }

  .showTwoColumn {
    @media screen and (max-width: 1214px) {
      display: none;
    }
  }

  .naked {
    margin: 0;
    padding: 0;
  }
`;

function Layout(props) {
  const defaultLanguage = props.i18n?.store?.options.defaultLanguage;
  const langId =
    props.i18n.language == defaultLanguage ? "" : props.i18n.language || "hu";
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useEffect(() => {
  //   const link = document.createElement("link");
  //   link.href =
  //     "https://fonts.googleapis.com/css?family=Libre+Franklin:200,400,600";
  //   link.rel = "stylesheet";

  //   document.head.appendChild(link);

  //   const font = new FontFaceObserver("Libre Franklin");

  //   const fetchFonts = async () => {
  //     try {
  //       await font.load();
  //       document.documentElement.classList.add("fonts-loaded");
  //     } catch (err) {
  //       console.log("font load error");
  //     }
  //   };

  //   fetchFonts();
  // }, []);

  // useEffect(() => {
  //   window.ecwid_script_defer = true;
  //   window.ecwid_dynamic_widgets = true;
  //   window.ec = window.ec || Object();
  //   window.ec.config = window.ec.config || Object();
  //   // window.ec.config.store_main_page_url = "https://www.safepalwallet.hu";
  //   if (document.getElementById("ecwid-script")) return;
  //   var script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.setAttribute("defer", "defer");
  //   script.src =
  //     "https://app.ecwid.com/script.js?" + "69386864" + "&data_platform=code";
  //   script.id = "ecwid-script";
  //   script.onload = () => {
  //     window.ecwidLoaded = true;
  //   };
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div style={layoutStyle}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 user-scalable=no"
        />
        <meta charSet="utf-8" />

        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favico/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favico/favicon-16x16.png"
        />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          background-color: #323232;
          // color: white;
          font-family: "TeleNeoWeb";
        }

        .noscroll {
          overflow: hidden;
        }

        ul {
          margin-left: 40px;
        }

        @font-face {
          font-family: "TeleNeoWeb";
          src: url("/fonts/TeleNeoWeb-Bold.woff2") format("woff2");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "TeleNeoWeb";
          src: url("/fonts/TeleNeoWeb-Regular.woff2") format("woff2");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "TeleNeoWeb";
          src: url("/fonts/TeleNeoWeb-Medium.woff2") format("woff2");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "TeleNeoWeb";
          src: url("/fonts/TeleNeoWeb-Thin.woff2") format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <Container>
          <Header langId={langId} onOpen={onOpen} />
          <section id="top"></section>
          <Content>
            {React.cloneElement(props.children, {
              onOpen,
              onClose,
              isOpen,
              // setproductAction,
              // productAction,
            })}
            {/* {props.children} */}
          </Content>
          <section id="contact"></section>

          <FooterContainer logo={null} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Layout;

//https://transfonter.org/
