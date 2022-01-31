import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect, useContext, useRef } from "react";
import { ScrollPositionContext } from "../components/VisibilityControl/ScrollPositionProvider";

import AnchorLink from "react-anchor-link-smooth-scroll";

import MenuWrapper from "./Navigation/MenuWrapper";
import HamburgerMenu from "./Navigation/HamburgerMenuButton";
import MobileMenu from "./Navigation/MobileMenu";
import VisibilityControl from "./VisibilityControl/VisibilityControl";
import LanguageSelector from "./LanguageSelector";

import { withTranslation } from "../server/i18n";
import { useRouter } from "next/router";

import {
  Box,
  Stack,
  HStack,
  Center,
  Image,
  VStack,
  StackDivider,
  Button,
  Text,
} from "@chakra-ui/react";

const MenuItem = styled.div`
  display: flex;
  user-select: none;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  /* margin-right: 15px; */
  padding: 5px 15px;
  align-items: center;
  text-align: right;
  text-transform: uppercase;
  cursor: pointer;
  /* text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4); */
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
  }
  :hover {
    border-bottom: 1px solid #ffffff77;
    padding-bottom: 4px;
  }
  @media only screen and (max-device-width: 700px) {
    /* display: none; */
    font-size: 1rem;
    margin-right: 0px;
  }
  a {
    color: white;

    text-decoration: none;
    :visited {
      color: white;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  right: 20px
  top: 20px;
  max-width: calc(100vw - 180px);
  justify-content: flex-end;
  z-index: 20;
border-bottom: 1px solid grey;
   @media only screen and (max-device-width: 700px) {
      /* width: 30vw; */
      border-bottom:none;
    }
  img {
    max-width: 450px;
    /* width: 40vw; */
    @media only screen and (max-device-width: 700px) {
      /* width: 30vw; */
      /* border-bottom:none; */
    }
  }

  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  transition: all 0.3s ease-in-out;
  /* height: 50px; */
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  padding: 5px 45px 25px 45px;
  flex-direction: row;
  justify-content: space-between;
  /* z-index: 100; */
  @media only screen and (max-device-width: 700px) {
    padding: 5px 25px 5px 25px;
    z-index: 100;
  }
`;

const SubMenuContainer = styled.div`
  display: flex;
  font-size: 90%;
  font-weight: 200;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  top: 55px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const LogoText = styled(MenuItem)`
  font-weight: 300;
  cursor: auto;
  :hover {
    border: none;
  }
