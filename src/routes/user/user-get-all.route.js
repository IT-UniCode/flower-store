import User from '../../models/user/index.js';

export default function (req, res) {
  User.find()
    .then((user) => res.json(user))
    .catch(err => res.status(400).json(`Error ${err}`));
}
