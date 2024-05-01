import { useCallback, useState } from "react"

const Example1=()=>{
    const[count,setcount]=useState(0)

    const [value,setvalue]=useState("")

    const output=useCallback(()=>{
       return handleinput()

    },[value])

    const handleChange=()=>{
        setcount(count+10)
    }
    const handleinput=(e)=>{
        setvalue(e.target.value)
    }

    return(
        <>
        <h1>useCallback</h1>
        <h3>count:{count}</h3>
        <ChildComponent count={count} increment={handleChange}/>
        <p>multiply:{output}</p>
        <h2>todos</h2>
        <input type="text" value={value}  onChange={handleinput}/>
        <button onChange={handleinput}>addtext</button>
        {/* <h2>text:{output}</h2> */}
        </>
    )
}
export default Example1

const ChildComponent=({count,increment})=>{
    return(
        <>
        <h1>ChildComponent</h1>
        <button onClick={increment}>increment</button>
        <h3>count:{count}</h3>
        
        </>
    )
}
