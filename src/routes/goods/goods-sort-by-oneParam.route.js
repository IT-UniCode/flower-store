import Goods from '../../models/goods/index.js';

export default function (req, res) {
  Goods.find({ $or: [{ type: req.body.type }, { tags: req.body.tags }] })
    .then(goods => res.json(goods))
    .catch(error => res.status(400).json(`Error ${error}`));
};
