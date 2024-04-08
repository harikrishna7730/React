import { Component } from "react";
import axios from "axios"
import "./dummy.css"

class DummyJson extends Component{

    state={
        products:[]
    }
    componentDidMount(){
        this.FetchData()
    }
//fetching data using axios
FetchData=async()=>{
    let result=await axios.get("https://dummyjson.com/products")
    console.log(result)

    this.setState({
        products:result.data.products
    })
}

//low to high using sort
Lowtohigh=()=>{
    let sorting=this.state.products.sort((a,b)=>a.price-b.price)
    this.setState({
        products:sorting
    })
}

//High to low
Hightolow=()=>{
    let sorting=this.state.products.sort((a,b)=>b.price-a.price)
    this.setState({
        products:sorting
    })
}

    render(){
        
        return(
            <>
            <h2 style={{textAlign:"center"}}>Products</h2>
            <button onClick={this.Lowtohigh}>Low To High</button>
            <button onClick={this.Hightolow}>High To Low</button>
        
            <div className="products">
            {
                this.state.products.map((eachObj)=>{
                   const{title,thumbnail,price}=eachObj
                    return(
                        <div className="cards">
                        <h3>{title}</h3>
                        <img src={thumbnail} alt={title}/>
                        <h3>{price}</h3>
                        </div>
                    )
                })
            }
            </div>
            </>
        )
      
    }
}
export default DummyJson