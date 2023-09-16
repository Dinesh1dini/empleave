import react from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar";

import "./homes.css";


function Homes() {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

 useEffect(()=>{

const fetchPosts = async () =>{
  const res = await axios.get("/post/getallPost"+search);
  setPosts(res.data);
}

fetchPosts();

 },[search])

 //console.log(posts)


  return (
   <div className="home">
  <Posts posts={posts} />
<Sidebar/>
   </div>
  );
}

export default Homes;
