import { useState } from "react";

const useCounter=(value,scale)=>{
    const[count,setcount]=useState(0)

    const incrementcount=()=>{
        setcount(count+value)
    }
    const decrementcount=()=>{
        setcount(count-value)
    }
    const Reset=()=>[
        setcount(0)
    ]
    return[count,incrementcount,decrementcount,Reset]
    

}
export default useCounter;