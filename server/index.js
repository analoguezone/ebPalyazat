const express = require("express");
const next = require("next");
const fs = require("fs");

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("./i18n").default;

const bodyParser = require("body-parser");
const { sendMail } = require("./apiHelpers/emailApiHelper");

const { sendForm } = require("./apiHelpers/googleSheet");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const { DESTINATION, createSitemap } = require("./sitemap");

const port = process.env.PORT || 3570;

var encodeHtmlEntity = function (str) {
  var buf = [];
  for (var i = str.length - 1; i >= 0; i--) {
    buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
  }
  return buf.join("");
};

nextApp.prepare().then(async () => {
  const app = express();

  await nextI18next.initPromise;
  app.use(nextI18NextMiddleware(nextI18next));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/my-custom-route", (req, res) =>
    res.status(200).json({ hello: "Hello, from the back-end world!" })
  );

  app.get("/sitemap.xml", function (req, res) {
    res.header("Content-Type", "application/xml");
    (async function sendXML() {
      let xmlFile = await createSitemap();
      // Send it to the browser
      console.log(xmlFile);
      res.send(xmlFile);
      // Create a file on the selected destination
      fs.writeFileSync(DESTINATION, xmlFile);
    })();
  });

  app.post("/api/message", async (req, res) => {
    const { name, email, message } = req.body;

    const response = await sendMail({
      to: "", //req.user.email,
      subject: "Kapcsolatfelveteli form",
      body: `Nev: ${name}, emal: ${email}, uzenet: ${message}`,
    });
    res.send({ message: response });
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.post("/api/sendForm", async (req, res) => {
    const formData = req.body;
    const { captchaToken } = formData;

    const captchaResult = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captchaToken}`,
      {
        method: "post",
      }
    );
    const response = await captchaResult.json();

    console.log("[RECAPTCHA_SECRET]", process.env.RECAPTCHA_SECRET);
    console.log("[captcha token]", captchaToken);
    console.log("[captcha response]", response);
    if (response.success) {
      const response = await sendForm(formData);
      console.log(formData);

      const response = await sendMail({
        to: formdata?.email, //req.user.email,
        subject: "Talent 22 Jelentkezés visszaigazolás",
        formdata,
      });

      res.send({ message: response });
    } else {
      res.send({ message: response });
      // res.send({ message: "ERROR: BOT!!!" });
    }
  });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
    console.log(process.env);
  });
});
