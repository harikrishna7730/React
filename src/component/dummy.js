import { Component } from "react";
import axios from "axios";
import "./dummy.css";
import Spinner from "./spinner";

class Dummy extends Component {
  state = {
    products: []
  };

  
  componentDidMount() {
    this.FetchData();
  }

  //async and await && axios
  FetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result);

    this.setState({
      products: result.data.products,
    });
  };
    //Delete
  Delete=(id)=>{
    // const dlt=this.state.products.filter(products=>{
    //   return products.id===id
    // })
    const dell=this.state.products.filter(products=>products.id!==id)
        this.setState({
            products:dell
        })
    }

    //update
  Update=(id)=>{
        const upp=this.state.products.map(updateObject=>{

            if(updateObject.id===id){
                return(
                    {
                        "id": 10,
                        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                        "price": 109,
                        "description": "Easy upgrade for faster boot up, host device, OS and application.)",
                        "category": "electronics",
                        "thumbnail": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                        "rating": {
                          "rate": 2.9,
                          "count": 470
                        }
                      }
                )
            }
            else{
                return updateObject
            }
            
        })
        this.setState({
            products:upp
        })
    }
  

  render() {

    return (
      <>
        <h2 style={{ textAlign: "center" }}>Products Listing</h2>
        {this.state.products.length > 0 ? (
          <div className="products">
            {this.state.products.map((eachObject) => {
              const { title, thumbnail, price } = eachObject;

              return (
                <div className="cards">
                  <h4>{title}</h4>
                  <img src={thumbnail} alt={title} />
                  <h4>₹{price}</h4>
                  <div>
                    <button onClick={()=>this.Delete(eachObject.id)}>Delete</button>
                    <button onClick={()=>this.Update(eachObject.id)}>Update</button>
                  </div>
                </div>
              );
            })}
          </div>
        )
         :
         (
          <>
          <h2>Loading</h2>
          <Spinner/>
          </>
        )}
      </>
    );
  }
}

export default Dummy;
