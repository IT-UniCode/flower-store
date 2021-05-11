import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOneAndUpdate({ $and: [{ userId: req.params.id }, { status: 'created' }] }, req.body)
    .then(() => {
      res.json('Basket confirmated')
    })
    .catch(error => res.status(400).json(`Error ${error}`));
}
