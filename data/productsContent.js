import React, { useEffect, useState } from "react";
import VisibilityControl from "../components/VisibilityControl/VisibilityControl.jsx";

import Image from "next/image";
import binance_safepal from "../public/images/binance_safepal.png";
import exploded from "../public/images/exploded_view.png";
import onTheGo from "../public/images/on_the_go.png";
import s1BoxPc from "../public/images/s1_box_pc.png";
import s1spec from "../public/images/s1_specifications.jpeg";
import cypher02 from "../public/images/safepal-cypher-hardveres-kriptotarca/crypher_2.png";
import cypher03 from "../public/images/safepal-cypher-hardveres-kriptotarca/cypher_3.png";
import cypher04 from "../public/images/safepal-cypher-hardveres-kriptotarca/cypher_4.png";
import cypherbox from "../public/images/safepal-cypher-hardveres-kriptotarca/cypher_box.png";
import cypherspec from "../public/images/safepal-cypher-hardveres-kriptotarca/cypher_spec.png";
import cypherFire from "../public/images/safepal-cypher-hardveres-kriptotarca/crypher_fire.png";

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
  GridItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";
const productsContent = {
  safepal_s1_hardver_kriptotarca: (props) => {
    const { t, i18n } = props;
    return (
      <VStack>
        <VStack
          maxW="1000px"
          id="details"
          p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
        >
          <Heading
            textAlign="center"
            fontWeight="900"
            // color="#e20074"
            p={["20px 50px", "100px 50px"]}
            fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
            lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
          >
            {t("Az első hardvertárca a Binance finanszírozásval")}
          </Heading>
          <Image
            alt="SafePal Binance Collab"
            src={binance_safepal}
            width="600"
            height="320"
          />
        </VStack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <Box
            order={["2", "2"]}
            w={["100vw", "60vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image alt="SafePal S1 hardver kriptotárca" src={exploded} />
            </VisibilityControl>
          </Box>
          <VStack
            order={["2", "1"]}
            w={["100vw", "40vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Biztonság, bármerre jár
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                EAL 5+ biztonsági chip
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                True random véletlen szám generátor
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Többszörös biztonsági réteg
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Self-destruct önmegsemmisítő mechanizmus
              </ListItem>
            </List>
          </VStack>
        </Stack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <Box
            order={["2", "1"]}
            w={["100vw", "60vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image
                alt="SafePal S1 hardver kriptotárca"
                src="/images/airgap.png"
                width="900"
                height="561"
              />
            </VisibilityControl>
          </Box>
          <VStack
            order={["2", "2"]}
            w={["100vw", "40vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              100% offline "air-gap" hitelesítési folyamat a valós "hideg"
              tárolásért
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Nincs Bluetooth
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Nincs WiFi
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Nincs NFC
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Nincs USB
              </ListItem>
            </List>
          </VStack>
        </Stack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <VStack
            order={["2", "2"]}
            w={["100vw", "100vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              textAlign="center"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Végtelen számú token kapacitás
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                32 különböző blokkláncon, több mint 30000 token támogatása
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Végtelen számú kriptovaluta tárolás
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Tetszés szerinti token hozzáadás
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Firmware frissítési lehetőség a legújabb tokenek támogatásához
              </ListItem>
            </List>
          </VStack>
        </Stack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <Box
            order={["2", "2"]}
            w={["100vw", "60vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image alt="SafePal S1 hardver kriptotárca" src={onTheGo} />
            </VisibilityControl>
          </Box>
          <VStack
            order={["2", "1"]}
            w={["100vw", "40vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Bárhol, bármikor SafePal
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Mérete egy bankkártya méretének felel meg
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Könnyen és egyszerűen mozgatható
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Kezelje portfólióját bármerre jár
              </ListItem>{" "}
            </List>
          </VStack>
        </Stack>

        <Stack
          maxW="1400px"
          pt="50px"
          pb="50px"
          backgroundColor="#F4F7FA"
          direction={["column"]}
        >
          <Box
            order={["2", "2"]}
            w={["100vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image alt="SafePal S1 hardver kriptotárca" src={s1BoxPc} />
            </VisibilityControl>
          </Box>
          <VStack
            order={["1", "1"]}
            w={["100vw"]}
            maxW="1400px"
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
              textAlign="center"
            >
              A doboz tartalma
            </Heading>
          </VStack>
        </Stack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column"]}>
          <Heading
            fontWeight="900"
            w="100%"
            // color="#e20074"
            p={["20px 0vw", "20px 0vw"]}
            fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
            lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            textAlign="center"
          >
            Jellemzők
          </Heading>
          <Stack
            maxW="1400px"
            pt="50px"
            pb="50px"
            direction={["column", "row"]}
          >
            <Box
              order={["2", "2"]}
              w={["100vw", "60vw"]}
              p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
            >
              <VisibilityControl effect="fade" always={false} lazyload>
                <Image src={s1spec} />
              </VisibilityControl>
            </Box>
            <VStack
              order={["2", "1"]}
              w={["100vw", "40vw"]}
              p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
              justifyContent="center"
            >
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Üzemi hőméséklet
                </Heading>
                <Text>-20 ° to 70 ° C</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Tápcsatlakozó
                </Heading>
                <Text>Töltés USB kábellel</Text>
              </VStack>

              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Kamera
                </Heading>
                <Text>QR kód beolvasás</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Kijelző
                </Heading>
                <Text>1.3'IPS képernyő</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Kapcsolat
                </Heading>
                <Text>Nincs</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Frissítés
                </Heading>
                <Text>Firmware frissítési lehetőség</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Akkumulátor kapacitás
                </Heading>
                <Text>
                  400mAh (1 töltéssel kb. 20 nap, 10 perc napi használat mellet)
                </Text>
              </VStack>
            </VStack>
          </Stack>
        </Stack>
      </VStack>
    );
  },
  safepal_cypher_hardveres_kriptotarca: (props) => {
    const { t, i18n } = props;
    return (
      <VStack>
        <VStack
          maxW="1400px"
          position="relative"
          id="details"
          p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
        >
          <Image
            position="absolute"
            top="0"
            alt="SafePal Cypher Seed Card"
            src={cypher02}
          />
          <VStack position="absolute" top="0">
            <Heading
              textAlign="center"
              fontWeight="900"
              // color="#e20074"
              p={["20px 50px", "50px 50px"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              {t("Ellenáll az elemeknek")}
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Prémium AISI 304 rozsdamentes acél
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Rozsdamentes és saválló
              </ListItem>{" "}
            </List>
          </VStack>
        </VStack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <Box
            order={["2", "1"]}
            w={["100vw", "60vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image
                alt="SafePal Cypher hardver kriptotárca"
                src={cypherFire}
              />
            </VisibilityControl>
          </Box>
          <VStack
            order={["2", "2"]}
            w={["100vw", "40vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Tűzálló
            </Heading>
            <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Egy általános lakástűz kb. 815°C, a SafePal Cypher olvadáspontja
                1398°C
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Szemben az aluminium termékekkel, melyek olvadáspontja 650°C, a
                SafePal Cypher ellenálló, és visszaállító szavai biztonságban
                vannak még extrém körülmények között is!
              </ListItem>{" "}
            </List>
          </VStack>
        </Stack>

        <VStack
          maxW="1400px"
          position="relative"
          id="details"
          p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
        >
          <Image
            position="absolute"
            top="0"
            alt="SafePal Cypher Seed Card"
            src={cypher03}
          />
          <VStack position="absolute" bottom="20px" color="white">
            <Heading
              textAlign="center"
              fontWeight="900"
              // color="#e20074"
              p={["20px 50px", "50px 50px"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              {t("Egyszerű használat")}
            </Heading>
          </VStack>
        </VStack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column", "row"]}>
          <Box
            order={["2", "1"]}
            w={["100vw", "60vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image alt="SafePal S1 hardver kriptotárca" src={cypher04} />
            </VisibilityControl>
          </Box>
          <VStack
            order={["2", "2"]}
            w={["100vw", "40vw"]}
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              w="100%"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Kompatibilis bármely BIP39 szabványú szoftver vagy hardver
              tárcával
            </Heading>
            <Heading
              fontWeight="900"
              w="100%"
              color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            >
              Alkalmas 12, 18, vagy 24 szavas visszaállító kifejezések
              tárolására
            </Heading>
            {/* <List
              fontSize={["xs", "xs", "lg", "lg"]}
              spacing={1}
              pr="5vw"
              w="100%"
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Kompatibilis bármely BIP39 szabványú szoftver vagy hardver
                tárcával
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="#e20074" />
                Alkalmas 12, 18, vagy 24 szavas visszaállító kifejezések
                tárolására
              </ListItem>{" "}
            </List> */}
          </VStack>
        </Stack>

        <Stack
          maxW="1400px"
          pt="50px"
          pb="50px"
          backgroundColor="#F4F7FA"
          direction={["column"]}
        >
          <Box
            order={["2", "2"]}
            w={["100vw"]}
            p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
          >
            <VisibilityControl effect="fade" always={false} lazyload>
              <Image alt="SafePal S1 hardver kriptotárca" src={cypherbox} />
            </VisibilityControl>
          </Box>
          <VStack
            order={["1", "1"]}
            w={["100vw"]}
            maxW="1400px"
            p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
            justifyContent="center"
          >
            <Heading
              fontWeight="900"
              // color="#e20074"
              p={["20px 0vw", "20px 0vw"]}
              fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
              lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
              textAlign="center"
            >
              A doboz tartalma
            </Heading>
          </VStack>
        </Stack>

        <Stack maxW="1400px" pt="50px" pb="50px" direction={["column"]}>
          <Heading
            fontWeight="900"
            w="100%"
            // color="#e20074"
            p={["20px 0vw", "20px 0vw"]}
            fontSize={["1.5rem", "1.5rem", "3rem", "3rem"]}
            lineHeight={["1.5rem", "1.5rem", "3rem", "3rem"]}
            textAlign="center"
          >
            Jellemzők
          </Heading>
          <Stack
            maxW="1400px"
            pt="50px"
            pb="50px"
            direction={["column", "row"]}
          >
            <Box
              order={["2", "2"]}
              w={["100vw", "60vw"]}
              p={["0px 0px", "20px 10px", "20px 30px", "20px 50px"]}
            >
              <VisibilityControl effect="fade" always={false} lazyload>
                <Image src={cypherspec} />
              </VisibilityControl>
            </Box>
            <VStack
              order={["2", "1"]}
              w={["100vw", "40vw"]}
              p={["0px 20px", "20px 10px", "20px 30px", "20px 50px"]}
              justifyContent="center"
            >
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Súly
                </Heading>
                <Text>190g</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Méretek
                </Heading>
                <Text>91 x 58 x 6 mm</Text>
              </VStack>

              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Anyag
                </Heading>
                <Text>304 osztályú rozsdamentes acél</Text>
              </VStack>
              <VStack w="100%" fontSize="lg" alignItems="normal">
                <Heading fontSize="lg" fontWeight="800">
                  Olvadáspont
                </Heading>
                <Text>1398 celsius</Text>
              </VStack>
            </VStack>
          </Stack>
        </Stack>
      </VStack>
    );
  },
};

export default productsContent;
