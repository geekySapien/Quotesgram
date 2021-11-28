const router = require('express').Router();

const Category = require('../models/Category');

/*
Route:          /
Description:    create new category
Access:         Public
Parameters:     None
Method:         post
*/

router.post("/", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const category = await newCategory.save();
        return res.status(200).json({ message: "Category Successfully created", category: category });
    } catch (err) {
        return res.status(500).json(err);
    }
})

/*
Route:          /
Description:    get all categories
Access:         Public
Parameters:     None
Method:         get
*/

router.get("/", async (req, res) => {
    try {
        let categories = await Category.find();
        return res.status(200).json({ message: "Categories Retrieved successfully", categories: categories });
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;
