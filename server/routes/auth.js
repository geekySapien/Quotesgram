const router = require("express").Router();
const bcrypt = require("bcrypt");

// user model
const User = require("../models/User");

/*
Route:          /register
Description:    register new user
Access:         Public
Parameter:      None
Methods:        Post
*/

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
      
    const user = await newUser.save();
    return res
      .status(200)
      .json({ message: "User sucessfully added to the database", user: user });
  } catch (err) {
    return res.status(500).json(err);
  }
});

/*
Route:          /login
Description:    user login
Access:         Public
Parameter:      None
Methods:        Post
*/

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json({ message: "Wrong Credentials" });

        const validated = await bcrypt.compare(req.body.password,user.password);
        !validated && res.status(400).json({ message: "Wrogn Credentials" });
        

        const { password, ...others } = user._doc;
        res.status(200).json({ message: "Logged In Succesfully", user: others });


    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;
