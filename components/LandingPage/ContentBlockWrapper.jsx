import React from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "450px")};

  /* height: 100%; */

  p {
    @media screen and (max-width: 1200px) {
      /* max-width: 350px; */
    }
  }

  min-height: 300px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  flex-wrap: wrap;
  opacity: 1;
  transition: all 2s ease-in-out;
  flex-grow: ${(props) => (props.weight ? props.weight : 1)};
  @media only screen and (max-device-width: 700px) {
    order: ${(props) => (props.order ? props.order : 1)};
    width: 100%;
    /* max-width: 350px; */
    /* padding: 10px; */
  }
`;

const ContentBlockWrapper = (props) => {
  const { weight, order } = props;
  return (
    <Container order={order} weight={weight} maxWidth={props.maxWidth}>
      {props.children}
    </Container>
  );
};

export default ContentBlockWrapper;
