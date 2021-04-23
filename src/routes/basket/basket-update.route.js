import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOneAndUpdate({ userId: req.params.id }, req.body)
    .then(() => {
      res.json('Basket updated')
    })
    .catch(error => res.status(400).json(`Error ${error}`));
}
