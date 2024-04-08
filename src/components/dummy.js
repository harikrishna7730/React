import axios from "axios"
import { Component } from "react";
import "./dummy.css"


class Dummy extends Component{

  state={
    products:[]
  }

  componentDidMount(){
    this.FetchData()
  }

  FetchData=async ()=>{
    const result = await axios.get("https://dummyjson.com/products")

    const result1=result.data.products.map((val)=>{
      const data={...val,count:1,TotalPrice:val.price}
      return data
    })

    this.setState({
      products:result1
    })
  }
    //total price:(using reduce)
    Total=()=>{
      const TotalAmount=this.data.products.reduce((total,val)=>{
        return total + val.price 
      },0)
      this.setState({
        TotalPrice:TotalAmount
      })
    }
    
  
  

    //increment
    IncrementCount=(id)=>{
      let incre=this.state.products.map((eachObj,index)=>{
        if(index===id){
          eachObj.count+=1
          eachObj.price+=eachObj.TotalPrice
          return eachObj
        }
        else{
          return eachObj
        }
      })
      this.setState({
        products:incre
      })
    }

    //decrement
    decrementCount=(id)=>{
      let decre=this.state.products.map((val,index)=>{
        if(index===id && val.count>1){
           val.count-=1
           val.price-=val.TotalPrice
           return val
        }
        else{
          return val
        }
      })
      this.setState({
        products:decre
      })
    }
  
    //DeleteItem
     Delete=(i)=>{
      let DeleteItem=this.state.products.filter((val,index)=>{
        return index!=i
        
      })
      this.setState({
        products:DeleteItem
      })
     }


  render(){
    console.log(this.state.Total)
     return(
      <>
      <h2>Product Listing</h2>
      <h2>TotalAmount:{this.Total}</h2>
      {
        this.state.products.length>0
        ?
        <div className="products">
        {
          this.state.products.map((eachObj,i)=>{
            const{title,thumbnail,price,id,count}=eachObj
            return(
              <div className="cards" key={id}>
              <h3>{title}</h3>
              <button onClick={()=>this.Delete(i)}>Delete</button>
              <img src={thumbnail} alt={title}/>
              <h3>Price:{price}</h3> 
              <h4>count:{count}</h4>
              <div>
                <button onClick={()=>this.IncrementCount(i)} >Add</button>
                <button onClick={()=>this.decrementCount(i)}>Decre</button>
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