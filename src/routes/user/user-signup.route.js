import User from '../../models/user/index.js';
import { v4 as uuidV4 } from 'uuid';
import bcrypt from 'bcrypt';

const saltRound = 10;

export default function (req, res) {
  try {
    bcrypt.hash(req.body.password, saltRound, (err, hash) => {
      if (hash) {
        const newUser = new User({
          _id: uuidV4(),
          name: req.body.name,
          surname: req.body.surname,
          lastname: req.body.lastname,
          phone: req.body.phone,
          address: req.body.address,
          email: req.body.email,
          password: hash,
          basket: req.body.basketId,
          role: 'USER',
        })

        newUser.save()
          .then(() => res.json('User added!'))
          .catch(err => res.status(400).json(`Error: ${err}`));

      } else {
        console.log(err)
      }
    })

  } catch (error) {
    console.log(error.message);
  }
}
