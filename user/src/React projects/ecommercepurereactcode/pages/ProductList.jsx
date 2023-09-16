import Products from "../components/Products";
import {useLocation} from "react-router";
import { useState } from "react";

const ProductList = () =>{


const location = useLocation();
const cat  = location.pathname.split('/')[2];
const [filters,setFilters] = useState({});
const [sort,setSort] = useState("");



const handleFilters = (e) =>{
    const value = e.target.value;

    setFilters({
        ...filters,
        [e.target.name]:value,
    })
}




return(
 <> 

<h1>{cat}</h1>

      <h3>Filters Products</h3>
     <select name="color" onChange={handleFilters}>
      <option>Color</option>
      <option>white</option>
      <option>red</option>
      <option>blue</option>
      <option>yellow</option>
      <option>green</option>
     </select>


     <h3>Size</h3>
     <select name="size" onChange={handleFilters}>
      <option disabled>Size</option>
      <option>XS</option>
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
     </select>



     <h3>Sort Products:</h3>
     <select onChange={(e)=>setSort(e.target.value)}>
      <option value="newest" >Newest</option>
      <option value="asc">price(asc)</option>
      <option value="desc">Price (desc)</option>
     </select>


<Products cat={cat} filters={filters} sort={sort} />



</>
)

}
export default ProductList;