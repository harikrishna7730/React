import { useEffect, useState } from "react"

const Component=()=>{

    const [val,setval]=useState(0)
    const[active,setactive]=useState(true)

    useEffect(()=>{
       
      if(active){
        var intervalId=setInterval(()=>{
            setval(prevval=>prevval+1)
        },1000)
      }
        
        return()=>{
            clearInterval(intervalId)
            console.log("component is unmounting . interval cleared...")
        }
    },[active])

    const handleStop=()=>{
      setactive(false)
    }

    const handleRestart=()=>{
        setval(0)
        setactive(true)
    }


    return(
        <>
       <h1>Timer:{val}</h1>
       <button onClick={handleStop}>Stop</button>
       <button onClick={handleRestart}>Restart</button>
        </>
    )
}
export default Component