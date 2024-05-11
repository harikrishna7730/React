import { useState } from "react"
import Toggle2 from "./toggle2"

const Togglepage=()=>{

    const[change,setchange]=useState(true)

    const handlechange=()=>{
         setchange(!change)
       // setchange(prev=>!prev)
    }

    return(
        <>
      
        <button onClick={handlechange} >
        {
            change ? "Go to second Page" : " back to First Page"
        }    
        </button>
    {
        change ?  <h1>First page....</h1>: <h1>Second Page..</h1> 
    }
        </>
    )
}
export default Togglepage