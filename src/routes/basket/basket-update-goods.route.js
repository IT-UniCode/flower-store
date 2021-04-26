import Basket from "../../models/basket/index.js";

export default function (req, res) {
  Basket.findOne({ userId: req.params.id })
    .then((basket) => {
      for (let i = 0; i <= basket.goods.length; i++) {
        if (basket.goods[i]?.goodsId === req.body.goodsId) {
          let count = basket.goods[i].count;
          if (req.body.op === "+") {
            count += 1;
          } else if (req.body.op === "-" && count - 1 != 0) {
            count -= 1;
          }
          Basket.updateOne(
            { "goods.goodsId": req.body.goodsId },
            { $set: { "goods.$.count": count } }
          )
            .then((message) => res.json(message))
            .catch((error) => res.status(400).json(`Error ${error}`));
          break;
        } else if (basket.goods.length === i) {
          basket.goods.push({ goodsId: req.body.goodsId, count: 1 });
          basket
            .save()
            .then(() => res.json("Goods added to basket"))
            .catch((error) => res.status(400).json(`Error ${error}`));
          break;
        }
      }
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
}
