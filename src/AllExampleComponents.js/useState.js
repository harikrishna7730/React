import { useState } from "react"

 const UseStateExample=()=>{

    const[toggle,settoggle]=useState(false)


    const HandleToggle=()=>{
        settoggle(true)
    }

    return(
        <>
        <h1>UseStateExample</h1>
        <button style={{backgroundColor:toggle? "green": "red", color:"white", padding:"10px"}}  onClick={HandleToggle}>
            {toggle ? "Subscribe":"Unsubscribe"}
        </button>
        </>
    )
 }
 export default UseStateExample