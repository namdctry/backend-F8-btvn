const nodemailer = require("nodemailer");

const process = require("process");
const env = process.env.NODE_ENV || "development";

module.exports = {
  sendActivationEmail: async (email, token) => {
    const { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASS, MAIL_FROM } =
      process.env;
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: MAIL_USERNAME,
        pass: MAIL_PASS,
      },
    });
    const activationLink = `http://127.0.0.1:3000/signUp/active/${token}`;

    const mailOption = {
      from: `"hhiihihi" <${MAIL_FROM}>`, // sender address
      to: `${email}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: `Vui lòng kích hoạt tài khoản tại đây ${activationLink}`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    };
    await transporter.sendMail(mailOption);
  },
};
