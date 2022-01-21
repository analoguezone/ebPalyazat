import React, { useState, useEffect, useRef, useCallback } from "react";

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
const Container = styled.div`
  background-color: #232323;
`;

export default function Form(props) {
  const router = useRouter();

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

              <VisibilityControl always={true}>
                <form>
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
                        router.push("/");
                      }}
                      // backgroundColor="#001f60"
                    >
                      Bezár
                    </Button>
                  </div>
                </form>
              </VisibilityControl>
            </Container>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
