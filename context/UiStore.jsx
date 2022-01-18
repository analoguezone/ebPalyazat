import React, { useState, useContext } from "react";
import UiContext from "./uiContext";

export default function UiStore(props) {
  const UiStore = useContext(UiContext);
  const [uiState, setUiState] = useState(UiStore);
  return (
    <UiContext.Provider
      value={{
        ...uiState,
        setUiState: setUiState
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
}
