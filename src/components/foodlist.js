import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Card.css"
import { DataShare } from "../NavigationStack/Allnavigations";

const FoodList = () => {
    const{AddtoCard}=useContext(DataShare)

    const[foodlist,setFoodlist]=useState([])

    useEffect(()=>{
        Fetching()
    },[])

  const Fetching = async () => {
   const response=await axios.get("https://dummyjson.com/recipes")
   console.log(response.data.recipes)
   setFoodlist(response.data.recipes)
  };
 
  return( 
   
  <div className="main">
  {
    foodlist.map(eachItem=>{
        const{name,id,image,rating}=eachItem
        return(
            <div key={id} className="card">
            <h2>Name:{name}</h2>
            <img src={image} alt="title" width={230}/>
            <h2>Rating:{rating}</h2>
            <button onClick={()=>AddtoCard(eachItem)}>Add to card</button>
            </div>
        )
    })
  }
  </div>
  )
};
export default FoodList;
