import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100vw;
  max-width: 1280px;
  justify-content: center;
`;

function Organizer(props) {
  const { column } = props;

  return <Container>{props.children}</Container>;
}

export default Organizer;
