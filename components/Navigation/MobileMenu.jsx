import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import uiContext from "../../context/uiContext";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Container = styled.div`
  background-color: #232323;
  position: fixed;
  display: flex;
  flex-direction: column;
  font-family: "TeleNeoWeb";
  top: 0;
  right: 0;
  /* left: 0; */
  /* bottom: 0; */
  height: 100vh;
  width: 100vw;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => props.opacity};
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */

  ::-webkit-scrollbar {
    width: 0px; /* remove scrollbar space */
    background: transparent; /* optional: just make scrollbar invisible */
  }
  padding: 20px 0;
`;

const MenuItem = styled.div`
  font-weight: 200;
  padding: 5px 10px;
  color: white;
  margin: 0 auto;
  text-align: left;
  line-height: 170%;
  font-size: 200%;
  cursor: pointer;
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: white;
  }
`;

const SubMenuItem = styled.div`
  font-size: 120%;
  text-align: left;
  font-weight: 200;
  line-height: 150%;
  margin-left: 15px;
`;

const ContentWrapper = styled.div`
  padding: 20px 0 150px 0;
  font-family: "TeleNeoWeb";
`;

function MobileMenu(props) {
  const { menuItems } = props;
  const uiState = useContext(uiContext);

  const [opacity, setOpacity] = useState(0.0001);
  const [isMounted, setIsMounted] = useState(false);

  const clickHandler = () => {
    uiState.setUiState({ ...uiState, isMenuOpen: !uiState.isMenuOpen });
  };

  useEffect(() => {
    document.addEventListener("touchmove", (e) => e.stopPropagation());
    return () => {
      document.removeEventListener("touchmove", (e) => e.stopPropagation());
    };
  }, []);

  useEffect(() => {
    // uiState.isMenuOpen
    //   ? (document.body.style.overflowY = "hidden")
    //   : (document.body.style.overflowY = "auto");
    document.body.classList.toggle("noscroll", uiState.isMenuOpen);
  }, [uiState.isMenuOpen]);

  useEffect(() => {
    if (uiState.isMenuOpen) {
      setIsMounted(true);
      setTimeout(() => {
        setOpacity(1);
      }, 10);
    } else {
      setOpacity(0.001);
      setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [uiState.isMenuOpen]);

  function subMenu(menuItem) {
    if (!menuItem.subMenu) {
      return;
    }
    const { subMenu } = menuItem;
    return subMenu.map((subMenuItem) => {
      return (
        <div style={{ padding: "5px" }} key={subMenuItem.title}>
          <Link
            href={`/${subMenuItem.linkRoute}/[${subMenuItem.linkRoute}]`}
            as={menuItem.link + "/" + subMenuItem.link}
            passHref
          >
            <SubMenuItem onClick={clickHandler}>
              {subMenuItem.title}
            </SubMenuItem>
          </Link>
        </div>
      );
    });
  }

  return isMounted ? (
    <Container opacity={opacity}>
      <ContentWrapper>
        {menuItems.map((menuItem) => {
          const { title, link, externalLink, anchor,anchorUrl, offset } = menuItem;
          return (
            <div>
              {externalLink ? (
                <MenuItem
                  onClick={() => {
                    window.location.href = link;
                  }}
                >
                  {title}
                </MenuItem>
              ) : anchor ? (
                <MenuItem onClick={clickHandler}>
                  {anchorUrl?<Link offset={offset ? offset : 0} href={anchorUrl+anchor}>
                    {title}
                  </Link>
                  :                <AnchorLink offset={offset ? offset : 0} href={anchor}>
                    {title}
                  </AnchorLink>}
                </MenuItem>
              ) : (
                <Link key={link} href={link} passHref>
                  <MenuItem onClick={clickHandler}>{title}</MenuItem>
                </Link>
              )}
              {subMenu(menuItem)}
            </div>
          );
        })}
        <MenuItem onClick={clickHandler}>Bezár</MenuItem>
      </ContentWrapper>
    </Container>
  ) : (
    <></>
  );
}

export default MobileMenu;
