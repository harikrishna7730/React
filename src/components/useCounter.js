import { useState } from "react";

const useCounter=()=>{
    const[count,setcount]=useState(0)

    const incrementcount=()=>{
        setcount(count+1)
    }
    const decrementcount=()=>{
        setcount(count-1)
    }
    

}
export default useCounter;