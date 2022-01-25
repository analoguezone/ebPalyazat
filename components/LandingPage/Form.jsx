import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
import {
  Box,
  Stack,
  HStack,
  Center,
  VStack,
  Text,
  Divider,
  Img,
  Button,
  Heading,
  Grid,
  Select,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Checkbox,
} from "@chakra-ui/react";
import styled from "styled-components";
import VisibilityControl from "../VisibilityControl/VisibilityControl.jsx";
import fetch from "isomorphic-unfetch";
const Container = styled.div`
  background-color: #232323;
  form {
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    .error {
      color: red;
      position: absolute;
    }

    label {
      font-size: 80%;
      text-align: left;
      padding: 10px 5px;
    }
    input,
    select {
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: 100%;
      background-color: ${(props) => props.theme.backgroundColor};
      border: 1px solid #ffffff6a;
      color: white;
    }

    textarea {
      display: flex;
      width: 100%;
      padding: 10px;
      font-size: 100%;
      resize: none;
      background-color: ${(props) => props.theme.backgroundColor};
      border: 1px solid #ffffff6a;
      color: white;
    }
  }
`;
// const SendButton = styled(Button)`
//   border: 1px solid #ffffff6a;
//   background-color: #ffffffbb;
//   color: black;
// `;

export default function Form(props) {
  const { isOpen, onOpen, onClose } = props;
  const router = useRouter();
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState();
  const [state, setstate] = useState({
    alkoto_muveszneve: "",
    alkotas_cime: "",
    alkotas_stilusa: "Club",
    alkotas_hossza: "",
    alkotas_sebessege: "",
    alkotas_keletkezesenek_idopontja: "",
    leiras: "",
    megjelent_zenei: "",
    polgari_nev: "",
    szuletesi_ido: "",
    szuletesi_hely: "",
    lakcim: "",
    email: "",
    soundcloud_link: "",
    honnan_hallottal: "",
    honnan_hallottal_reszletek: " ",
    egyeb_info: "n/a",
    feltetelek: false,
  });
  const [success, setSuccess] = useState(false);
  const [sending, setsending] = useState(false);
  const [mandatory, setmandatory] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("submit");

    return token;
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  useEffect(() => {
    const keys = Object.keys(state);
    let errorCount = 0;
    keys.forEach((key) => {
      if (state[key] == "" || !state[key]) errorCount += 1;
    });
    if (errorCount == 0) setmandatory(true);
    return () => {
      setmandatory(false);
    };
  }, [state]);

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
    if (e.target.type == "checkbox") {
      setstate({ ...state, [name]: e.target.checked });
    } else {
      setstate({ ...state, [name]: value });
    }
  }

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

  const submitHandler = useCallback(
    async function submitHandler() {
      const captchaToken = await handleReCaptchaVerify();
      // console.log("[cp]", captchaToken);
      if (state.email == "") {
        setError({ ...error, email: true });
        return;
      }

      const config = {
        method: "post",
        body: JSON.stringify({ ...state, captchaToken }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      setsending(true);

      const res = await fetch("/api/sendForm", config);
      const data = await res.json();
      if (data.message == "success") {
        // setsending(false);
        router.push("/sikeres-jelentkezes");
      }
      setsending(false);
    },
    [handleReCaptchaVerify, state]
  );

  return (
    <Modal onClose={() => router.push("/")} size={"full"} isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="white" />
        <ModalBody backgroundColor="#232323">
          <Center>
            <Container>
              <Heading
                fontFamily="TeleNeoWeb"
                fontWeight="900"
                color="#e20074"
                p={["20px 0vw", "80px 0vw"]}
                fontSize={["2rem", "3rem", "4rem", "4rem"]}
                lineHeight={["2rem", "3rem", "4rem", "4rem"]}
              >
                Pályázati jelentkezés
              </Heading>
              {sending || success ? (
                <VisibilityControl always={true}>
                  <form>
                    {success ? (
                      <div>
                        <h2 style={{ color: "white" }}>
                          A pályázati jelentkezést fogadtuk!
                        </h2>
                        <h3 style={{ color: "white" }}>
                          Köszönjük a jelentkezést!
                        </h3>
                        <Button
                          fontFamily="TeleNeoWeb"
                          mt="3rem"
                          onClick={() => {
                            setSuccess(false);
                            setsending(false);
                            onClose();
                          }}
                          // backgroundColor="#001f60"
                        >
                          Bezár
                        </Button>
                      </div>
                    ) : (
                      <h2 style={{ color: "white" }}>
                        Feldolgozás folyamatban...
                      </h2>
                    )}
                  </form>
                </VisibilityControl>
              ) : (
                <VisibilityControl always={true}>
                  <form className="form-group" onSubmit={submitHandler}>
                    <Grid
                      maxW="1200px"
                      p="0"
                      templateColumns={["repeat(5, 1fr)", "repeat(5, 1fr)"]}
                      gap={5}
                    >
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="alkoto_muveszneve"
                          placeholder={"Az alkotó művészneve*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        {error.email && (
                          <div className="error">
                            A megadott email cím érvénytelen
                          </div>
                        )}

                        <input
                          type="email"
                          onBlur={handleUserInput}
                          name="email"
                          placeholder={"Email*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "1"]}
                      >
                        <Select
                          name="alkotas_stilusa"
                          id="alkotas_stilusa"
                          required
                          onChange={handleUserInput}
                          placeholder={"Az alkotás stílusa*"}
                        >
                          <option value="Club">Club</option>
                          <option value="Pop">Pop</option>
                          <option value="Xperi">Xperi</option>
                        </Select>
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "3"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="alkotas_cime"
                          placeholder={"Az alkotás címe*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "1"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="alkotas_hossza"
                          placeholder={"Hossza (MM:SS)*"}
                        />
                      </GridItem>{" "}
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "1"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="alkotas_sebessege"
                          placeholder={"Sebessége (BPM)*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "3"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="polgari_nev"
                          placeholder={
                            "Az alkotó polgári neve (személyazonosító okmányon szereplő teljes név)*"
                          }
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        <input
                          onBlur={(e) => {
                            handleUserInput(e);
                            e.currentTarget.type = "text";
                          }}
                          type="text"
                          onFocus={(e) => (e.currentTarget.type = "date")}
                          name="alkotas_keletkezesenek_idopontja"
                          placeholder={"Az alkotás keletkezésének időpontja*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <textarea
                          type="text"
                          onBlur={handleUserInput}
                          rows="6"
                          name="leiras"
                          placeholder={
                            "Leírás az alkotó hátteréről, inspirációiról, a nevezett zenéről*"
                          }
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <textarea
                          type="text"
                          onBlur={handleUserInput}
                          rows="6"
                          name="megjelent_zenei"
                          placeholder={
                            "Voltak-e az alkotónak korábban megjelent zenéi? Ha igen, melyik kiadó(k)nál?*"
                          }
                        />
                      </GridItem>

                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        <input
                          onBlur={(e) => {
                            handleUserInput(e);
                            e.currentTarget.type = "text";
                          }}
                          type="text"
                          onFocus={(e) => {
                            e.currentTarget.type = "date"

                        }}
                          name="szuletesi_ido"
                          placeholder={"Születési idő*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "1"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="szuletesi_hely"
                          placeholder={"Születési hely*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="lakcim"
                          placeholder={"Jelenlegi lakhely*"}
                        />
                      </GridItem>
                   
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <input
                          type="text"
                          onBlur={handleUserInput}
                          name="soundcloud_link"
                          placeholder={"SoundCloud link*"}
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <textarea
                          type="text"
                          onBlur={handleUserInput}
                          rows="3"
                          name="egyeb_info"
                          placeholder={
                            "Egyéb megjegyzés, social média linkek, stb ..."
                          }
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        <Select
                          name="honnan_hallottal"
                          id="honnan_hallottal"
                          required
                          onChange={handleUserInput}
                          placeholder={"Honnan hallottál a pályázatról?*"}
                        >
                          <option value="electronicbeats.hu">electronicbeats.hu</option>
                          <option value="Electronic Beats Facebook">Electronic Beats Facebook</option>
                          <option value="Electronic Beats Instagram">Electronic Beats Instagram</option>
                          <option value="Telekom Facebook">Telekom Facebook</option>
                          <option value="Telekom Instagram">Telekom Instagram</option>
                          <option value="TikTok">TikTok</option>
                          <option value="Facebook hirdetésből">Facebook hirdetésből</option>
                          <option value="Egyéb hirdetésből">Egyéb hirdetésből</option>                          
                          <option value="Ismerősöktől">Ismerősöktől</option>
                          <option value="hírportálon">Hírportálon</option>
                          <option value="egyéb">Egyéb</option>
                        </Select>
                      </GridItem>
                      {state.honnan_hallottal == "egyéb" ||
                      state.honnan_hallottal == "hírportálon" ? (
                        <GridItem
                          fontWeight="bold"
                          letterSpacing="2px"
                          fontSize="xs"
                          colSpan={["5", "3"]}
                        >
                          <input
                            type="text"
                            onBlur={handleUserInput}
                            name="honnan_hallottal_reszletek"
                            placeholder={"Kérjük részletezd*"}
                          />
                        </GridItem>
                      ) : null}
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <Checkbox
                          onChange={handleUserInput}
                          name="feltetelek"
                          size="sm"
                          colorScheme="red"
                          color="white"
                        >
                          A pályázati feltételeket elfogadom
                        </Checkbox>
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      ></GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={5}
                      >
                        <ModalFooter>
                          <Button
                            mr={["10vw", "1vw"]}
                            backgroundColor="#e20074"
                            color="#232323"
                            colorScheme="magenta"
                            // disabled={isValidationError() || !mandatory}
                            onClick={submitHandler}
                          >
                            Elküld
                          </Button>
                          <Button onClick={() => router.push("/")}>
                            Mégsem
                          </Button>
                        </ModalFooter>
                      </GridItem>
                    </Grid>
                  </form>
                </VisibilityControl>
              )}
            </Container>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
