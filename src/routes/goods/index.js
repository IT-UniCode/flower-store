import { Router } from "express";

import getGoodsList from "./goods-get-all.route.js";
// import addNewGoods from './goods-add-new.route.js';
import delAllGoods from "./goods-del-all.route.js";

import imgur from "imgur";
import { v4 as uuidv4 } from "uuid";
import Goods from "../../models/goods/index.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, res, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, res, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
});

const router = Router();



router.post("/add", upload.single("productImage"), (req, res) => {
  console.log(req.file);

  const newGoods = new Goods({
    goodsId: uuidv4(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    existence: req.body.existence,
    type: req.body.type,
    tag: req.body.tag,
    productImage: req.file,
  });

  newGoods.save()
    .then(() => res.json('Goods added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/").get((req, res) => {
  getGoodsList(req, res);
});

router.route("/delete").post((req, res) => {
  delAllGoods(req, res);
});

export default router;
