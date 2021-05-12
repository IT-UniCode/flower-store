import Basket from '../../models/basket/index.js';

export default function (req, res) {
  Basket.findOne({ $and: [{ userId: req.params.id }, { status: 'created' }] })
    .then((basket) => {
      for (let i = 0; i <= basket.goods.length; i++) {
        if (basket.goods[i]?.goodsId === req.body.goodsId) {
          let count = basket.goods[i].count;
          if (req.body.op === '+') {
            count += 1;
          } else if (req.body.op === '-' && count - 1 != 0) {
            count -= 1;
          }
          Basket.findOneAndUpdate(
            {
              $and: [
                { userId: req.params.id },
                { status: 'created' },
                { 'goods.goodsId': req.body.goodsId },
              ],
            },
            { $set: { 'goods.$.count': count } }
          )
            .then(() => res.json('Goods added to basket'))
            .catch((error) => res.status(400).json(`Error ${error}`));
          break;
        } else if (basket.goods.length === i) {
          basket.goods.push({ goodsId: req.body.goodsId, count: 1 });
          basket
            .save()
            .then(() => res.json('Goods added to basket'))
            .catch((error) => res.status(400).json(`Error ${error}`));
          break;
        }
      }
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
