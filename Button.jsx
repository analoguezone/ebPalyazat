import styled from "styled-components";

export const Button = styled.div`
  display: inline-block;
  padding: 14px 20px;
  color: ${(props) => (props.color ? props.color : "black")};
  border: 1px solid grey;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "none"};

  //width: 200px;
  cursor: pointer;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const AddToCart = styled(Button)`
  text-align: center;
  width: ${(props) => (props.fullWidth ? "100%" : null)};
  padding: 20px 10px;
  font-weight: 600;
`;
