import React, { useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  //box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-size: cover;
  background-position: center center;
  @media only screen and (max-device-width: 700px) {
    padding: 0px 0;
  }
`;

const ContentBlockContainer = (props) => {
  return props.imageUrl ? (
    <Container
      style={{
        backgroundColor: props.backgroundColor,
        backgroundImage: "url('" + props.imageUrl + "') ",
        height: props.height,
        padding: props.padding,
        order: props.order,
      }}
    >
      {props.children}
    </Container>
  ) : (
    <Container
      style={{
        backgroundColor: props.backgroundColor,
        height: props.height,
        padding: props.padding,
        order: props.order,
      }}
    >
      {props.children}
    </Container>
  );
};

export default ContentBlockContainer;
