import React from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  @media only screen and (max-device-width: 700px) {
    padding: 0;
  }
`;

const Inverse = styled.div`
  color: #7edeb5;
  width: 45px;
  @media only screen and (max-device-width: 700px) {
    width: 40px;
  }
  text-align: center;
`;

const Line = styled.div`
  color: #474646;
  letter-spacing: 5px;
`;

const Row = styled.div`
  font-weight: 600;

  padding: 0 10px;

  //text-transform: uppercase;
  .highlight {
    color: ${(props) => props.theme.primaryColorHighlight};
  }
  @media only screen and (max-device-width: 700px) {
    font-size: 240%;
  }
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 340%;
`;

export default function WelcomeText() {
  return (
    <Container>
      <Row>
        <Inverse className=" shadow">I</Inverse>
        <Line className=" shadow">nnovation</Line>
      </Row>
      <Row>
        <Inverse className=" shadow">F</Inverse>
        <Line className=" shadow">uture</Line>
      </Row>
      <Row>
        <Inverse className=" shadow">B</Inverse>
        <Line className=" shadow">alance</Line>
      </Row>
    </Container>
  );
}
