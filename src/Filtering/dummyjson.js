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
//Range 0-500
Range=()=>{
    let sorting3=this.state.products.filter(products=>products.price>=100 && products.price<=500);
    this.setState({
        products:sorting3
    })
};

//Deleteing card
Delete=(id)=>{
    const Dell=this.state.products.filter(products=>products.id!=id)
    this.setState({
        products:Dell
    })
}

    render(){
        console.log(this.sorting3)
        return(
            <div className="main">
            <h2 style={{textAlign:"center"}}>Products Listing</h2>
            <button onClick={this.Lowtohigh}>Low To High</button>
            <button onClick={this.Hightolow}>High To Low</button>
            <button onClick={this.Range}>100-500</button>
            <div className="frontcard"></div>
            <div className="products">
            {
                this.state.products.map((eachObj)=>{
                   const{title,thumbnail,price,id}=eachObj
                    return(
                        <div className="cards" key={title}>
                        <h3>{title}</h3>
                        <img src={thumbnail} alt={title}/>
                        <h3>₹{price}</h3>
                        <button onClick={()=>this.Delete(id)}>Delete</button>
                        </div>
                    )
                })
            }
            </div>
            </div>
        )
      
    }
}
export default DummyJson