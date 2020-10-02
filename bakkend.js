const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yahia.chames14@gmail.com", // generated ethereal user
    pass: "*****", // generated ethereal password
  },
});

const genMailer = async (reciver) => {
  // send mail with defined transport object
  try {
    let info = await transporter.sendMail(
      {
        from: "yahia.chames14@gmail.com", // sender address
        to: reciver, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<h1> hello chames </h1>", // html body
      },
      (err, data) => {
        if (err) console.log(err);
        console.log(data);
      }
    );
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    return nodemailer.getTestMessageUrl(info);
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (e) {
    console.log(e);
  }
};
module.exports = genMailer;
