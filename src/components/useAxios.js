import axios from "axios";
import { useEffect, useState } from "react";


const DataURL="https://dummyjson.com/carts"
const useAxios=()=>{
    const[data,setdata]=useState([])

    useEffect(()=>{
    const result= axios.get(DataURL)
        .then(response=>{
            console.log('response: ', response.data);
            setdata(response.data)
        })
    },[])


}
export default useAxios