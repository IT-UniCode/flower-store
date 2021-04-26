import Basket from "../../models/basket/index.js";

export default function (req, res) {
  Basket.findOneAndUpdate(
    { userId: req.params.id },
    { $pull: { goods: { goodsId: req.body.goodsId } } }
  )
    .then((message) => res.json(message))
    .catch((error) => res.status(400).json(`Error ${error}`));
}
