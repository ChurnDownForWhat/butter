const nodemailer = require('nodemailer')


module.exports = {
  sendEmail: (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'churndownforwhat20@gmail.com',
        pass: process.env.FBPASS
      }
    })
    let mailOptions = {
      to: 'churndownforwhat20@gmail.com',
      subject: 'User Feedback',
      text: req.body.text
    }
    transporter.sendMail(mailOptions)
  }
}
