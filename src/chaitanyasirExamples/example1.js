import { useMemo, useState } from "react"

const Example2=()=>{

    const[count,setcount]=useState(1)


   const component= useMemo(()=>{
        return count>5? <h1>Second component.....</h1>: <h2>First component....</h2>
    },[count])

    const Handleup=()=>{
        setcount(count+1)
    }

    const HandleDown=()=>{
        setcount(count-1)
    }

    return(
        <div className="border-2px ml-[600px]">
        <p className="ml-14">count: {count}</p>
        <h1 className="text-3xl ">{component}</h1>
        <button className="bg-red-400 p-2" onClick={Handleup}>increment</button>
        <button className="bg-red-400 p-2 m-2" onClick={HandleDown}>increment</button>

        </div>
    )
}
export default Example2

// import { useMemo, useState } from "react"
// import First from "./Chtnys"

// const Example2=()=>{

//     const[count,setcount]=useState(1)


//    const component= useMemo(()=>{
//         return count>5? <First/>: null
//     },[count])

//     const Handleup=()=>{
//         setcount(count+1)
//     }

//     const HandleDown=()=>{
//         setcount(count-1)
//     }

//     return(
//         <div className="border-2px ml-[600px]">
//         <p className="ml-14">count: {count}</p>
//         <h1 className="text-3xl ">{component}</h1>
//         <button className="bg-red-400 p-2" onClick={Handleup}>increment</button>
//         <button className="bg-red-400 p-2 m-2" onClick={HandleDown}>increment</button>

//         </div>
//     )
// }
// export default Example2