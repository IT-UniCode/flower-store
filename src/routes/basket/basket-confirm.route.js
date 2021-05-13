import Basket from '../../models/basket/index.js';
import mailer from '../../middleware/mailer.js';

export default function (req, res) {
  Basket.findOneAndUpdate(
    { $and: [{ userId: req.params.id }, { status: 'created' }] },
    req.body
  )
    .then(() => {
      const html = `<h1>Ваш заказ принят:</h1><table style='border: 1px solid #000'><thead><tr><th>ФИО</th><th>Телефон</th><th>Адрес доставки</th><th>Сумма заказа</th><th>Статус</th></tr></thead><tbody><tr><td>${req.body.fullName}</td><td>${req.body.phone}</td><td>${req.body.address}</td><td>${req.body.price}грн.</td><td>Принято</td></tr></tbody></table>`;

      const text = 'Ваш заказ был принят';

      mailer(html, text, req.body.email);
      res.json('Basket confirmated');
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
