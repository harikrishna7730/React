import axios from "axios";
import { useState } from "react";

//state for storeing the data and updation 
const ControledApi = () => {
    const[form,setform]=useState(
        {
            username:null,
            password:null
        }
    )
//handling the changes for fields 
    const handleChanges=(e)=>{
      const{value,name}=e.target
      console.log(value,name)
    

    }
//this section is for handling the sumbit button 
    const submitHandler=(e)=>{
        e.preventDefault()
     

    }

//this section is for hitting the Api form the server
    const HitApi=async()=>{
       const result=await axios.get("https://dummyjson.com/products")
       

    }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label>Username:</label>
        <br />
        <input type="text" id="fname" value={form.username} onChange={handleChanges} name="username" />
        <br />
        <label>Password:</label>
        <br />
        <input type="text" id="lname" value={form.username}  onChange={handleChanges} name="password"/>
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
};
export default ControledApi;
