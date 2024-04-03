import { Component } from "react";
// import { array } from "yargs";
// import { array } from "yargs";



class Mapp extends Component{

state={
     arr:["apple","banana","orangee","pinapple","grapes"]
}



Increment = ()=>{
    const newFriuts=[...this.state.arr,"veeresh"]
    
    this.setState(
        {
            
            arr:newFriuts
           
        },()=>{
            console.log(this.state.arr)
        }
    )
}

Decrement = ()=>{
    const ab=[...this.state.arr]
    ab.pop()
    this.setState(
        {
            arr:ab
            
        },()=>{
            console.log(this.state.arr)
        }
    )
}
    render(){

        return(
            <>
            <button onClick={this.Increment}>Increment Fruit</button>
            <button onClick={this.Decrement}>Decrement Fruit</button>
             <h2>{this.state.arr[0]}</h2>

             {
                this.state.arr.map((val)=>{
                    return(
                        <h1>{val}</h1>
                    )
                })
             }
            </>
        )
    }
}
export default Mapp