import axios from "axios"
import "./recipe.css"
import { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom"

const FetchData=()=>{
    const[recipe,setRecipe]=useState([])


    useEffect(()=>{
        FetchingApi()
    },[])

    const FetchingApi=async()=>{
        try{
        const response= await axios.get("https://dummyjson.com/recipes")
        console.log(response.data.recipes)
        setRecipe(response.data.recipes)
        }catch(err){
          console.error(err);
        }
    }

   
    return(
        
        <div className="main">
           
        {
            recipe.map(eachItem=>{
                const{name,image,rating,instructions}=eachItem
                return(
                    <div className="card" key={eachItem.id}>
                    <h2>Name:{name}</h2>
                    <img src={image} alt="helloworld" width={300}/>
                    <h2>Rating:{rating}</h2>
                  
                    <p><span >Instructions: </span> {instructions}</p>
                    {/* <ul>
                        <li>{instructions[0]}</li>
                        <li>{instructions[1]}</li>
                        <li>{instructions[2]}</li>
                        <li>{instructions[3]}</li>
                        <li>{instructions[4]}</li>
                        
                    </ul> */}
                   <Link>
                     
                   </Link>
                    </div>
                )
            })
        }
        </div>
    )
}
export default FetchData