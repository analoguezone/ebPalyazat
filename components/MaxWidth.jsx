import React from "react";
import styled from "styled-components";

const Content = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  margin: auto;
`;

function MaxWidth(props) {
  const { width } = props;
  return <Content width={width}>{props.children}</Content>;
}

export default MaxWidth;
