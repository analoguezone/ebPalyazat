import React, { useState, useEffect } from "react";

export const ScrollPositionContext = React.createContext({ scrollPosition: 0 });

function ScrollPositionProvider(props) {
  const [scrollPosition, setscrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => setscrollPosition(window.scrollY),
      {
        capture: false,
        passive: true,
      }
    );

    setscrollPosition(window.scrollY);

    return () => {
      document.removeEventListener(
        "scroll",
        () => setscrollPosition(window.scrollY),
        {
          capture: false,
          passive: true,
        }
      );
    };
  }, [scrollPosition]);

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {props.children}
    </ScrollPositionContext.Provider>
  );
}

export default ScrollPositionProvider;
