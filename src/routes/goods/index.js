import { Router } from "express";

import getGoodsList from "./goods-get-all.route.js";
import getGoodsById from "./goods-get-by-id.route.js";
import getGoodsByIdArray from "./goods-get-by-idArray.route.js";
import addNewGoods from './goods-add-new.route.js';
import delAllGoods from "./goods-del-all.route.js";
import filterGoods from './goods-filter.route.js';
import getGoodsListPage from "./goods-get-page.route.js";

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

router.route("/filter").post((req, res) => {
  filterGoods(req, res);
});

router.route("/delete").delete((req, res) => {
  delAllGoods(req, res);
});

router.route("/page").post((req, res) => {
  getGoodsListPage(req, res);
})

export default router;
