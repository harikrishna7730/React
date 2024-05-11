import { useState } from "react"

const Factorial=()=>{
    const[num,setnum]=useState("")
    const[Factorial,setFactorial]=useState("")

    const handleinput=(e)=>{
      e.preventDefault()
      let result=1

      if(num===0){
        setnum(1)
      }
      for(let i=1; i<=num; i++){
         result*=i
      }
      setFactorial(result)
    }
    return(
        <>
        {/* <form onSubmit={handleinput}> */}
        <input type="num"
         value={num} 
         onChange={e=>setnum(e.target.value)}/>
        {/* <input type="submit" value="factorial"></input> */}
        <button onClick={handleinput}>submit</button>
        {/* </form> */}
        <br></br>
        <h1>Factorial:{Factorial}</h1>
        </>
    )
}
export default Factorial