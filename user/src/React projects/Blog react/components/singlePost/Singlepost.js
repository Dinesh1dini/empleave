import { useLocation } from "react-router-dom"

import { Link } from "react-router-dom";
import "./singlePost.css";
import { Context } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";


export default function SinglePost(){

   const location = useLocation(); 
   const path = location.pathname.split("/")[2];
   const [post,setPost] = useState({});
      
  const {user} = useContext(Context);

  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState();

  const [updateMode,setUpdateMode] = useState(false);
  
  const PF = "http://localhost:8000/images/";

   



   useEffect(()=>{
 
    const getPost = async () =>{
        const res = await axios.get("/post/getposts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
    }
 getPost();

   },[path]);

   //console.log(post);


const handleDelete = async () =>{
  try{
    await axios.delete(`/post/deletePost/${post._id}`,{
      data:{username:user.username},
    })
    window.location.replace("/");

  }catch(err){}
}





   const handleupdate = async () =>{
   try{
  await axios.put(`/post/updatePost/${post._id}`,{
    username:user.username,
    title,
    desc,
  })

setUpdateMode(false);

   }catch(err){}

   }









return (

<div className="singlePost">

    <div className="singlePostWrapper">
     <img src={PF+post.photo} alt="" className="singlePostImg" />

{updateMode ?(  

<input type="text" value={title} 
 className="singlePostTitleInput" autoFocus
   onChange={(e)=>setTitle(e.target.value)}   />
):(

<h1 className="singlePostTitle">
{title}

{post.username === user?.username && (    

<div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                >Update    </i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                >Delete</i>
              </div>
        
)}
</h1>
)}

    
      
          <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
          </span>
        </div>




        {updateMode ? ( 
        <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
       
        ):(
         <p className="singlePostDesc">{desc}</p>
        )}

        { updateMode && (
         
        <button className="singlePostButton"  onClick={handleupdate}>
            Updates
          </button>
)}
    







    </div>
    
</div>


)


}