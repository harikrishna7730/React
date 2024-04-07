import axios from "axios"
import { Component } from "react";
import "./dummy.css"
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";


class Dummy extends Component{

  state={
    products:[],
    Total:0,
    count:0
  }

  componentDidMount(){
    this.FetchData()
  }

  FetchData=async ()=>{
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result)

    this.setState({
      products:result.data.products
    })

    //total price:
    const TotalAmount=result.data.products.reduce((acc,val)=>{
      return acc + val.price 
    },0)
    this.setState({
      Total:TotalAmount
    })

    const result2=result.data.products.map((val)=>{
      const data={...val,count:1,Totalprice:val.price}
      return data
    })

    this.setState({
      products:result2
    })

    //increment
    const decrement=(id)=>{
      const Newitem=this.state.products.map((val)=>{
        if(val.id===id){
        val.count-=1
        val.Totalprice = val.price * val.count;
      return val
        }else{
          return val
        }
      })

      this.setState({
        products:Newitem
      })
    }
  }

  render(){
    console.log(this.state.Total)
     return(
      <>
      <h2>Product Listing</h2>
      <h2>TotalAmount:{this.state.Total}</h2>
      {
        this.state.products.length>0
        ?
        <div className="products">
        {
          this.state.products.map(eachObj=>{
            const{title,thumbnail,price,id}=eachObj
            return(
              <div className="cards" key={id}>
              <h3>{title}</h3>
              <img src={thumbnail} alt={title}/>
              <h3>Price:{price}</h3> 
              <h4>count:{this.state.count}</h4>
              <div>
                <button >Add</button>
                <button onClick={this.decrement}>Decrease</button>
              </div>
              </div>
            )
          })
        }
        </div>
        :
        <h3>Loading</h3>
      }
      </>
     )
}
}
export default Dummy