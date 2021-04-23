import { Router } from 'express';

import getBasketById from './basket-get-by-id.route.js';
import getBasketByUserId from './basket-get-by-userId.route.js';
import getBasketList from './basket-get-all.route.js';
import createBasket from './basket-create-new.route.js';
import addGoodsToBasket from './basket-add-goods.route.js';
import deleteAllBasket from './basket-del-all.route.js';
import updateBasket from './basket-update.route.js';

const router = Router();

router.route('/:id').get((req, res) => {
  getBasketById(req, res);
});

router.route('/user/:id').get((req, res) => {
  getBasketByUserId(req, res);
});

router.route('/').get((req, res) => {
  getBasketList(req, res);
});

router.route('/create/:id').post((req, res) => {
  createBasket(req, res);
});

router.route('/update/:id').post((req, res) => {
  updateBasket(req, res);
});

router.route('/add-goods/:id').post((req, res) => {
  addGoodsToBasket(req, res);
});

router.route('/delete').post((req, res) => {
  deleteAllBasket(req, res);
});

export default router;
