import React, { useState, useEffect, useRef } from "react";
import { useScript } from "usehooks-ts";
export const EcwidContext = React.createContext({ ecwid: undefined });

function EcwidProvider(props) {
  // var Ecwid = undefined;
  const [ecwid, setecwid] = useState(undefined);

  const status = useScript(
    `https://app.ecwid.com/script.js?69386864&data_platform=code`
  );

  useEffect(() => {
    if (typeof Ecwid !== "undefined") {
      // jQuery is loaded => print the version
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      // Ecwid?.getOwnerId ? alert(Ecwid?.getOwnerId()) : alert("initialising");
      Ecwid.OnAPILoaded.add(function () {
        console.log("Ecwid storefront JS API has loaded");
        setecwid(Ecwid);
      });
    }
  }, [status]);

  // useEffect(() => {
  //   if (typeof ecwid === "undefined") return;
  //   ecwid?.getOwnerId ? setecwidloaded(Ecwid) : null;
  // }, [ecwid]);

  // useEffect(() => {
  //   // if (document.getElementById("ecwid-script")) return;
  //   window.ecwid_script_defer = true;
  //   window.ecwid_dynamic_widgets = true;
  //   window.ec = window.ec || Object();
  //   window.ec.config = window.ec.config || Object();
  //   // window.ec.config.store_main_page_url = "https://www.safepalwallet.hu";

  //   var script = document.createElement("script");
  //   ecwidScriptRef.current.type = "text/javascript";
  //   ecwidScriptRef.current.setAttribute("defer", "defer");
  //   ecwidScriptRef.current.src =
  //     "https://app.ecwid.com/script.js?" + "69386864" + "&data_platform=code";

  //   ecwidScriptRef.current.onload = () => {
  //     setecwid(Ecwid);
  //   };
  //   // document.body.appendChild(script);
  // });

  return (
    <EcwidContext.Provider value={ecwid}>
      {props.children}
    </EcwidContext.Provider>
  );
}

export default EcwidProvider;
