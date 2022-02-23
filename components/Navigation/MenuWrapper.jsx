import React from "react";

// import blogData from "../../data/blogData";
// import productData from "../../data/productData";
import { withTranslation } from "../../server/i18n";

function MenuWrapper(props) {
  const { t } = props;
  const menuItems = [
    {
      title: t("Szelektor 22"),
      // link: "/blog",
      anchor: "#reszletek",
      anchorUrl: "/",
      //TODO oldalon beluli navigacio
      // link: "/b",
      showAtHeader: true,
      allPages: true,
      // subMenu: [...blogData],
    },
    {
      title: t("Feltételek"),
      // link: "/contact",
      // anchor: "#23",
      //TODO oldalon beluli navigacio
      link: "/feltetelek",
      showAtHeader: true,
      allPages: true,
    },

    // {
    //   title: t("contact"),
    //   // link: "/contact",
    //   anchor: "#contact",
    //   //TODO oldalon beluli navigacio
    //   link: "/",
    //   showAtHeader: true,
    //   allPages: true,
    // },
    {
      title: t("Válogatás 2020"),
      link: "https://www.electronicbeats.hu/sslteb001/",
      // anchor: "#contact",
      //TODO oldalon beluli navigacio
      // link: "/",
      showAtHeader: true,
      allPages: true,
      externalLink: true,
    },
    {
      title: t("eb.hu"),
      link: "https://electronicbeats.hu/",
      // anchor: "#contact",
      //TODO oldalon beluli navigacio
      // link: "/",
      showAtHeader: true,
      allPages: true,
      externalLink: true,
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
