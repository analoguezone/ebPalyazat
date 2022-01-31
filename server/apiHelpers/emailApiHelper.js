"use strict";
if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: ".env" });
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail = async ({ to, body, subject, attachments }) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "1data.hu",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "info@safepalwallet.hu", // generated ethereal user
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
      from: '"Talent 22 | Electronic Beats" <info@safepalwallet.hu>', // sender address
      to: `${to}`, // list of receivers
      subject: subject, // Subject line
      html: body, // html body
      attachments,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return "success";
  } catch (err) {
    return err;
  }
};
