import Goods from '../../models/goods/index.js';

export default function (req, res) {
  Goods.find()
    .then(goods => res.json(goods))
    .catch(err => res.status(400).json(`Error ${err}`));
}
