import { useNavigate } from "react-router-dom"


const InvalidScreen=()=>{
  const navigate= useNavigate()

    const BackToHome=()=>{
        //we can also do functional routing
        if(true){
            navigate("/")
        }else{
            console.log("helloworld")
        }
        
    }
    return(
        <div style={{textAlign:"center",marginTop:"200px"}}>
        <h1>Invalid screen</h1>
        <button onClick={BackToHome} style={{marginTop:"50px", fontSize:"30px"}}>Back to home screen</button>
        </div>
    )
}
export default InvalidScreen