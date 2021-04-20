import { Router } from 'express';

import getUsersList from './user-get-all.route.js';
import getUsersById from './user-get-by-id.route.js';
import signUpNewUser from './user-signup.route.js';
import delAllUsers from './user-del-all.route.js';
import signInUser from './user-signin.route.js';
import updateUserBasket from './user-update-basket.route.js';
// import requireLogin from '../../middleware/requireLogin.js';

const router = Router();

router.route('/').get((req, res) => {
  getUsersList(req, res);
});

router.route('/:id').get((req, res) => {
  getUsersById(req, res);
});

router.route('/signup').post((req, res) => {
  signUpNewUser(req, res);
});

router.route('/signin').post((req, res) => {
  signInUser(req, res);
})

router.route('/delete').post((req, res) => {
  delAllUsers(req, res);
});

router.route('/update/update-basket/:id').post((req, res) => {
  updateUserBasket(req, res);
});

// router.get('/protected', requireLogin, (req, res) => {

// })

export default router;
