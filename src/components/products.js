
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./header.css"


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
          const{image,name,rating,id}=eachItem
          return(
            <div className="card">
            <h2>Name:{name}</h2>
           <img src={image} alt="helloworld" width={300}/>
           <h2>Rating:{rating}</h2>
            <button>
              <Link  to={`${name}/${id}`}>
                 Click here to see more
              </Link>
            </button>
            </div>
          )
        })
      }
    </>
  )
}
export default FetchData