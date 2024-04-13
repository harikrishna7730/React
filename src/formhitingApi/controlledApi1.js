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
//handling the changes form fields 
    const handleChanges=(e)=>{
      const{value,name}=e.target
      console.log(value,name)

      setform(prevState=>({
        ...prevState,[name]:value
      }))
    

    }
//this section is for handling the sumbit button 
    const submitHandler=(e)=>{
        e.preventDefault()
        const{username,password}=form
       const Details={
        username:username,
        password:password
       }
       HitApi(Details)
       console.log(Details)

    }

//this section is for hitting the Api form the server
    const HitApi=async(userInfo)=>{
       const result=await axios.post("https://dummyjson.com/users")
       console.log(result.userInfo)
       
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
        <input type="password" id="lname" value={form.password}  onChange={handleChanges} name="password"/>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default ControledApi;
