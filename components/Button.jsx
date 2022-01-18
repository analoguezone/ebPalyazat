import styled from "styled-components";

export const Button = styled.div`
  display: inline-block;
  padding: 10px;
  color: ${props => (props.color ? props.color : "white")};
  border: 2px solid
    ${props =>
      props.backgroundColor ? "none" : props.color ? props.color : "white"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "none"};
  border-radius: 3px;
  //width: 200px;
  cursor: pointer;
  margin: auto;
`;

export const AddToCart = styled(Button)`
  text-align: center;
  width: ${props => (props.fullWidth ? "100%" : null)};
  padding: 20px 10px;
  font-weight: 600;
`;
