import { Component } from "react"
import axios from "axios"
import "./dummy.css"


class Dummy extends Component{

    state={
        products:[]
    }

    componentDidMount(){
    this.FetchData()
    }

    FetchData=async()=>{
        // let a1=await fetch("https://dummyjson.com/products")
        // let result= await a1.json()
        // console.log(result)
        const a1= await axios.get("https://dummyjson.com/products")
   
   this.setState({
    products:a1.data.products
   })

//    state={
//     products:[]
//    }
   Delete=(id)=>{
  
   }

   
}
   
    render(){

        return(
        <>
        <h4>product listing</h4>
        {
            this.state.products.length>0
            ?
            <div className="products">
            {
                this.state.products.map(eachObject=>{
                    const {title,price,thumbnail}=eachObject
                    return(
                        <div className="cards">
                        <h3>{title}</h3>
                        <img src={thumbnail} alt="hello" />
                        <h3>₹{price}</h3>
                        <button onClickd>Delete</button>
                        <button>Update</button>
                        </div>
                    )
                })
            }
            </div>
            :
            <h2>List</h2>
        }
        </>
        )
    }
}

export default Dummy