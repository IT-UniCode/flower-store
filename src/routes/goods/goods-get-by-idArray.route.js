import Goods from '../../models/goods/index.js';

export default function (req, res) {
  Goods.find({ _id: { $in: req.body.goodsIdArray } })
    .then((goods) => res.json(goods))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
