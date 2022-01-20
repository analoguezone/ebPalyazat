import React from "react";

// import blogData from "../../data/blogData";
// import productData from "../../data/productData";
import { withTranslation } from "../../server/i18n";

function MenuWrapper(props) {
  const { t } = props;
  const menuItems = [
    {
      title: t("Feltételek"),
      // link: "/contact",
      anchor: "#23",
      //TODO oldalon beluli navigacio
      link: "/",
      showAtHeader: true,
      allPages: true,
    },
    {
      title: t("Műfajok"),
      // link: "/contact",
      anchor: "#termekek",
      //TODO oldalon beluli navigacio
      link: "/p",

      showAtHeader: true,
      allPages: true,
      // subMenu: [...productData],
    },
    {
      title: t("Részletek"),
      // link: "/blog",
      // anchor: "#tartalom",
      //TODO oldalon beluli navigacio
      link: "/b",
      showAtHeader: true,
      allPages: true,
      // subMenu: [...blogData],
    },

    {
      title: t("contact"),
      // link: "/contact",
      anchor: "#contact",
      //TODO oldalon beluli navigacio
      link: "/",
      showAtHeader: true,
      allPages: true,
    },
  ];

  const menuItemsAtTheHeader = menuItems.filter(
    (menuItem) => menuItem.showAtHeader
  );
  return props.children({
    ...props,
    menuItemsAtTheHeader,
    menuItems,
  });
}

export default withTranslation("common")(MenuWrapper);
