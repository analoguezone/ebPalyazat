import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";

const ShoppingCart = (props) => {
  useEffect(() => {
    function load_ecwid() {
      if (typeof Ecwid != "undefined") {
        xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "defaultProductId=425116750",
          "id=my-store-69386864"
        );

        console.log("[done]");
      }
    }
    window.localStorage.setItem("show_ecwid_logs", "true");
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;
    window.ec = window.ec || {};
    window.ec.storefront = window.ec.storefront || {};
    window.ec.storefront.enable_navigation = true;
    window.ec.storefront.product_details_layout =
      "TWO_COLUMNS_SIDEBAR_ON_THE_RIGHT";
    window.ec.storefront.product_details_gallery_layout = "SINGLE_IMAGE";
    window.ec.storefront.product_details_two_columns_with_right_sidebar_show_product_description_on_sidebar = false;
    window.ec.storefront.product_details_two_columns_with_left_sidebar_show_product_description_on_sidebar = false;
    window.ec.storefront.product_details_show_product_name = true;
    window.ec.storefront.product_details_show_breadcrumbs = true;
    window.ec.storefront.product_details_show_product_sku = false;
    window.ec.storefront.product_details_show_product_price = true;
    window.ec.storefront.product_details_show_in_stock_label = true;
    window.ec.storefront.product_details_show_number_of_items_in_stock = false;
    window.ec.storefront.product_details_show_qty = true;
    window.ec.storefront.product_details_show_wholesale_prices = false;
    window.ec.storefront.product_details_show_product_options = true;
    window.ec.storefront.product_details_show_product_description = false;
    window.ec.storefront.product_details_show_share_buttons = true;
    window.ec.storefront.product_details_position_product_name = 100;
    window.ec.storefront.product_details_position_breadcrumbs = 200;
    window.ec.storefront.product_details_position_product_sku = 300;
    window.ec.storefront.product_details_position_product_price = 400;
    window.ec.storefront.product_details_position_product_options = undefined;
    window.ec.storefront.product_details_position_buy_button = 600;
    window.ec.storefront.product_details_position_wholesale_prices = 700;
    window.ec.storefront.product_details_position_product_description = 900;
    window.ec.storefront.product_details_position_share_buttons = 800;
    window.ec.storefront.product_details_position_subtitle = 500;
    window.ec.storefront.product_details_show_subtitle = true;

    if (!document.getElementById("ecwid-script")) {
      var script = document.createElement("script");
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.src =
        "https://app.ecwid.com/script.js?" + "69386864" + "&data_platform=code";
      script.id = "ecwid-script";
      script.onload = load_ecwid;

      document.body.appendChild(script);
    } else {
      load_ecwid();
    }
    return () => {
      var myobj = document.getElementById("ecwid-script");
      myobj?.remove();
      if (typeof Ecwid != "undefined" && window.Ecwid) {
        // window.Ecwid?.destroy();
        removeAll("*.ecwid");
        // removeElementsByClassName("ec-minicart__counter");
        // removeElementsByClassName("ec-minicart");
        removeElementsByClassName("ecwid-pswp");
      }
    };
  });

  function removeAll(className) {
    var elements = document.querySelectorAll(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  function removeElementsByClassName(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  return <div id="my-store-69386864"></div>;
};

ShoppingCart.defaultProps = {
  storeId: 69386864,
  productId: 425116750,
  isShowPrice: true,
};

export default ShoppingCart;
