import axios from "axios";
import { useContext, useState } from "react";
import { changeings } from "../NavigationStack/Allnavigations";

const Loginpage = () => {
    const {changeState}=useContext(changeings)
    const[formErr,setformErr]=useState("")
        const[form,setform]=useState({
        username:"",
        password:""
    })

    const Handlechanges=(e)=>{
      // const username=e.target.value;
      // const password=e.target.value;
      // console.log(username)
      // console.log(password)
      const{name,value}=e.target
      console.log(value,name)

    setform(prevState=>({
      ...prevState,[name]:value
    }))
    }
    

    const submitHandle=async(e)=>{
      e.preventDefault()
      const{username,password}=form
       const userDetails={
        username:username,
        password:password
       }
       console.log(userDetails)
       try{
       const result=await axios.post("https://dummyjson.com/auth/login",userDetails)
       console.log(result.data)
       if(result.data.message){
        setformErr(result.data.message)
       }else{
        changeState()
       }
       }
       catch(err){
        console.error(err)
       }
      
    }      

  return (
    <>
      <div className="container mt-3">
        <h2>Login</h2>
        <form action="" onSubmit={submitHandle}>
          <div className="mb-3 mt-3">
            <label htmlFor="text">Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={form.username}
              onChange={Handlechanges}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={form.password}
              onChange={Handlechanges}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> 
      </div>
      {
        formErr && <span>{formErr}</span>
  
      }
    </>
  );
}
export default Loginpage;
