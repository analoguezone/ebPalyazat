const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config({ path: ".env" });
// const creds = require("./config/my-speech-1586206444417-d0123c6f5f3d.json"); // the file saved above
const doc = new GoogleSpreadsheet(
  "1R7C-MRKnEL4CI9RAUowyDeOteMWr8Fd7FqVtJZygUzE"
);

async function init() {
  await doc.useServiceAccountAuth({
    // env var values are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  // doc.useApiKey(process.env.GOOGLE_API_KEY);
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const larryRow = await sheet.addRow({
    nev: "Zimmer Zsofi",
    email: "zimmerzsofi@gmail.com",
  });
  // const rows = await sheet.getRows();
  console.log(sheet.title);
  // console.log(sheet.rowCount);
}

module.exports.sendForm = async function sendForm(formData) {
  console.log(formData);
  const key = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  // console.log(key);
  await doc.useServiceAccountAuth({
    // env var values are copied from service account credentials generated by google
    // see "Authentication" section in docs for more info

    client_email: process.env.CLIENT_EMAIL,
    private_key: key,
  });

  // doc.useApiKey(process.env.GOOGLE_API_KEY);
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  const sheet = doc.sheetsByIndex[0];
  try {
    const larryRow = await sheet.addRow(formData);
    return "success";
  } catch (err) {
    console.log(err);
    return err.message;
  }
};
