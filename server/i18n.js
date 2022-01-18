import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "hu",
  otherLanguages: ["hu"], //otherLanguages: ["en", "de"],
  // localeSubpaths: {
  //   en: "en",
  //   hu: "hu",
  // },
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  i18n,
  appWithTranslation,
  withTranslation,
  Link,
  Trans,
  Router,
} = NextI18NextInstance;
