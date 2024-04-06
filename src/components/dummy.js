import axios from "axios";
import { Component } from "react";
import "./dummy.css";
class DummyData extends Component {
  state = {
    products: [],
    count: 1,
    Total:0,
  };
  //increment
  Increment = (id) => {
    const increase = this.state.count + 1;
    this.setState({
      count: increase,
    });
  };

  //decrement
  Decrement = () => {
    const decrement = this.state.count - 1;
    if (decrement >= 0)
      this.setState({
        count: decrement,
      });
  };

  //Total cell
  TotalAmount = () => {
    const result = this.state.products.reduce((acc, eachObj) => {
      return acc + eachObj.price;
    
    }, 0);
    console.log(result)
    this.setState({
      Total: result,
    });
  };
  // side effects(http requests) will come here
  componentDidMount() {
    document.title = "Product Listing";
    this.FetchData();
  }

  FetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");

    this.setState({
      products: result.data.products
    });
  };

  render() {
    console.log(this.state.Total);
    return (
      <>
        <h2>Product Listing</h2>
        <h3>TotalPrice:{this.TotalAmount}</h3>

        {this.state.products.length > 0 ? (
          <div className="products">
            {this.state.products.map((eachObject) => {
              const { title, thumbnail, price } = eachObject;
              return (
                <div className="cards" >
                  <h4>{title}</h4>
                  <img src={thumbnail} alt={title} />
                  <h3>₹{price}</h3>
                  <div>
                    <button onClick={() => this.Increment(1)}>+</button>
                    <span>{this.state.count}</span>
                    <button onClick={() => this.Decrement(1)}>-</button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Loading</h2>
        )}
      </>
    );
  }
}
export default DummyData;
