import Goods from '../../models/goods/index.js';

export default function (req, res) {
  Goods.deleteMany()
    .then(() => res.json('Goods deleted!'))
    .catch(err => res.status(400).json(`Error ${err}`));
}
