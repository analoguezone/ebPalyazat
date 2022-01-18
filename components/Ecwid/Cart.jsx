import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

const ShoppingCart = (props) => {
  useEffect(() => {
    function load_ecwid() {
      if (typeof Ecwid != "undefined") {
        xProduct(
          "display= price addtobag",
          "link=yes",
          "version=2",
          "show_border=",
          "show_sku=1",
          "show_price_on_button=1",
          "center_align=1"
        );
        console.log("[done]");
        window.ecwidLoaded = true;
      }
    }

    // if (!document.getElementById("ecwid-script")) {
    //   var script = document.createElement("script");
    //   script.charset = "utf-8";
    //   script.type = "text/javascript";
    //   script.src =
    //     "https://app.ecwid.com/script.js?" +
    //     props.storeId +
    //     "&data_platform=code";
    //   script.id = "ecwid-script";
    //   script.onload = load_ecwid;
    //   document.body.appendChild(script);
    // } else {
    //   load_ecwid();
    // }
    // return () => {
    //   var myobj = document.getElementById("ecwid-script");
    //   // myobj?.parentNode.removeChild(myobj);
    //   if (typeof Ecwid != "undefined") {
    //     Ecwid.destroy();

    //     // removeElementsByClassName("ecwid-pswp");
    //     removeElementsByClassName("ec-minicart");
    //     // removeElementsByClassName("ec-minicart__counter");

    //     // removeAll("*.ecwid");

    //     window.ecwidLoaded = false;
    //   }
    // };
  });

  // useEffect(() => {
  //   window.ecwid_script_defer = true;
  //   window.ecwid_dynamic_widgets = true;
  //   window.ec = window.ec || Object();
  //   window.ec.config = window.ec.config || Object();
  //   // window.ec.config.store_main_page_url = "https://www.safepalwallet.hu";
  //   if (document.getElementById("ecwid-script")) return;
  //   var script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.setAttribute("defer", "defer");
  //   script.src =
  //     "https://app.ecwid.com/script.js?" + "69386864" + "&data_platform=code";
  //   script.id = "ecwid-script";
  //   script.onload = () => {
  //     window.ecwidLoaded = true;
  //   };
  //   document.body.appendChild(script);
  //   return () => {
  //     const ec = document.getElementById("ecwid-script");
  //     document.body.removeChild(ec);
  //     removeAll("*.ecwid");
  //     removeElementsByClassName("ecwid-pswp");
  //     removeElementsByClassName("ec-minicart");
  //     removeElementsByClassName("ec-minicart__counter");
  //   };
  // }, []);

  function initWhenLoaded() {
    const ec = document.getElementById("ecwid-script");
    if (!window.Ecwid) {
      ec.onload = () => {
        xProduct(
          "display= price addtobag",
          "link=yes",
          "version=2",
          "show_border=",
          "show_sku=1",
          "show_price_on_button=1",
          "center_align=1"
        );
        // Ecwid.init();
        // Ecwid.refreshConfig();
      };
    } else {
      xProduct(
        "display= price addtobag",
        "link=yes",
        "version=2",
        "show_border=",
        "show_sku=1",
        "show_price_on_button=1",
        "center_align=1"
      );
      // Ecwid.init();
    }
  }

  useEffect(() => {
    if (!document.getElementById("ecwid-script")) return;
    initWhenLoaded();
    return () => {
      if (typeof Ecwid != "undefined") {
        if (typeof Ecwid.destroy === "function") {
          // Ecwid?.destroy();
        }
      }
    };
  });

  // function initWhenLoaded() {
  //   const ec = document.getElementById("ecwid-script");
  //   if (!window.ecwidLoaded) {
  //     ec.onload = () => {
  //       xProduct(
  //         "display= price addtobag",
  //         "link=yes",
  //         "version=2",
  //         "show_border=",
  //         "show_sku=1",
  //         "show_price_on_button=1",
  //         "center_align=1"
  //       );
  //       Ecwid.init();
  //     };
  //   } else {
  //     xProduct(
  //       "display= price addtobag",
  //       "link=yes",
  //       "version=2",
  //       "show_border=",
  //       "show_sku=1",
  //       "show_price_on_button=1",
  //       "center_align=1"
  //     );
  //     Ecwid.init();
  //   }
  // }

  // useEffect(() => {
  //   if (!document.getElementById("ecwid-script")) return;
  //   initWhenLoaded();
  // });

  // useEffect(() => {
  // if (!document.getElementById("ecwid-script")) return;
  // initWhenLoaded();
  // console.log(window);
  // if (!window.Ecwid) return;
  // Ecwid.init();
  // xProduct(
  //   "display= price addtobag",
  //   "link=yes",
  //   "version=2",
  //   "show_border=",
  //   "show_sku=1",
  //   "show_price_on_button=1",
  //   "center_align=1"
  // );

  // return () => {
  //   Ecwid.destroy();
  // };
  // }, []);

  // function initWhenLoaded() {
  //   const ec = document.getElementById("ecwid-script");
  //   if (!window.Ecwid) {
  //     ec.onload = () => {
  //       xProduct(
  //         "display= price addtobag",
  //         "link=yes",
  //         "version=2",
  //         "show_border=",
  //         "show_sku=1",
  //         "show_price_on_button=1",
  //         "center_align=1"
  //       );
  //       Ecwid.init();
  //     };
  //   } else {
  //     Ecwid.init();
  //   }
  // }

  // useEffect(() => {
  //   if (!document.getElementById("ecwid-script")) return;
  //   initWhenLoaded();
  // });

  function removeAll(className) {
    var elements = document?.querySelectorAll(className);
    for (var i = 0; i < elements?.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  function removeElementsByClassName(className) {
    var elements = document?.getElementsByClassName(className);
    for (var i = 0; i < elements?.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  return (
    <div
      className={
        "ecsp ecsp-SingleProduct-v2 ecsp-Product ecwid-SingleProduct-v2-centered ec-Product-" +
        props.productId
      }
      itemType="http://schema.org/Product"
      data-single-product-id={props.productId}
    >
      <div itemType="http://schema.org/Offer" itemScope itemProp="offers">
        {props.isShowPrice && (
          <div
            className="ecwid-productBrowser-price ecwid-price"
            itemProp="price"
            data-spw-price-location="button"
            content=""
          >
            <div itemProp="priceCurrency"></div>
          </div>
        )}
      </div>

      <div
        // onClick={() => props.setproductAction(!props.productAction)}
        customprop="addtobag"
      ></div>
    </div>
  );
};

ShoppingCart.defaultProps = {
  storeId: 69386864,
  productId: 425116750,
  isShowPrice: true,
};

export default ShoppingCart;
