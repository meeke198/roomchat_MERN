// routes / auth.js;
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE;
const jwt = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");

// REGISTER
router.post("/signup", async (req, res) => {
  // console.log(req.body);

  try {
    const email = await User.findOne({ email: req.body.email }).exec(); //exec convert kwa findone thanh promise
    const username = await User.findOne({ username: req.body.username }).exec();
    // console.log({email, userName});
    if (email || username) {
      return res
        .status(400)
        .send({ message: "Email or Username already exists" });
    }
    //generate new password
    const salt = await bcrypt.genSalt(10);
    //The bcrypt.hash() function takes in the plain password and a salt as input, and returns a hashed string.
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user and respond
    const user = await newUser.save();
    const token = jwt.sign(
      { user_id: user._id, email, username },
      SECRET_JWT_CODE,
      {
        expiresIn: "15m",
      }
    );
    // save user token
    user.token = token;
    // console.log({ user });
    res.status(200).json(user);
  } catch (e) {
    // console.log(e);
    res.status(500).json(e.message);
  }

  //   console.log({ user });
  //   User.findOne({ email: req.body.email }, async function (error, user) {
  //     console.log(error, user);
  //     if (user) {
  //       return res.status(400).send({ message: "User already exists" });
  //     }

  //     try {
  //       //generate new password
  //       const salt = await bcrypt.genSalt(10);
  //       const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //       //create new user
  //       const newUser = new User({
  //         username: req.body.username,
  //         email: req.body.email,
  //         password: hashedPassword,
  //       });
  //       //save user and respond
  //       const user = await newUser.save();
  //       res.status(200).json(user);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(500).json(err.message);
  //     }
  //   });
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
    if (user && validPassword) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email: user.email },
        SECRET_JWT_CODE,
        {
          //bo them username vo payload duoc khong? co can thiet khong
          expiresIn: "15m",
        }
      );

      // save user token
      user.token = token;
      // console.log({ user, token });
      // user
      res.status(200).json(user);
      // console.log({user});
    } else {
      res.status(400).json("Invalid Credentials");
    }
    // how to handle this credential
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
