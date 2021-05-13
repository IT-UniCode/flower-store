import Basket from '../../models/basket/index.js';
import mailer from '../../middleware/mailer.js';

export default function (req, res) {
  Basket.findOneAndUpdate(
    { _id: req.body.basketId },
    { status: req.body.status }
  )
    .then((basket) => {
      if (req.body.status !== 'isdone') {
        const text = 'Ваш заказ был принят';
        let status = '';

        switch (req.body.status) {
          case 'received':
            status = 'принят';
            break;
          case 'staffed':
            status = 'укомплектован';
            break;
          default:
            break;
        }

        const html = `<h1>Ваш заказ:</h1><table style='border: 1px solid #000'><thead><tr><th>ФИО</th><th>Телефон</th><th>Адрес доставки</th><th>Сумма заказа</th><th>Статус</th></tr></thead><tbody><tr><td>${basket.fullName}</td><td>${basket.phone}</td><td>${basket.address}</td><td>${basket.price}грн.</td><td>${status}</td></tr></tbody></table>`;

        mailer(html, text, basket.email);
      }
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
