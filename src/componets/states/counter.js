import { Component } from "react";

class Counter extends Component{

    state={
      count:0
    }

    CountIncrement=()=>{

        this.setState(
            {
                count: this.state.count+1
            }
        )
    }

    CountDecrement=()=>{
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }

    Clear=()=>{
        this.setState(
            {
                count:0
            }
        )
    }

    render(){
        return(
          <>
          <h3>count: {this.state.count}</h3>
          <button onClick={this.CountIncrement}>count increment</button>
          <button onClick={this.CountDecrement}>count decrement </button>
          <button  onClick={this.Clear}>clear</button>
          </>
        )
    }
}
export default Counter