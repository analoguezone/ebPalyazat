import React, { useContext } from "react";
import styled from "styled-components";
import uiContext from "../../context/uiContext";

const Button = styled.div`
  @media only screen and (min-device-width: 700px) {
    display: none;
  }
display:inline-block;
//padding:10px 15px;
cursor: pointer;
  width: 30px; 
  height: 25px;
  

  
  i {
    background-color: ${(props) =>
      !props.heroPassed || props.initHeader ? "black" : "black"};
      background-color:black;
    border-radius: 2px;
    content: '';
    display: block;
    width: 30px;
    height: 4px;

  }
  i:nth-child(1) {
    -webkit-animation:outT 0.8s backwards;
    animation:outT 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation: outM 0.8s backwards;
    animation:outM 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  i:nth-child(3) {
    -webkit-animation:outBtm 0.8s backwards;
    animation:outBtm 0.8s backwards;
    -webkit-animation-direction:reverse;
    animation-direction:reverse;
  }
  
}
@-webkit-keyframes inM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes inM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes outM{
50%{-webkit-transform:rotate(0deg);}
100%{-webkit-transform:rotate(45deg);}
}
@keyframes outM{
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
}

@-webkit-keyframes inT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes inT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes outT{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}
}
@keyframes outT{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
}

@-webkit-keyframes inBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes inBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}

@-webkit-keyframes outBtm{
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(-9px) rotate(0deg);}
100%{-webkit-transform: translateY(-9px) rotate(135deg);}
}
@keyframes outBtm{
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
}
`;

const ActiveButton = styled(Button)`
  i:nth-child(1) {
    -webkit-animation: inT 0.8s forwards;
    animation: inT 0.8s forwards;
  }
  i:nth-child(2) {
    -webkit-animation: inM 0.8s forwards;
    animation: inM 0.8s forwards;
  }
  i:nth-child(3) {
    -webkit-animation: inBtm 0.8s forwards;
    animation: inBtm 0.8s forwards;
  }
`;

const HamburgerMenuButton = (props) => {
  const uiState = useContext(uiContext);

  const clickHandler = () => {
    uiState.setUiState({ ...uiState, isMenuOpen: !uiState.isMenuOpen });
  };

  const MenuButton = uiState.isMenuOpen ? ActiveButton : Button;
  return (
    <MenuButton
      style={{ margin: "auto" }}
      active={uiState.isMenuOpen}
      theme={uiState.theme}
      onClick={clickHandler}
      heroPassed={props.heroPassed}
      initHeader={props.initHeader}
      scrollingUp={props.scrollingUp}
    >
      <i />
      <i />
      <i />
    </MenuButton>
  );
};

export default HamburgerMenuButton;
