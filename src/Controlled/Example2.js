import { useEffect, useState } from "react"

const Example2=()=>{
    const[count,setcount]=useState(1)

    useEffect(()=>{

        //dom manipulation
        document.title=`count ${count}`
    },[count])


    const countIncrement=()=>{
        setcount(count+1)
    }

    return(
        <>
       <h1>count:{count}</h1>
       <button onClick={countIncrement}>change in count</button>

        </>
    )
}
export default Example2