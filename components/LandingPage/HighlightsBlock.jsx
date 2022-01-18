import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  max-height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  @media only screen and (max-device-width: 700px) {
    padding: 20px 0;

    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 130%;
  font-weight: bold;
  text-transform: uppercase;
  color: #333635;
  //text-shadow: 3px 3px 10px #333333;
  padding: 10px 20px;
  height: 3rem;
  order: 1;
`;

const TitleSmall = styled.div`
  font-size: 90%;
  font-style: italic;
  font-weight: 100;
  color: #333635;
  //text-shadow: 3px 3px 10px #333333;
  padding: 10px 20px;
  order: 1;
`;

const Description = styled.div`
  font-size: 90%;
  line-height: 150%;
  color: #333635;
  //text-shadow: 2px 2px 4px #000000;
  text-align: justify;
  padding: 10px 20px;
  order: 2;
  @media only screen and (max-device-width: 700px) {
    /* padding: 0; */
  }
`;

const HighlightsBlock = (props) => {
  return (
    <Container style={{ textAlign: props.alignDirection }}>
      <Title>{props.title}</Title>
      <TitleSmall>{props.titleSmall}</TitleSmall>
      <Description>{props.description}</Description>
    </Container>
  );
};

export default HighlightsBlock;
