import User from "../../models/user/index.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default function (req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Write email or password!" });
    }
    User.findOne({ email: email })
      .then((savedUser) => {
        if (!savedUser) {
          return res
            .status(400)
            .json({ error: "Please, write correct email or password!" });
        }
        bcrypt
          .compare(password, savedUser.password)
          .then((isMatch) => {
            if (isMatch) {
              const token = jwt.sign(
                { _id: savedUser._id },
                process.env.JWT_SECRET,
                {
                  expiresIn: '1h',
                }
              );
              res.json({ token: token });
            } else {
              return res
                .status(400)
                .json({ error: "Please, write correct email or password!" });
            }
          })
          .catch((error) => console.log(err));
      })
      .catch((err) => res.status(400).json(`Error: ${err}`));
  } catch (error) {
    console.log(error.message);
  }
}
