import { Router } from 'express';

import getUsersList from './user-get-all.route.js';
import signUpNewUser from './user-signup.route.js';
import delAllUsers from './user-del-all.route.js';
import signInUser from './user-signin.route.js';

const router = Router();

router.route('/').get((req, res) => {
  getUsersList(req, res);
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

export default router;
