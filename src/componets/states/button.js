import { Component } from "react";


class ButtonPage extends Component{

     state={
        isSubscribe: false,
        text1:"subscribe",
        text2:"subscribedd"
    }

    ChangeSubscribe=()=>{

        this.setState(
              { 
                isSubscribe: !this.state.isSubscribe
              }
        )
    }

    render(){
        return(
            <>
            <button style={{
                color:this.state.isSubscribe? "green":"red"
            }}  onClick={this.ChangeSubscribe}>{this.state.isSubscribe? this.state.text2:this.state.text1}</button>
            
            </>
        )
    }
}
export default ButtonPage