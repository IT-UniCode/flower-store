import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.deleteOne({ _id: req.params.id })
    .then((basket) => res.json(basket))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
