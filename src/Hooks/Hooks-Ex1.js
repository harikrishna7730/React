import { useState } from "react"


const HookExample = ()=>{
   const[count,setCount]=useState(5)

   const Handler=(val,type)=>{
     if(type==="increment"){
        setCount(count+val)
     }else if(type==="decrement" && count>0){
        setCount(count-val)
     }else{
        setCount(0)
     }
   }
return(
    <>
    <h1>useStateExample1</h1>
    <h1>count:{count}</h1>
   <button onClick={()=>Handler(5,"increment")}>increment</button>
   <button onClick={()=>Handler(5,"decrement")}>decrement</button>
   <button onClick={()=>Handler()}>Reset</button>
    </>
)
}
export default HookExample