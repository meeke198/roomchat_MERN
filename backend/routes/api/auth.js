// routes / auth.js;
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
// const Database = require("../../models/db");
// router.post("/login", (req, res) => {
//   res.json("goi login");
// console.log(req)
// console.log("goi login ne")
// });

// REGISTER
router.post("/signup", async (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.emai }).then((user) => {
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }
  });
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
});

// //LOGIN
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Incorrect username or password.");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
