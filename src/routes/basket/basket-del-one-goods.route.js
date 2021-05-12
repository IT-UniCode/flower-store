import Basket from "../../models/basket/index.js";

export default function (req, res) {
  Basket.findOneAndUpdate(
    { $and: [{ userId: req.params.id }, { status: 'created' }] },
    { $pull: { goods: { goodsId: req.body.goodsId } } }
  )
    .then((message) => res.json(message))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
