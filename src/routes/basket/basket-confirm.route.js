import nodemailer from 'nodemailer';
import { config } from 'dotenv';

import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOneAndUpdate(
    { $and: [{ userId: req.params.id }, { status: 'created' }] },
    req.body
  )
    .then(() => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config().parsed.EMAIL,
          pass: config().parsed.PASSWORD,
        },
      });

      const mailOptions = {
        from: 'maks.sapeyko22@gmail.com',
        to: `maks.sapeyko22@gmail.com, ${req.body.email}`,
        subject: 'Flower Store',
        text: 'Ваш заказ был принят',
        html: `<h1>Ваш заказ:</h1><table style='border: 1px solid #000'><thead><tr><th>ФИО</th><th>Телефон</th><th>Адрес доставки</th><th>Сумма заказа</th><th>Статус</th></tr></thead><tbody><tr><td>${req.body.fullName}</td><td>${req.body.phone}</td><td>${req.body.address}</td><td>${req.body.price}грн.</td><td>Принято</td></tr></tbody></table>`,
      };

      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log(`Error ${err}`);
        }
      });

      res.json('Basket confirmated');
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
