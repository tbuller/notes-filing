const User = require("../models/user");

const UsersController = {
  Create: (req, res, next) => {
    const user = new User(req.body);
    console.log(user)
    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" });
      }
    });
  },
};

module.exports = UsersController;