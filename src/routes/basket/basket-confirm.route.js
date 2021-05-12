import nodemailer from 'nodemailer';
import { config } from 'dotenv';

import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOneAndUpdate({ $and: [{ userId: req.params.id }, { status: 'created' }] }, req.body)
    .then(() => {

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config().parsed.EMAIL,
          pass: config().parsed.PASSWORD,
        }
      });

      const mailOptions = {
        from: 'maks.sapeyko22@gmail.com',
        to: 'maks.sapeyko@gmail.com, maks.sapeyko22@ukr.net',
        subject: 'Testing and Testing',
        // html
        text: 'IT Works',
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log(`Error ${err}`);
        } else {
          console.log('Mail sended!!!');
        }
      });

      res.json('Basket confirmated')
    })
    .catch(error => res.status(400).json(`Error ${error}`));
}
