import { useEffect, useState } from "react";
import axios from "axios";
import "./useEffect.css"

const Example=()=>{
  const[productList,setproductList]=useState([])
  const[eachobj,setEachobj]=useState({})
  const[count,setcount]=useState(1)   

   useEffect(()=>{
     console.log("useEffect rerendering.....")
     Apihitting()
   },[])

   useEffect(()=>{
   eachproductFetch()
   },[count])
  

   const Apihitting=async()=>{
    const result= await axios.get(`https://dummyjson.com/products`)
    setproductList(result.data.products)
    console.log(result)
   }

   const eachproductFetch=async()=>{
     const response=await axios.get(`https://dummyjson.com/products/${count}`)
     setEachobj(response.data)
     console.log(response)
   }


   const handlechangecount=()=>{
    setcount(count+1)
   }

   const Handleclick=(e)=>{
    setcount(e.target.value)
   }
    return(
        <>
        <h1>useEffect</h1>
      {
        productList.map(eachitem=>{ 
          const{id}=eachitem
          return(
            <button value={id} onClick={Handleclick}>{id}</button>
           
          )
      })
      }
      <div className="card">
       <h1>{eachobj?.title}</h1>
       <img src={eachobj?.thumbnail} alt="title" width={300}/>
       <h2>Price:{eachobj.price}</h2>
       </div>
        </>
    )
}
export default Example;