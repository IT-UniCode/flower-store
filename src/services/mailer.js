import nodemailer from 'nodemailer';
import { config } from 'dotenv';

export default function (html, text, email) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config().parsed.EMAIL,
      pass: config().parsed.PASSWORD,
    },
  });

  const mailOptions = {
    from: config().parsed.EMAIL,
    to: `${config().parsed.EMAIL}, ${email}`,
    subject: 'Flower Store',
    text: text,
    html: html,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(`Error ${err}`);
    }
  });
}
