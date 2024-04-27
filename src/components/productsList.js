import axios from "axios"
import { useDispatch } from "react-redux"

const ProductsList=()=>{
    const dispatch=useDispatch()


    const fetchingData=async()=>{

        const result =await axios.get("https://dummyjson.com/products")
        console.log(result.data.products)
    }
    return(
        <>
        
        </>
    )
}
export default ProductsList