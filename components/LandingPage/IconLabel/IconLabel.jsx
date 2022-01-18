import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 450px;
  min-width: 350px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  border-radius: 3px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 135%;
  color: rgb(203, 217, 224);
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 10px;
`;

const Description = styled.div`
  font-size: 100%;
  color: rgb(203, 217, 224);
  padding: 10px 10px;
  line-height: 180%;
  font-weight: 100;
`;

const IconLabel = ({
  icon,
  iconSize,
  iconAlign,
  title,
  description,
  backgroundColor,
  textColor
}) => {
  const iconStyles = {
    padding: 10,
    fontSize: iconSize,
    color: textColor
  };

  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default IconLabel;
