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
  Index: (req, res, next) => {    
    User.find((err, users) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(200).json({ users: users });
      }
    })
  }
};

module.exports = UsersController;