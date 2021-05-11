import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.find({ $and: [{ userId: req.params.id }, { status: 'created' }] })
    .then(basket => res.json(basket))
    .catch(error => res.status(400).json(`Error ${error}`));
}
