import {useLocation} from "react-router";
import { useEffect,useState } from "react";
import { publicRequest } from "../requestMethod";
import {addProduct} from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Product = () =>{
  

const totalquantity = useSelector(state=> state.cart.quantity)

console.log(totalquantity);

    const location = useLocation();
    const id = location.pathname.split("/")[2];

 const [product,setProduct] = useState({})
 const [quantity,setQuantity] = useState(1);
 const [color,setColor] = useState("");
const [size,setSize] = useState("");
const dispatch = useDispatch();

  




useEffect(()=>{


const getProduct = async () =>{
    try{
        const res = await publicRequest.get("/products/find/"+id);
       setProduct(res.data);
        }catch{}
}
getProduct();
},[id])


const handleQuantity = (type) =>{
    if(type === "desc"){
        quantity > 1 && setQuantity(quantity-1);
    }else{
        setQuantity(quantity+1);
    }
}
  


const handleClick = () =>{
    dispatch(addProduct({...product,quantity,color,size}));
}




return (

     <>

<div style={{margin:"100px"}}> 


<h1>Totalquantity:{totalquantity}</h1>

 <img src={product.img} style={{width:"200px"}}></img>

 <br/><br/>
 <p> Title:  {product.title}</p>
 <p> Desc:   {product.desc}</p>
 <p> Price : {product.price}</p>
 <p> color:  {product.color}</p>
 <p>  Size:  {product.size}</p>
</div>

<p onClick={()=>  handleQuantity("desc")  }>Remove</p>
<p>{quantity}</p>
<p onClick={()=> handleQuantity("inc")   }>Add</p>


   <button onClick={handleClick}>Add to Cart</button>


     </>
)

  }

export default Product;