import { Component } from "react";



class Mapp extends Component{

state={
     array:["apple","banana","orangee","pinapple","grapes"]
}



Increment = ()=>{
    this.setState(
        {
            
            array:this.state.array.map((index)=>this.state.array[1])
           
        }
    )
}

Decrement = ()=>{
    this.setState(
        {
            array:this.state.array.map((index)=>this.state.array[0])
            
        }
    )
}
    render(){

        return(
            <>
            <button onClick={this.Increment}>Increment Fruit</button>
            <button onClick={this.Decrement}>Decrement Fruit</button>
             <h2>{this.state.array[0]}</h2>
            </>
        )
    }
}
export default Mapp