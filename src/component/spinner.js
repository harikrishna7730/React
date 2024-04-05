import { Component } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./dummy.css"

class Spinner extends Component{

    render(){
        return(
            <>
           <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass="spinner"
            />
        </>
        )
        
    }
      
}
export default Spinner