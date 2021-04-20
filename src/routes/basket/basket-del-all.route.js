import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.deleteMany()
    .then(() => res.json('All basket removed'))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
