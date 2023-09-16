const router = require("express").Router();
const Services = require("../models/Post");



router.post("/",  async(req,res)=>{
    const newCart = new Services(req.body);
    
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
    })
    

    router.get("/:id", async (req, res) => {
        try {
          const post = await Services.findById(req.params.id);
          res.status(200).json(post);
        } catch (err) {
          res.status(500).json(err);
        }
      });
      



      //GET ALL POSTS
      router.get("/", async (req, res) => {
        //const username = req.query.user;
        const catName = req.query.cat;
        try {
          let posts;
          if (catName) {
            posts = await Services.find({
              categories: {
                $in: [catName],
              },
            });
          } else {
            posts = await Services.find();
          }

         // const { password, ...others } = user._doc;
         // res.status(200).json(others);

          res.status(200).json(posts);
        } catch (err) {
          res.status(500).json(err);
        }
      });









module.exports = router;