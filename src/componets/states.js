import { Component } from "react";
import  img1 from"./states/araku.jpg";
import img2 from "./states/hills.avif";
import img3 from "./states/hills2.avif"


class Setting extends Component{

    state={
        name1:img1,
        name2:img2,
        name3:img3
    }

    increase=()=>{

    
        this.setState(
            {
         name1:img1
        }
        )
    }

    render(){
        return(
         <>
         <button onClick={this.increase}>Increase</button>
         <button>Decrease</button>
         
         
         <img src={img1} alt="hakhdf" width="200px"/>
        
         </>
        )
    }
}

export default Setting