import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOneAndUpdate(
    { _id: req.body.basketId },
    { status: req.body.status }
  )
    .then((basket) => {
      res.json(basket);
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
