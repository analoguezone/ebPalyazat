import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import hu from "date-fns/locale/hu";
registerLocale("hu", hu);

import Link from "next/link";

import {
  Box,
  Stack,
  HStack,
  Center,
  VStack,
  Text,
  Divider,
  Img,
  Input,
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
    if (!value && name == "egyeb_info") {
      setstate({ ...state, [name]: " " })
    } else {

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
        <ModalCloseButton color="white" size="xl" mr="2" mt="2" />
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
                P??ly??zati jelentkez??s
              </Heading>
              {sending || success ? (
                <VisibilityControl always={true}>
                  <form>
                    {success ? (
                      <div>
                        <h2 style={{ color: "white" }}>
                          A p??ly??zati jelentkez??st fogadtuk!
                        </h2>
                        <h3 style={{ color: "white" }}>
                          K??sz??nj??k a jelentkez??st!
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
                          Bez??r
                        </Button>
                      </div>
                    ) : (
                      <h2 style={{ color: "white" }}>
                        Feldolgoz??s folyamatban...
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
                          placeholder={"Az alkot?? m??v??szneve*"}
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
                            A megadott email c??m ??rv??nytelen
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
                          placeholder={"Az alkot??s st??lusa*"}
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
                          placeholder={"Az alkot??s c??me*"}
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
                          placeholder={"Sebess??ge (BPM)*"}
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
                            "Az alkot?? polg??ri neve (szem??lyazonos??t?? okm??nyon szerepl?? teljes n??v)*"
                          }
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        {/* <input
                          style={{ width: "100%", height: "100%" }}
                          onBlur={(e) => {
                            if (!state.alkotas_keletkezesenek_idopontja) {
                              e.current.type = "text";
                            }
                          }}
                          onChange={(e) => handleUserInput(e)}
                    
                          type="text"
                          onFocus={(e) => (e.current.type = "date")}
                          name="alkotas_keletkezesenek_idopontja"
                          placeholder={"Az alkot??s keletkez??s??nek id??pontja*"}
                        /> */}
                        <DatePicker
                          placeholderText="Az alkot??s keletkez??s??nek id??pontja*"
                          autocomplete="off"
                          locale="hu-HU"
                          dateFormat="yyyy.MM.dd"
                          selected={state.alkotas_keletkezesenek_idopontja}
                          onChange={(e) =>
                            handleUserInput({
                              target: {
                                value: e,
                                name: "alkotas_keletkezesenek_idopontja",
                              },
                            })
                          }
                          name="alkotas_keletkezesenek_idopontja"
                        />
                        ;
                        {/* <Input
                          onBlur={(e) => {
                            handleUserInput(e);
                            // e.currentTarget.type = "text";
                          }}
                          // type="text"
                          type="date"
                          // onFocus={(e) => (e.currentTarget.type = "date")}
                          name="alkotas_keletkezesenek_idopontja"
                          placeholder={"Az alkot??s keletkez??s??nek id??pontja*"}
                        /> */}
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
                            "Le??r??s az alkot?? h??tter??r??l, inspir??ci??ir??l, a nevezett zen??r??l*"
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
                            "Voltak-e az alkot??nak kor??bban megjelent zen??i? Ha igen, melyik kiad??(k)n??l?*"
                          }
                        />
                      </GridItem>
                      <GridItem
                        fontWeight="bold"
                        letterSpacing="2px"
                        fontSize="xs"
                        colSpan={["5", "2"]}
                      >
                        {/* <input
                          onBlur={(e) => {
                            handleUserInput(e);
                            e.currentTarget.type = "text";
                          }}
                          type="text"
                          onFocus={(e) => {
                            e.currentTarget.type = "date";
                          }}
                          name="szuletesi_ido"
                          placeholder={"Sz??let??si id??*"}
                        /> */}
                        <DatePicker
                          placeholderText="Sz??let??si id??*"
                          autocomplete="off"
                          locale="hu-HU"
                          dateFormat="yyyy.MM.dd"
                          selected={state.szuletesi_ido}
                          onChange={(e) =>
                            handleUserInput({
                              target: {
                                value: e,
                                name: "szuletesi_ido",
                              },
                            })
                          }
                          name="szuletesi_ido"
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
                          placeholder={"Sz??let??si hely*"}
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
                          placeholder={"A p??lyam?? Soundcloud linkje*"}
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
                            "Egy??b megjegyz??s, social m??dia linkek, stb ..."
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
                          placeholder={"Honnan hallott??l a p??ly??zatr??l?*"}
                        >
                          <option value="electronicbeats.hu">
                            electronicbeats.hu
                          </option>
                          <option value="Electronic Beats Facebook">
                            Electronic Beats Facebook
                          </option>
                          <option value="Electronic Beats Instagram">
                            Electronic Beats Instagram
                          </option>
                          <option value="Telekom Facebook">
                            Telekom Facebook
                          </option>
                          <option value="Telekom Instagram">
                            Telekom Instagram
                          </option>
                          <option value="TikTok">TikTok</option>
                          <option value="Facebook hirdet??sb??l">
                            Facebook hirdet??sb??l
                          </option>
                          <option value="Egy??b hirdet??sb??l">
                            Egy??b hirdet??sb??l
                          </option>
                          <option value="Ismer??s??kt??l">Ismer??s??kt??l</option>
                          <option value="h??rport??lon">H??rport??lon</option>
                          <option value="egy??b">Egy??b</option>
                        </Select>
                      </GridItem>
                      {state.honnan_hallottal == "egy??b" ||
                        state.honnan_hallottal == "h??rport??lon" ? (
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
                            placeholder={"K??rj??k r??szletezd*"}
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
                          A <Link href="/feltetelek" ><span style={{ color: "#e20074" }} >p??ly??zati felt??teleket</span></Link> elfogadom
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
                            disabled={isValidationError() || !mandatory}
                            onClick={submitHandler}
                          >
                            Elk??ld
                          </Button>
                          <Button onClick={() => router.push("/")}>
                            M??gsem
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
