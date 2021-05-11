import { Router } from "express";

import getGoodsList from "./goods-get-all.route.js";
import getGoodsById from "./goods-get-by-id.route.js";
import getGoodsByIdArray from "./goods-get-by-idArray.route.js";
import addNewGoods from './goods-add-new.route.js';
import delAllGoods from "./goods-del-all.route.js";
import sortGoods from './goods-sort.route.js';
import goodsPaginationRoute from "./goods-pagination.route.js";

import upload from '../../middleware/uploadImage.js';

const router = Router();

router.post("/add", upload.single('goodsImage'), (req, res) => {
  addNewGoods(req, res);
});

router.route("/").get((req, res) => {
  getGoodsList(req, res);
});

router.route("/by-id/:id").get((req, res) => {
  getGoodsById(req, res);
});

router.route("/by-idArr").post((req, res) => {
  getGoodsByIdArray(req, res);
});

router.route("/sort").post((req, res) => {
  sortGoods(req, res);
});

router.route("/delete").delete((req, res) => {
  delAllGoods(req, res);
});

router.route("/page").post((req, res) => {
  goodsPaginationRoute(req, res);
})

export default router;
