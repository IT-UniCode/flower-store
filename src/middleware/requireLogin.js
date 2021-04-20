import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
const User = mongoose.model('User');

export default function (req, res) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: 'You must be logged in' });
  }
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(400).json({ error: 'You must be logged in' })
    }
    const { _id } = payload;
    User.findById(_id)
      .then(userData => { res.json(userData) })
      .catch(err => res.json(`Error ${err}`))
  });
}
