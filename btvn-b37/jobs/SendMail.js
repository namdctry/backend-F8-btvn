const nodemailer = require("nodemailer");
class SendMail {
  constructor(job) {
    this.job = job;
  }

  handle = async () => {
    //Logic gửi email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "nam2002bv@gmail.com",
        pass: "zkux xrwc zmza irnm",
      },
    });
    const info = await transporter.sendMail({
      from: `ng nam F8 <nam2002bv@gmail.com>`, // sender address
      to: this.job.email, // list of receivers
      subject: `Xin chào: ${job.name}`, // Subject line
      html: `Xin chào bạn ${job.name}, tôi đang test email`,
    });
    console.log(info);
  };
}

module.exports = SendMail;
