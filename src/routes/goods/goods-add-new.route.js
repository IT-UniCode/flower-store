import imgur from "imgur";
import { v4 as uuidv4 } from "uuid";

import Goods from "../../models/goods/index.js";

export default function (req, res) {
  imgur
    .uploadFile(req.file.path)
    .then((json) => {
      const newGoods = new Goods({
        _id: uuidv4(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        existence: req.body.existence,
        type: req.body.type,
        tags: req.body.tags,
        goodsImage: json.link,
      });

      newGoods
        .save()
        .then(() => res.json("Goods added!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => {
      console.error(err.message);
    });
}
