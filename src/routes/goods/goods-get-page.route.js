import Goods from '../../models/goods/index.js';

export default function (req, res) {
  const tags = req.body.tags;
  const type = req.body.type;
  const startId = Number(req.body.startId);
  const endId = Number(req.body.endId);

  if (tags === '' && type === '') {
    Goods.find()
      .skip(startId)
      .limit(endId)
      .then((goods) => {
        res.json(goods);
      })
      .catch((error) => res.status(400).json(`Error ${error}`));
  } else if (tags !== '' && type !== '') {
    Goods.find({
      $and: [{ type: type }, { tags: tags }],
    })
      .skip(startId)
      .limit(endId)
      .then((goods) => {
        res.json(goods);
      })
      .catch((error) => res.status(400).json(`Error ${error}`));
  } else {
    Goods.find({
      $or: [{ type: type }, { tags: tags }],
    })
      .skip(startId)
      .limit(endId)
      .then((goods) => {
        res.json(goods);
      })
      .catch((error) => res.status(400).json(`Error ${error}`));
  }
}
