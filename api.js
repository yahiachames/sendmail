const genMailer = require("../mailerConfig/config");
router.post("/send-email", (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) res.send(err);
    else if (result === null) res.send("invalid email");
    else {
      genMailer(req.body.email);
      res.send("an email sended");
    }
    console.log(result);
  });
});
