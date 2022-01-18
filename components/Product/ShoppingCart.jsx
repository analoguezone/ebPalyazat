import React, { useEffect, useState, useContext } from "react";
import EcwidContext from "../../context/EcwidProvider";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";
import { useScript } from "usehooks-ts";

export default function ShoppingCart(props) {
  const [ec, setec] = useState(undefined);
  const [quantity, setquantity] = useState(null);

  const status = useScript(
    `https://app.ecwid.com/script.js?69386864&data_platform=code`
  );

  useEffect(() => {
    if (typeof Ecwid !== "undefined") {
      // jQuery is loaded => print the version
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      // Ecwid?.getOwnerId ? alert(Ecwid?.getOwnerId()) : alert("initialising");
      Ecwid.OnAPILoaded.add(function () {
        console.log("Ecwid storefront JS API has loaded");
        Ecwid.OnCartChanged?.add(function (cart) {
          setquantity(cart.productsQuantity);
        });

        Ecwid.Cart?.get(function (cart) {
          setquantity(cart.productsQuantity);
        });
      });
    }
    return () => {
      Ecwid.OnCartChanged?.clear(function (cart) {
        setquantity(cart.productsQuantity);
      });
    };
  }, [status]);

  // const ecwid = useContext(EcwidContext);
  // function initWhenLoaded() {
  //   const ecs = document.getElementById("ecwid_body");
  //   ecs.onload = () => {
  //     setec(Ecwid);
  //   };
  //   if (!window.Ecwid) return;
  //   setec(Ecwid);
  // }

  // useEffect(() => {
  //   if (!document.getElementById("ecwid_body")) return;
  //   initWhenLoaded();
  // });

  // useEffect(() => {
  //   Ecwid.OnCartChanged.add(function (cart) {
  //     setquantity(cart.productsQuantity);
  //   });
  // }, []);

  // useEffect(() => {
  //   // if (!document.getElementById("ecwid_body")) return;
  //   // if (!Ecwid?.getOwnerId()) return;
  //   if (!Ecwid) return;
  //   Ecwid.OnAPILoaded.add(function () {
  //     Ecwid.OnCartChanged?.add(function (cart) {
  //       setquantity(cart.productsQuantity);
  //     });

  //     Ecwid.Cart?.get(function (cart) {
  //       setquantity(cart.productsQuantity);
  //     });
  //   });
  // });

  const clickHandler = (e) => {
    Ecwid.openPage("cart");
  };

  return (
    <Center cursor={"pointer"} onClick={clickHandler}>
      <Box position="relative">
        {quantity ? (
          <Heading
            fontSize="xs"
            lineHeight="1"
            fontWeight="600"
            position="absolute"
            right="-2"
            top="-1"
            backgroundColor="#0560d5"
            padding="4px 6px"
            borderRadius={"50%"}
            color="white"
          >
            {quantity}
          </Heading>
        ) : null}
        <Image src="/images/cart.svg" />
      </Box>
    </Center>
  );
}
