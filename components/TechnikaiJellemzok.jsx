import React, { useContext, useState, useEffect } from "react";

import { Box, Divider, Heading, Grid, GridItem } from "@chakra-ui/react";

function TechnikaiJellemzok({ jellemzok }) {
  const [isMobile, setisMobile] = useState("");

  useEffect(() => {
    if (/Mobi/.test(navigator.userAgent) && window.innerWidth < 401) {
      // mobile!
      setisMobile("mobil_");
    }
  }, []);
  function isOdd(num) {
    return num % 2;
  }
  return (
    <Box>
      <Divider />
      <Grid
        border="1px solid #eee"
        // h="200px"
        color="gray.500"
        fontSize="sm"
        w={["400px", "740px"]}
        maxW={["100vw", "740px"]}
        templateRows="repeat(2)"
        templateColumns="repeat(2)"
      >
        <GridItem rowSpan={1} colSpan={2} bg="">
          <Heading
            p="5px 30px"
            borderBottom="1px dashed #ddd"
            color="black"
            fontSize="2xl"
          >
            TECHNIKAI JELLEMZŐK
          </Heading>
        </GridItem>
        {jellemzok.map((x, i) => {
          const isLast = jellemzok.length == i + 1;
          return (
            <>
              <GridItem
                borderBottom={isLast ? "" : "1px dashed #ddd"}
                p="10px 30px"
                rowSpan={1}
                colSpan={1}
                bg={!isOdd(i) && "#efefef"}
              >
                {x.megnevezes}
              </GridItem>
              <GridItem
                borderBottom={isLast ? "" : "1px dashed #ddd"}
                p="10px 30px"
                rowSpan={1}
                colSpan={1}
                textAlign="right"
                bg={!isOdd(i) && "#efefef"}
              >
                {x.ertek}
              </GridItem>
            </>
          );
        })}
      </Grid>
    </Box>
  );
}

export default TechnikaiJellemzok;
