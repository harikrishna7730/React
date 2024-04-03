import { Component } from "react";



class Fruites extends Component{

state={
fruit:["apple","banana","carrot","Animal","grapes","Papaya"]
}


    AddFruit=()=>{
   this.setState(
    {
       fruit: this.state.fruit[0]+1
    }
    )
    }

    DeleteFruit=()=>{
        this.setState(
         {
            fruit: this.state.fruit[0]-1
         }
         )
         }


    render(){

        return(
            <>
            <button onClick={this.AddFruit}>Add the fruit</button>
            <button onClick={this.DeleteFruit}>Delete the fruit</button>
            </>
        )
    }
}

export default Fruites