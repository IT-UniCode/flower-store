import User from '../../models/user/index.js';

export default function (req, res) {
  User.findById(req.params.id)
    .then(user => {
      user.basket = req.body.basket;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(error => res.status(400).json(`Error ${error}`))
}
