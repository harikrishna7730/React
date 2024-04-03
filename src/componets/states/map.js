import { Component } from "react";



class Mapp extends Component{

state={
     array:["apple","banana","pinapple","popaya","grapes","orangee"]
}
    render(){

        return(
            <>
            {
                this.array.map((val)=>{
                    <h2>{val}</h2>
                })
            }
            </>
        )
    }
}
export default Mapp