`;

function Header(props) {
  const { t, isOpen, onOpen, onClose } = props;
  const [timer, settimer] = useState(null);

  const router = useRouter();

  const [showSubMenu, setShowSubMenu] = useState(null);
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if (/Mobi/.test(navigator.userAgent)) {
      // mobile!
      setisMobile(true);
    }
  }, []);

  // function initWhenLoaded() {
  //   const ec = document.getElementById("ecwid-script");
  //   if (!window.Ecwid) {
  //     ec.onload = () => {
  //       Ecwid.init();
  //     };
  //   } else {
  //     Ecwid.init();
  //   }
  // }

  // useEffect(() => {
  //   if (!document.getElementById("ecwid-script")) return;
  //   initWhenLoaded();
  //   return () => {
  //     if (typeof Ecwid != "undefined") {
  //       if (typeof Ecwid.destroy === "function") {
  //         Ecwid?.destroy();
  //       }
  //     }
  //   };
  // });

  // useEffect(() => {
  //   if (!ecwidLoaded) return;

  //   cartContainer.current.firstChild.remove();
  //   Ecwid.destroy();
  //   var cartDiv = document.createElement("div");
  //   cartDiv.class = "ec-cart-widget";
  //   cartContainer.current.appendChild(cartDiv);
  //   Ecwid.init();
  // }, [props.productAction]);

  function subMenu(menuItem) {
    if (!menuItem.subMenu) {
      return;
    }
    const { subMenu } = menuItem;
    // const locale = i18n.language //&& i18n.language != "hu"
    //   ? `/${i18n.language && i18n.language}`
    //   : "";
    return (
      //TODO egy debouncer funkcio hogy a menu item elhagyas ne egybol tuntesse el a submenut
      <SubMenuContainer
        onMouseEnter={() => clearTimeout(timer)}
        onMouseLeave={() => setShowSubMenu(null)}
      >
        {subMenu.map((subMenuItem) => {
          return (
            <div style={{ padding: "5px" }} key={subMenuItem.title}>
              <Link
                href={`/${subMenuItem.linkRoute}/${subMenuItem.link}`}
                // href={`${locale}/${subMenuItem.linkRoute}/[${subMenuItem.linkRoute}]`}
                // href={{
                //   pathname: `/${locale}/${subMenuItem.linkRoute}/[${subMenuItem.linkRoute}]`,
                //   query: {
                //     slug: subMenuItem.link,
                //   },
                // }}
                as={menuItem.link + "/" + subMenuItem.link}
                passHref
              >
                <MenuItem onClick={() => setShowSubMenu(null)}>
                  {subMenuItem.title}
                </MenuItem>
              </Link>
            </div>
          );
        })}
      </SubMenuContainer>
    );
  }

  // console.log(i18n);

  // style={{ width: "100%" }}

  var time = function () {};
  return (
    <Wrapper>
      <MenuWrapper>
        {({ menuItemsAtTheHeader, menuItems }) => {
          return (
            <HeaderContainer
              style={
                {
                  // position: "absolute",
                }
              } //, top: "50px"
            >
              {!isMobile &&
                menuItemsAtTheHeader
                  .filter((x) => x.allPages || router.route == "/")
                  .map((menuItem) => {
                    const {
                      title,
                      link,
                      externalLink,
                      anchor,
                      anchorUrl,
                      offset,
                    } = menuItem;
                    return (
                      <div style={{ margin: "auto 0" }} key={title}>
                        <VisibilityControl>
                          {externalLink ? (
                            <MenuItem
                              onMouseEnter={() => {
                                clearTimeout(timer);
                                setShowSubMenu(title);
                              }}
                              onMouseLeave={() =>
                                settimer(
                                  setTimeout(() => {
                                    setShowSubMenu(null);
                                  }, 500)
                                )
                              }
                              onClick={() => {
                                window.open(
                                  link,
                                  "_blank" // <- This is what makes it open in a new window.
                                );
                              }}
                            >
                              {title}
                            </MenuItem>
                          ) : anchor ? (
                            <MenuItem
                              onMouseEnter={() => {
                                clearTimeout(timer);
                                setShowSubMenu(title);
                              }}
                              onMouseLeave={() =>
                                settimer(
                                  setTimeout(() => {
                                    setShowSubMenu(null);
                                  }, 500)
                                )
                              }
                              onClick={() => setShowSubMenu(null)}
                            >
                              {anchorUrl ? (
                                <Link
                                  offset={offset ? offset : 0}
                                  href={anchorUrl + anchor}
                                >
                                  {title}
                                </Link>
                              ) : (
                                <AnchorLink
                                  offset={offset ? offset : 0}
                                  href={anchor}
                                >
                                  {title}
                                </AnchorLink>
                              )}
                            </MenuItem>
                          ) : (
                            <Link href={link} passHref>
                              <MenuItem
                                onMouseEnter={() => {
                                  clearTimeout(timer);
                                  setShowSubMenu(title);
                                }}
                                onMouseLeave={() =>
                                  settimer(
                                    setTimeout(() => {
                                      setShowSubMenu(null);
                                    }, 500)
                                  )
                                }
                                onClick={() => setShowSubMenu(null)}
                              >
                                {title}
                              </MenuItem>
                            </Link>
                          )}

                          {showSubMenu == title && subMenu(menuItem)}
                        </VisibilityControl>
                      </div>
                    );
                  })}

              {isMobile && <MobileMenu menuItems={menuItems} />}
              <HamburgerMenu />
            </HeaderContainer>
          );
        }}
      </MenuWrapper>
      <Link href="/jelentkezem">
        <Button
          position="absolute"
          right={["2", "5"]}
          top={["-1px", "2"]}
          fontFamily="TeleNeoWeb"
          size="md"
          px="2"
          backgroundColor="#e20074"
          color="white"
          colorScheme="magenta"
          // onClick={onOpen}
        >
          JELENTKEZEM
        </Button>
      </Link>

      {/* {!isMobile && <LanguageSelector {...props} />} */}
    </Wrapper>
  );
}

Header.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

export default withTranslation("common")(Header);
