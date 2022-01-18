import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 390px;
  max-height: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 200%;
  line-height: 120%;
  font-weight: 900;

  //text-shadow: 3px 3px 10px #333333;
  padding: 20px;
  order: 1;
  //text-transform: uppercase;
`;

const Description = styled.div`
  font-size: 100%;
  line-height: 150%;
  font-weight: 500;

  //	font-style: italic;
  padding: 20px;
  order: 3;
`;

const BlueBar = styled.div`
  height: 3px;
  width: 150px;
  background-color: orange;
  order: 2;
  margin: 0 20px;
`;

const ContentBlockText = (props) => {
  return (
    <Container style={{ textAlign: props.alignDirection }}>
      <Title>{props.title}</Title>
      <BlueBar />
      <Description>{props.description}</Description>
      <Description>{props.description1}</Description>
    </Container>
  );
};

export default ContentBlockText;
