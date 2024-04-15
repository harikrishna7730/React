import { useEffect, useState } from "react";
import axios from "axios";

const Example=()=>{
   const[count,setcount]=useState(1)
   const[age,setage]=useState(10)
   const[productList,setproductList]=useState([{}])

   useEffect(()=>{
     console.log("useEffect rerendering.....")
     Apihitting()
   })

  

   const Apihitting=async()=>{
    const result= await axios.get("https://dummyjson.com/products")
    console.log(result.data.products)
   }

   const handlechangecount=()=>{
    setcount(count+1)
   }
   const handlechangeAge=()=>{
    setage(age+5)
   }

    return(
        <>
        <h1>useEffect example</h1>
        <h1>count:{count}</h1>
        <button onClick={handlechangecount}>Click here to change count</button>

        <br></br>
        <h1>count:{age}</h1>
        <button onClick={handlechangeAge}>Click here to change count</button>

       <h1>{productList.title}</h1>
        </>
    )
}
export default Example;