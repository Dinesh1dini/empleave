const router = require("express").Router();
const Movie = require("../models/Movies");
const verify = require("../verifyToken");


/*
router.post("/", verify, async (req, res) => {

if(req.user.isAdmin){
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err){
      res.status(500).json(err);
    }
    }else {
    res.status(403).json("You are not allowed!");
    }
    })
    */




    router.post("/", verify, async (req, res) => {
      if (req.user.isAdmin) {
        // Assuming you have a Movie model defined and imported above
        const newMovie = new Movie(req.body);
    
        try {
          // Save the new movie to the database
          const savedMovie = await newMovie.save();
          res.status(201).json(savedMovie); // Respond with the saved movie data as JSON
        } catch (err) {
          res.status(500).json(err); // Respond with an error message as JSON if there's an error saving the movie
        }
      } else {
        // If the user is not an admin, respond with a "Forbidden" error message
        res.status(403).json("You are not allowed!");
      }
    });






    router.put("/:id", verify, async (req, res) => {

        if (req.user.isAdmin) {
            try {
              const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body,
                },
                { new: true }
              );
              res.status(200).json(updatedMovie);
            } catch (err) {
              res.status(500).json(err);
            }
          } else {
            res.status(403).json("You are not allowed!");
          }

    })





    //DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The movie has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });




  router.get("/find/:id", verify, async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//GET Random
router.get("/random", verify, async (req,res)=>{
const type = req.query.type;
let movie;

try{
    if(type === "series"){
        movie = await Movie.aggregate([
            {$match:{isSeries:true}},
            {$sample:{size:1}},
        ])
    }else{
        movie = await Movie.aggregate([
            {$match:{isSeries:false}},
            {$sample:{size:4}},
        ])
    }

    res.status(200).json(movie);
}catch(err){
    res.status(500).json(err);
}
})




router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  



module.exports = router;
