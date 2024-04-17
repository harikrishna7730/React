
import axios from "axios"
import { useEffect, useState } from "react"


const FetchData=()=>{
  const[recipe,setRecipe]=useState([])

  useEffect(()=>{
    Fetching()
  },[])

  const Fetching=async()=>{
    try{
    const response=await axios.get("https://dummyjson.com/recipes")
    console.log(response.data.recipes)
    setRecipe(response.data.recipes)
    }catch(err){
      console.error(err)
    }
  }
  return(
    <>
      {
        recipe.map(eachItem=>{
          const{image,name}=eachItem
          return(
            <div className="">
            <h2>{eachItem.name}</h2>
           <img src={eachItem.image} alt="helloworld" width={300}/>
           <h2>{eachItem.price}</h2>
            </div>
          )
        })
      }
    </>
  )
}
export default FetchData