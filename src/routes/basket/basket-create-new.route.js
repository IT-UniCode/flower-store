import Basket from '../../models/basket/index.js';

export default function (req, res) {
  const newBasket = new Basket({
    userId: req.params.id,
    price: 0,
    comment: '',
    address: req.body.address,
    phone: req.body.phone,
    fullName: req.body.fullName,
    orderDate: new Date(),
    status: 'created'
  });

  newBasket.save()
    .then(() => res.json('Basket created!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}
