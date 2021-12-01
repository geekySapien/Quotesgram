const router = require('express').Router();
const Post = require("../models/Post");
const User = require("../models/User");


/*
Route:          /
Description:    Create a post
Method:         Post
Access:         Public
Parameter:      none
 */

router.post("/", async (req, res) => {
      const newPost =  new Post(req.body);
    try {
      
        const post = await newPost.save();
        return res.status(200).json({ message: "Post Successfully created", post: post });
    } catch (err) {
        return res.status(500).json(err);
    }
})


/*
Route:          /
Description:    Update a post
Method:         Put
Access:         Public
Parameter:      id
*/

router.put('/:id', async(req, res)=> {
    try{
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, {
                    new: true
                });
                return res.status(200).json({ message: "Post Succesfully updated", post: updatedPost });
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        else {
            return res.status(401).json({ message: "You can only update your post" });
        }
    }catch(err) {
        return res.status(500).json(err);
    }
})

/*
Route:          /
Description:    Delete a post
Method:         Delete
Access:         Public
Parameter:      id
*/

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                //await Post.deleteById(req.params.id);-> can also be done
             
                return res.status(200).json({ message: "Post Succesfullly deleted" });
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        else {
            return res.status(401).json({ message: "You can only delete your post" });
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

/*
Route:          /
Description:    Get a post
Method:         Get
Access:         Public
Parameter:      id
*/

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json({ message: "Post Retrieved Successfully", post: post });
    } catch (err) {
        return res.status(500).json(err);
    }
})


/*
Route:          /
Description:    Get all post
Method:         Get
Access:         Public
Parameter:      none
*/

router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username: username });

        }
        else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        }
        else
            posts = await Post.find();
        return res.status(200).json({ message: "All post succesfully retrieved", posts: posts });
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;