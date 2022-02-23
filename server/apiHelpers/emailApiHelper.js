"use strict";
if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: ".env" });
const nodemailer = require("nodemailer");

var encodeHtmlEntity = function (str) {
  var buf = [];
  for (var i = str.length - 1; i >= 0; i--) {
    buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
  }
  return buf.join("");
};

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail = async ({ to, subject, attachments, formData }) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "ebeats-mail.sys.dom.de",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hungary@electronicbeats.net", // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Szelektor 22 | Electronic Beats" <hungary@electronicbeats.net>', // sender address
      to: to, // list of receivers
      subject: "Szelektor 22 Jelentkezés visszaigazolás", // Subject line
      html: body(formData), // html body
      attachments: [
        {
          filename: "logo.png",
          path: __dirname + `/../../public/images/eb/logo.png`,
          cid: "logo",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);

    return "success";
  } catch (err) {
    return err;
  }
};

const body = function ({ polgari_nev }) {
  return `
  <img  src="cid:logo">
  <div style="padding:50px">
  <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2 style="padding:50px">${encodeHtmlEntity(` `)}</h2>
        <h2 style="padding:50px">${encodeHtmlEntity(
          `Kedves ${polgari_nev}!`
        )}</h2>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>${encodeHtmlEntity(
          `Köszönjük, hogy jelentkeztél, a zsűri hamarosan ráveti magát a zenédre! 🙂 Figyeld az electronicbeats.hu-t!`
        )}</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>A Telekom Electronic Beats csapata</p>
      </div> `;
};

async function init() {
  let transporter = nodemailer.createTransport({
    host: "ebeats-mail.sys.dom.de",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hungary@electronicbeats.net", // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Szelektor 22 | Electronic Beats" <hungary@electronicbeats.net>', // sender address
      to: `${"peter.takacs@1data.hu"}`, // list of receivers
      subject: "Szelektor 22 Jelentkezés visszaigazolás", // Subject line
      html: body({ polgari_nev: "Taki" }), // html body
      attachments: [
        {
          filename: "logo.png",
          path: __dirname + `/../../public/images/eb/logo.png`,
          cid: "logo",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);

    return "success";
  } catch (err) {
    return err;
  }
}

// init();

// module.exports.sendMail = async ({ to, body, subject, attachments }) => {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   //let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "1data.hu",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "info@safepalwallet.hu", // generated ethereal user
//       pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//     },
//     tls: {
//       // do not fail on invalid certs
//       rejectUnauthorized: false,
//     },
//   });
//   try {
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Szelektor 22 | Electronic Beats" <info@safepalwallet.hu>', // sender address
//       to: `${to}`, // list of receivers
//       subject: subject, // Subject line
//       html: body, // html body
//       attachments,
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     return "success";
//   } catch (err) {
//     return err;
//   }
// };
