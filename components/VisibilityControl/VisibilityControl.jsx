import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { ScrollPositionContext } from "./ScrollPositionProvider";
function VisibilityControl(props) {
  const { lazyload } = props;
  const [visible, setVisible] = useState();
  const [width, setWidth] = useState(0);

  const scrollPosition = useContext(ScrollPositionContext);

  const div = useRef(null);

  const checkVisible = () => {
    const rect = div.current.getBoundingClientRect();

    if (rect.y < window.innerHeight && rect.y + rect.height > 0) {
      visible ? null : setVisible(true);
    }
    if (
      props.always &&
      (rect.y > window.innerHeight || rect.y + rect.height < 0)
    ) {
      !visible ? null : setVisible(false);
    }
  };

  useEffect(() => {
    setWidth(div.current.getBoundingClientRect().width);
    checkVisible();
  }, [scrollPosition]);

  let effect = {};
  switch (props.effect) {
    case "fade":
      effect = {
        opacity: visible ? 1 : 0.01,
      };
      break;
    case "left":
      effect = {
        transform: visible ? "translateX(0px)" : "translateX(-" + width + "px)",
      };
      break;
    case "right":
      effect = {
        transform: visible ? "translateX(0px)" : "translateX(" + width + "px)",
      };
      break;
    case "zoom":
      effect = {
        transform: visible ? "scale(1)" : "scale(0.8)",
      };
      break;
    default:
      effect = { opacity: visible ? 1 : 0.01 };
  }

  return (
    <div
      style={{
        ...effect,
        transition: "all 0.5s ease-in-out",
        // position: "relative",
      }}
      ref={div}
    >
      {!visible && lazyload ? <div></div> : props.children}
    </div>
  );
}

export default VisibilityControl;
