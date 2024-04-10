import  { useState } from "react"
import React from "react"



const UsestateEx3 =()=>{
    
    const[timer,setTimer]=useState(30)

  const startTimer=()=>{
       var d= setInterval(()=>{
         setTimer(prevTimer=>prevTimer-1)
        },1000)
    }
 const Stop=()=>{
    clearInterval
 }
    return(
        <>
        <h2 style={
            {
                color: timer<=10? "red" : "green"
            }
        }
        >seconds:{timer}</h2>
        {
           timer<=10 && <h4>Exam time is in ending stage</h4>
        }
        <button onClick={startTimer}>startTimer</button>
        <button onClick={Stop}>Stop</button>
        </>
    )
}
export default UsestateEx3


