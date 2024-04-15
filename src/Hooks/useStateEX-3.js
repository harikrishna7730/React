import  { useState } from "react"
import React from "react"
import "./useStatee.css"




const UsestateEx3 =()=>{
    
    const[timer,setTimer]=useState(30)
    const[Reset,setReset]=useState(null)
    

  const startTimer=()=>{
       var time= setInterval(()=>{
         setTimer(prevTimer=>prevTimer-1)
        },1000)
        setReset(time)
    }
 const StopTimer=()=>{
    clearInterval(Reset)
 }

 const resetTimer=()=>{
   setTimer(30)
   clearInterval(Reset)
 }
    return(
        <div className="box">
        <h2 style={
            {
                color: timer<=10? "red" : "green", fontSize:"30px"
            }
        }
        >seconds:{timer}</h2>
        {
           timer<=10 && <h4>Exam time is in ending stage</h4>
        }
        <button onClick={startTimer}>startTimer</button>
        <button onClick={resetTimer}>reset</button>
        <button onClick={StopTimer}>Stop</button>
        </div>
    )
}
export default UsestateEx3


