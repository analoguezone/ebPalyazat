import React from "react";

import styled from "styled-components";

const Container = styled.div`
  /* @media only screen and (max-device-width: 700px) {
    order: 2;
  } */
`;

const Image = styled.div`
  margin: 0px 0;
  overflow: hidden;
  background-color: black;
  //box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  transition: all 0.3s ease-in-out;
  background-size: cover;
  background-position: center center;
`;

const ImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "450px")};
  text-align: center;
  flex-direction: column;
  padding: 10px;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media only screen and (max-device-width: 700px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  font-size: 400%;
  color: white;
  text-shadow: 3px 3px 10px #333333;

  order: 1;
  padding: 20px;
  padding-bottom: 10px;
`;

const Title = styled.div`
  font-size: 200%;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  font-style: italic;
  order: 2;
  padding: 20px;
  padding-top: 10px;
  line-height: 180%;
`;

const ContentBlockImage = ({
  imageUrl,
  videoUrl,
  height,
  maxWidth,
  title,
  subtitle,
  buttonText,
  buttonColor,
}) => {
  let imageElement = "";

  if (!imageUrl == "") {
    imageElement = (
      <Container>
        <ImageContent
          maxWidth={maxWidth}
          style={{
            height,
            // maxWidth,
            backgroundImage: "url('" + imageUrl + "')",
          }}
        ></ImageContent>
      </Container>
    );
  }

  if (!title == "") {
    imageElement = (
      <ImageContent>
        <Header>{title}</Header>
        <Title>{subtitle}</Title>
      </ImageContent>
    );
  }

  return <div>{imageElement}</div>;
};

export default ContentBlockImage;
