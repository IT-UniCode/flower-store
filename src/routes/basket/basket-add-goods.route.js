import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOne({ userId: req.params.id })
    .then(basket => {
      basket.goods.push(req.body.goodsId);

      basket.save()
        .then(() => res.json('Goods added to basket'))
        .catch(error => res.status(400).json(`Error ${error}`))
    })
    .catch(error => res.status(400).json(`Error ${error}`));

}
