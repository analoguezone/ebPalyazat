import React from "react";

export default React.createContext({
  isMenuOpen: false,
  theme: {
    color: "#001f60",
    blueGrey: "#7b98ac",
    lightGrey: "#c8c8c8",
    grey: "#63656a",
    primaryButton: "#ffd800",
    primaryMenuButton: "white",
    secondaryButton: "#6d6d6d",
    backgroundColor: "#f1f4f7",
    headBlockBackground: "#60b4c0",
    formBackgroundColor: "#fff",
    inputFieldBackgroundColor: "#e3e3e3",
    listItemBackground: "#344561f5",
    itemBackground: "white",
    createItemFormBackgroundColor:
      "linear-gradient(135deg, rgba(255,117,117,1) 1%,rgba(255,104,104,1) 57%,rgba(255,94,94,1) 100%)", //'#ffd800',
    listItemFormBackgroundColor: "#243846f7",
    listItemHoverColor: "#314b58",
    createItemHoverColor: "#6a1818ed",
  },
});

//#306565
//		createItemFormBackgroundColor: '#5a1818ed',
