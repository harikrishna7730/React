import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./Card.css"
import { DataShare } from "../NavigationStack/Allnavigations";


const Products = () => {
  const [listing, setListing] = useState([]);
  const{AddtoCard}=useContext(DataShare)

  useEffect(() => {
    ApiHitting();
  }, []);

  const ApiHitting = async () => {
    try{
   const response=await axios.get("http://www.themealdb.com/api/json/v1/1/categories.php")
   console.log(response.data.categories)
   setListing(response.data.categories)
    }
    catch(err){
      console.error(err,"errorr....")
    }
  }

  
  return (
    <div className="main">
      {
       listing.map((eachItem)=>{
        const{strCategory, idCategory, strCategoryThumb}=eachItem
        return(
          <div className="card" key={idCategory}>
          <h2>Name:{strCategory}</h2>
          <img src={strCategoryThumb} alt="title" width={200}/>
          <button onClick={()=>AddtoCard(eachItem)}>Add to card</button>
          {/* //<p>{strCategoryDescription}</p> */}
          </div>
        )
       })
      }
      
    </div>
  );
};
export default Products;
