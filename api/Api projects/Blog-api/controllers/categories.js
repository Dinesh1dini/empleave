
import Category from "../models/Category.js";


 export const addcategory = async(req, res, next)=>{

    const addcat = new Category(req.body);
    try {
      const savedCat = await addcat.save();
      res.status(200).json(savedCat);
    } catch (err) {
      res.status(500).json(err);
    }
  
    }



      export const getcat = async(req, res, next)=>{


      try {
        const cats = await Category.find();
        res.status(200).json(cats);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  
