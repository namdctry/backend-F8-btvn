const nodemailer = require("nodemailer");

const path = require("path");
const model = require("../models/index");
const sendEmail = model.SendEmail;
const moment = require("moment");
module.exports = {
  index: async (req, res) => {
    const infoEmail = await sendEmail.findAll();
    console.log(infoEmail);
    res.render("home/home", { infoEmail, moment });
  },
  handleSend: async (req, res) => {
    const { email, title, content } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASS,
      },
    });
    const mailOptions = {
      from: `"NGUYEN NAM" ${process.env.MAIL_USERNAME}`, // sender address
      to: email, // list of receivers
      subject: title, // Subject line
      html: `<p>Hello</p><img src="http://127.0.0.1:3001/home/track/this/image/gicungdc.jpg" alt="anh loi" width="1" height="1" ><p>${content}</p>`, // html body
    };
    await transporter.sendMail(mailOptions);

    sendEmail.create({ toEmail: email, title: title, content: content });

    res.redirect("/home");
  },
  sendTrack: (req, res) => {
    const id = req.params.param;
    console.log(id);
    res.sendFile(path.dirname(__dirname) + "/public/images/1px.png");
  },
};
