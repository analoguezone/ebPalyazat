import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";

import languages from "../data/languages";
import { i18n } from "../server/i18n";

const MenuItem = styled.div`
  display: flex;

  color: ${(props) => props.theme.primaryColor};
  font-weight: 300;
  font-size: 0.8rem;
  /* margin-right: 15px; */
  padding: 5px 15px;
  align-items: center;
  text-align: center;
  cursor: pointer;
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
    font-size: 0.6rem;
    margin-right: 0px;
  }
  a {
    color: ${(props) => props.theme.primaryColor};

    text-decoration: none;
    :visited {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;

const Chevron = styled.div`
  position: relative;

  text-align: center;
  /* padding: 2px; */
  margin-left: 10px;
  margin-top: 4px;
  height: 5px;
  width: 5px;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20%;
    width: 51%;
    background: white;
    transform: skew(0deg, 40deg);
  }
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 20%;
    width: 50%;
    background: white;
    transform: skew(0deg, -40deg);
  }
`;

const SubMenuContainer = styled.div`
  display: flex;
  font-size: 90%;
  font-weight: 200;
  flex-direction: column;
  flex-wrap: wrap;
  position: absolute;
  top: 40px;
  background-color: black;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

export default function LanguageSelector(props) {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [timer, settimer] = useState(null);

  const languageA = i18n.language && i18n.language;

  const actualLanguageId =
    i18n.language && languages.find((x) => x.key == languageA);
  const actualLanguage = actualLanguageId && actualLanguageId.label;
  return (
    <div
      style={{
        margin: "auto 0",
        position: "absolute",
        right: 0,
        paddingRight: "20px",
      }}
      key={"language"}
    >
      <MenuItem
        onMouseEnter={() => {
          clearTimeout(timer);
          setShowSubMenu("language");
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
        {actualLanguage}
        <Chevron />
      </MenuItem>
      {showSubMenu == "language" && (
        <SubMenuContainer
          onMouseEnter={() => clearTimeout(timer)}
          onMouseLeave={() => setShowSubMenu(null)}
        >
          {languages
            .filter((x) => x.key != i18n.language)
            .map((languagesItem) => {
              return (
                <div style={{ padding: "5px" }} key={languagesItem.key}>
                  <MenuItem
                    onClick={() => i18n.changeLanguage(languagesItem.key)}
                  >
                    {languagesItem.label}
                  </MenuItem>
                </div>
              );
            })}
        </SubMenuContainer>
      )}
    </div>
  );
}
