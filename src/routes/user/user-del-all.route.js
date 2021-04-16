import User from '../../models/user/index.js';

export default function (req, res) {
  User.deleteMany()
    .then(() => res.json('Users deleted!'))
    .catch(err => res.status(400).json(`Error ${err}`));
}
