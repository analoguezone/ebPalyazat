import React, { useState, useEffect, useContext, useRef } from "react";
import { ScrollPositionContext } from "../VisibilityControl/ScrollPositionProvider";
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import VisibilityControl from "../VisibilityControl/VisibilityControl";

import { withTranslation } from "../../server/i18n";
import Link from "next/link";
import Contact from "../Contact/Contact";

// const facebookLogo = "/images/facebook.svg";
// const instagramLogo = "/images/instagram.svg";
// const messengerLogo = "/images/messenger.svg";

// const Container = styled.div`
//   width: 100%;

//   height: 100%;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   opacity: 0.001;
//   opacity: 1;
//   transition: all 2s ease-in-out;
// `;

import { Box, Image, Grid, GridItem, HStack } from "@chakra-ui/react";

const WatchContainer = styled.div`
  height: 100%;

  //background-color: black;
`;

const FootContainer = styled.div`
  font-family: "TeleNeoWeb";
  z-index: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  color: white;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;

  padding: 10px 0;
  @media only screen and (max-device-width: 700px) {
    padding: 20px 0;
  }
`;

// const FooterContainerForLinks = styled.div`
//   font-family: "Saira Semi Condensed", sans-serif;
//   background-color: rgb(203, 217, 224);

//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const TitleText = styled.div`
//   font-size: 2rem;
//   padding: 70px 0;
//   padding-top: 40px;
//   text-align: center;
//   line-height: 150%;
//   font-weight: 100;
//   @media only screen and (max-device-width: 700px) {
//     font-size: 1.5rem;
//     padding: 70px 10px;
//     padding-top: 40px;
//   }
// `;

const FooterLinkBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
  flex-grow: 2;
  text-align: left;
  /* justify-content: space-around; */
  @media only screen and (max-device-width: 700px) {
    flex-direction: column;
    order: 1;
    position: relative;

    font-size: 0.7rem;
  }
`;

const FooterLink = styled.div`
  padding: 3px 10px;
  text-align: center;
  @media only screen and (max-device-width: 700px) {
    font-weight: 300;
    padding: 3px 0px;
  }
`;

const SocialLinks = styled.div`
  order: 1;
  display: flex;

  flex-grow: 1;
  height: 30px;

  justify-content: left;
  img {
    height: 30px;
  }

  @media only screen and (max-device-width: 700px) {
    order: 2;

    img {
      height: 20px;
    }
  }
`;

const Copyright = styled.div`
  order: 3;
  flex-grow: 2;
  justify-content: center;
  text-align: right;
  padding-right: 20px;
  font-size: 0.6rem;
`;

const FooterLogo = styled.img`
  width: 150px;
  @media only screen and (max-device-width: 700px) {
    width: 80px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100px;
  max-width: 1280px;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (max-device-width: 700px) {
    padding: 20px 0;
  }

  .noMobile {
    @media only screen and (max-device-width: 700px) {
      display: none;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  /* min-width: 100px; */

  .columnHead {
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
  .text {
    padding: 2px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-device-width: 700px) {
    padding: 20px 10px;

    text-align: center;
  }
`;

function Footer(props) {
  const [watchDivHeight, setWatchDivHeight] = useState(0);
  const [opacity, setOpacity] = useState(0.001);
  const [shiftY, setShiftY] = useState(0);
  const footerDiv = useRef(null);
  const scrollPosition = useContext(ScrollPositionContext);
  const [isMobile, setisMobile] = useState("");
  useEffect(() => {
    if (/Mobi/.test(navigator.userAgent) && window.innerWidth < 400) {
      // mobile!
      setisMobile("mobil_");
    }
  }, []);

  const { t } = props;
  // console.log(t);

  function footerControl(initial) {
    const WatchDivHeight = footerDiv.current.getBoundingClientRect().height;

    setWatchDivHeight(WatchDivHeight);

    const offsetY = window.scrollY + window.innerHeight;
    const contentEnd = document.body.clientHeight - WatchDivHeight;
    const visibleFooter = offsetY - contentEnd;

    // console.log("offsetY", offsetY);
    // console.log("clientHeight", document.body.clientHeight);
    // console.log("contentEnd", contentEnd);
    // console.log("watchdivHeight", WatchDivHeight);
    // console.log("visibleFooter", visibleFooter);
    // console.log("shift", (WatchDivHeight - visibleFooter) / 2);

    if (offsetY > contentEnd) {
      setOpacity(visibleFooter / WatchDivHeight);
      setShiftY((WatchDivHeight - visibleFooter) / 2);
    } else {
      setOpacity(0.001);
    }
  }

  // useEffect(() => {
  //   footerControl();
  // }, []);

  useEffect(() => {
    footerControl();
  }, [opacity, shiftY, watchDivHeight, scrollPosition]);

  return (
    <div>
      <WatchContainer
        style={{ opacity: 1 - opacity, height: watchDivHeight }}
      />

      <FootContainer
        ref={footerDiv}
        style={{ opacity: opacity, transform: "translateY(" + shiftY + "px)" }}
      >
        <Grid
          maxW="1100px"
          p="40px 20px"
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={10}
        >
          <GridItem
            fontWeight="bold"
            letterSpacing="2px"
            fontSize="xs"
            textTransform="uppercase"
            colSpan={1}
            color="#e20074"
            order={[1, 1]}
          >
            {t("Inforációk")}
          </GridItem>
          <GridItem
            fontWeight="bold"
            letterSpacing="2px"
            fontSize="xs"
            textTransform="uppercase"
            colSpan={1}
            color="#e20074"
            order={[2, 2]}
          >
            {t("Tudnivalók")}
          </GridItem>

          <GridItem
            fontWeight="bold"
            letterSpacing="2px"
            fontSize="xs"
            textTransform="uppercase"
            colSpan={2}
            order={[6, 3]}
          >
            {/* {t("írjon nekünk!")} */}
          </GridItem>

          <GridItem
            letterSpacing="1px"
            fontSize="xs"
            colSpan={1}
            order={[4, 3]}
          >
            {t("")}
            Electronicbeats.hu
            <Box letterSpacing="1px" fontSize="100%" p="10px 0">
              <HStack>
                <img
                  width="10px"
                  height="10px"
                  alt="mail"
                  src="/images/icon_mail-min.png"
                />
                <Box>
                  <a href="mailto:hungary@electronicbeats.net">
                    hungary(@)electronicbeats(.)net
                  </a>
                </Box>
              </HStack>
            </Box>
            <Box letterSpacing="1px" fontSize="80%" p="10px 0">
              <br className="noMobile" />
              <br className="noMobile" />
              Copyright 2022 Electronic Beats.
            </Box>
          </GridItem>
          <GridItem letterSpacing="" fontSize="xs" colSpan={1} order={[5, 4]}>
            {t("")}
            <Box letterSpacing="1px" fontSize="100%" p="0px 0">
              <Link href="/feltetelek">Jelentkezési feltételek</Link>
            </Box>
            <br />
            <Box letterSpacing="1px" fontSize="100%" p="0px 0">
              <Link href="/adatvedelmi_nyilatkozat">
                Adatvédelmi Nyilatkozat
              </Link>
            </Box>
          </GridItem>
          <GridItem colSpan={2} order={[6, 6]}>
            {/* <Contact {...props} /> */}
          </GridItem>
        </Grid>

        <FooterLinkBar>
          <Copyright>Powered by 1data Solutions</Copyright>
        </FooterLinkBar>
      </FootContainer>
    </div>
  );
}

export default withTranslation("footer")(Footer);
