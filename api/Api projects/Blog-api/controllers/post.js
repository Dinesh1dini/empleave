import Post from "../models/Post.js";


export const addpost = async(req, res, next)=>{
 
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
    }
    
    


export const updatepost = async(req, res, next)=>{

    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
    }

}


export const deletepost = async(req, res, next)=>{


  /*
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can delete only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
      }
*/

      try {
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
    
        if (post.username !== req.body.username) {
          return res.status(401).json({ message: "You can delete only your post!" });
        }
    
        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Post has been deleted" });

      } catch (err) {
        res.status(500).json(err);
      }





       }












       export const getposts = async(req, res, next)=>{


        try {
          const post = await Post.findById(req.params.id);
          res.status(200).json(post);
        } catch (err) {
          res.status(500).json(err);
        }

       }



  export const getallpost = async(req, res, next)=>{

    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }

  }

