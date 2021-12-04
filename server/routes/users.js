const router = require("express").Router();
const bcrypt = require("bcrypt");
const { findByIdAndUpdate } = require("../models/User");
const User = require("../models/User");
const Post = require('../models/Post');

/*
Route:          /
Description:    Update User Info
Access:         Public
Parameters:     id
Method:         Put
*/
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      return res
        .status(200)
        .json({ message: "User updated succesfully", user: updatedUser });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "You can only update your account" });
  }
});

/*
Route:          /
Description:    Delete a User
Access:         Public
Parameters:     id
Method:         delete
*/

router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {

            const user = await User.findById(req.params.id);

            try {
                await Post.deleteMany({ username: user.username });
              await User.findByIdAndDelete(req.params.id);
              return res.status(200).json({ message: "User has been deleted" });
            } catch (err) {
              return res.status(500).json(err);
            }
        } catch (err) {
            return res.status(404).json({ message: "User not found" });
       }
    }
    else {
        return res.status(401).json("You can only delete your account");
    }
})

/*
Route:          /
Description:    Get a User
Access:         Public
Parameters:     id
Method:         get
*/

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        return res.status(200).json({message:"User found", user:others})
    } catch (err) {
        return res.status(500).json(err);
    }
})


module.exports = router;
