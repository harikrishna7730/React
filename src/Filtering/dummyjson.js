import { Component } from "react";
import axios from "axios"

class DummyJson extends Component{

    state={
        products:[]
    }

    componentDidMount(){
        this.FetchData()
    }

FetchData=async()=>{
    let result=await axios.get("https://dummyjson.com/products")
    console.log(result)
}

    render(){
        
        return(
            <>
            <h3>Product Listing</h3>
            {
                this.state.data.products.map(eachObj=>{
                    const{title,price,thumbnail}=eachObj
                    return(
                        <>
                        <h3>{title}</h3>
                        </>
                    )
                })
            }
            </>
        )
    }
}
export default DummyJson