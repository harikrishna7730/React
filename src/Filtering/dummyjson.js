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
                this.state.products.map((eachObj)=>{
                   
                    return(
                        <>
                        <h3>{eachObj.title}</h3>
                        </>
                    )
                })
            }
            </>
        )
    }
}
export default DummyJson