const express = require("express");
const next = require("next");
const fs = require("fs");

const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("./i18n").default;

const bodyParser = require("body-parser");
const { sendMail } = require("./apiHelpers/emailApiHelper");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const { DESTINATION, createSitemap } = require("./sitemap");

const port = process.env.PORT || 3560;

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

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${port}`);
    console.log(process.env);
  });
});
