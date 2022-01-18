import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 1000;
  /* background: rgb(126, 222, 181);
  background: linear-gradient(
    340deg,
    rgba(126, 222, 181, 1) 0%,
    rgba(126, 207, 172, 1) 100%
  ); */
`;

function HighlightsContainer(props) {
  return (
    <Container style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </Container>
  );
}

export default HighlightsContainer;
