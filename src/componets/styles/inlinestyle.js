
import "./externalstyle.css"
import style from "./module.style.css"


export const TextStyle=()=>{
    const Text={
        color:"red",
        backgroundColor:"yellow",
        fontSize:"60px",
        textAlign:"center"
    }

    return(
       <>
       <h1  style={{color:"red",fontSize:"70px"}}>Hello world--inline</h1>
       <h2  style={Text}>React developer--internal</h2>

       {/* External style.css */}

       <h3 className="externalText">External style.css</h3>

       <h3 className={style.h3Text}>Module style.css</h3>
       </>
    )
}