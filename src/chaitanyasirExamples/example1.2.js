// import { useMemo, useState } from "react"

// const Numbers=()=>{

//     const[count,setcount]=useState(1)
        

//     const value=useMemo(()=>{
//         return count>5?"red":"blue"
//     },[count])

//     const handleincrement=()=>{
//         setcount(count+1)
//     }

//     const handledecrement=()=>{
//         setcount(count-1)
//     }
    
//     return(
//         <>
//         <h1 style={ {color:value}}>count:{count}</h1>
//         <button onClick={handleincrement} className="bg-red-300 ml-4">increment</button>
//         <button onClick={handledecrement} className="bg-red-200 ml-4">decrement</button>
//         </>
//     )
// }
// export default Numbers

const First=()=>{
    return(
    <>
    <h1>u r in first component</h1>
    </>
    )
}
export default First

