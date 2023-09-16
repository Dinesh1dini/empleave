import {Link} from "react-router-dom";


const Product = ({item}) =>{

   return(

  <>


 <img src={item.img}  style={{width: "350px"}}  ></img>
  <Link to={`/product/${item._id}`} >Add</Link>
  
  </>

   )

}


export default Product;