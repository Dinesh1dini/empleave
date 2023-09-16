const Category = require("../models/Category.js");

const router = require("express").Router();

// CREATE  

router.post("/",  async(req,res)=>{
const newCart = new Category(req.body);

try{
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
}catch(err){
    res.status(500).json(err);
}
})


router.get("/", async(req,res) =>{
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;