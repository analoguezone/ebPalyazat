import React, { useState } from "react";

import VisibilityControl from "../VisibilityControl/VisibilityControl.jsx";
import { Button } from "../Button";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";

import { Box, Image, Grid, GridItem } from "@chakra-ui/react";

const Container = styled.div`
  form {
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      font-size: 80%;
      text-align: left;
      padding: 10px 5px;
    }
    input {
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: 100%;
      background-color: ${(props) => props.theme.backgroundColor};
      border: 1px solid #ffffff6a;
    }

    textarea {
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: 100%;
      resize: none;
      background-color: ${(props) => props.theme.backgroundColor};
      border: 1px solid #ffffff6a;
    }
  }
`;

const SendButton = styled(Button)`
  border: 1px solid #ffffff6a;
  background-color: #ffffffbb;
  color: black;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: row;
`;
const ContentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 50%;
  max-width: 50%;

  @media screen and (max-width: 800px) {
    flex: 0 0 100%;
    max-width: 100%;
    display: ${(props) => (props.hideOnMobile ? "none" : "flex")};
  }
`;

const Panel = styled.div`
  background-color: #495167db;
  color: white;
  display: flex;
  /* width: 100%;
  min-width: 350px;
  margin: 50px auto; */
  border-radius: 10px;
`;

const contact_backgroundImage = "/images/Holnap_web_photo_06-min.png";

function Contact(props) {
  const { t } = props;
  const [success, setSuccess] = useState(false);
  const [sending, setsending] = useState(false);
  const [state, setstate] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
    subject: false,
  });
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      emailIsValid(value)
        ? setError({ ...error, [name]: false })
        : setError({ ...error, [name]: true });
    }
    setstate({ ...state, [name]: value });
  }
  // console.log(error);

  function isValidationError() {
    const keys = Object.keys(error);
    var failed = false;
    keys.forEach((key) => {
      if (!failed && error[key]) {
        failed = true;
      }
    });
    return failed;
  }

  async function submitHandler() {
    console.log("submit");
    if (state.email == "") {
      setError({ ...error, email: true });
      return;
    }

    const config = {
      method: "post",
      body: JSON.stringify(state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    setsending(true);

    const res = await fetch("/api/message", config);
    const data = await res.json();
    if (data.message == "success") {
      setSuccess(true);
    }
    setsending(false);
  }

  return (
    <Container>
      {sending || success ? (
        <VisibilityControl always={true}>
          <form>
            {success ? (
              <div>
                <h2>Üzenetét fogadtuk!</h2>
                <h3>Kollégánk hamarosan felkeresi Önt!</h3>
                <SendButton
                  onClick={() => {
                    setSuccess(false);
                    setsending(false);
                  }}
                  // backgroundColor="#001f60"
                >
                  Bezár
                </SendButton>
              </div>
            ) : (
              <h2>Feldolgozás folyamatban...</h2>
            )}
          </form>
        </VisibilityControl>
      ) : (
        <VisibilityControl always={true}>
          <form className="form-group" onSubmit={submitHandler}>
            <Grid maxW="1200px" p="0" templateColumns="repeat(3, 1fr)" gap={5}>
              <GridItem
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="xs"
                colSpan={1}
              >
                <input
                  type="text"
                  onBlur={handleUserInput}
                  name="name"
                  placeholder={t("Név*")}
                />
              </GridItem>
              <GridItem
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="xs"
                colSpan={1}
              >
                {error.email && (
                  <div className="error">A megadott email cím érvénytelen</div>
                )}

                <input
                  type="email"
                  onBlur={handleUserInput}
                  name="email"
                  placeholder={t("Email*")}
                />
              </GridItem>
              <GridItem
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="xs"
                colSpan={1}
              >
                <input
                  type="subject"
                  onBlur={handleUserInput}
                  name="subject"
                  placeholder={t("Tárgy*")}
                />
              </GridItem>
              <GridItem
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="xs"
                colSpan={3}
              >
                <textarea
                  type="text"
                  onBlur={handleUserInput}
                  rows="6"
                  name="message"
                  placeholder={t("Üzenet")}
                />
              </GridItem>
              <GridItem
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="xs"
                colSpan={3}
              >
                <SendButton
                  backgroundColor="#495f8e"
                  disabled={isValidationError()}
                  onClick={submitHandler}
                >
                  Elküld
                </SendButton>
              </GridItem>
            </Grid>
          </form>
        </VisibilityControl>
      )}
    </Container>
  );
}

export default Contact;
