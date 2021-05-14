import Basket from '../../models/basket/index.js';
import mailer from '../../services/mailer.js';

export default function (req, res) {
  Basket.findOneAndUpdate(
    { $and: [{ userId: req.params.id }, { status: 'created' }] },
    req.body
  )
    .then(() => {
      const date = new Date(req.body.orderDate).toLocaleDateString();

      const html = `<h1>Ваш заказ отправлен менеджеру:</h1><table style='border: 1px solid #000'><thead><tr><th>ФИО</th><th>Телефон</th><th>Адрес доставки</th><th>Сумма заказа</th><th>Дата заказа</th><th>Статус</th></tr></thead><tbody><tr><td>${req.body.fullName}</td><td>${req.body.phone}</td><td>${req.body.address}</td><td>${req.body.price}грн.</td><td>${date}</td><td>В обработке</td></tr></tbody></table><p>Ожидайте наш менеджер свяжется с вами для подтверждения заказа </p>`;

      const text = 'Ваш заказ был принят';

      mailer(html, text, req.body.email);
      res.json('Basket confirmated');
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
