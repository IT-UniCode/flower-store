import Goods from '../../models/goods/index.js';

export default function (req, res) {
  Goods.findById(req.params.id)
    .then((goods) => res.json(goods))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
