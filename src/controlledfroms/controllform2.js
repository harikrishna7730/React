import { useState } from "react";

const Controlled2 = () => {

    const [form,setform]=useState(
        {
            username:null,
            password:null
        }
    )

    const[fromErr,setFromErr]=useState(
        {
            usernameErr:null,
            passwordErr:null
        }
    )

    const onChangeHandler=(event)=>{
        const{value,name}=event.target
        console.log(value,name)
        // const name=event.target.name
        // const pass=event.target.name
        // console.log(name)
        // console.log(pass)
        setform(prevState=>(
            {...prevState,[name]:value}
        ))

        switch(name){
            case "username":
            if(value.length>6){
                setFromErr(
                    {
                        ...fromErr,usernameErr:"Enter less then 6"
                    }
                )
            }else{
                setFromErr(null)
            }
            break;
            case "password":
                if(value.length>6){
                    setFromErr(
                        {
                            ...fromErr,passwordErr:"Enter less then 6"
                        }
                    )
                }else{
                    setFromErr(null)
                }
                break
            default:
                break

          
             
        }
       
    }

    const submitHandler=(e)=>{
        e.preventDefault()
    }



  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="fname">Username:</label>
        <br />
        <input type="text" id="fname" name="username" onChange={onChangeHandler} value={form.username} />
         {/* {
            fromErr.usernameErr && <span style={{color:"red"}}>Enter less then 6</span>
         } */}
        <br />
        <label htmlFor="lname">Password:</label>
        <br />
        <input type="password" id="lname" name="password" onChange={onChangeHandler} value={form.password} />
        {/* {
            fromErr.passwordErr && <span style={{color:"red"}}>Enter less then 6</span>
         } */}
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  );
};
export default Controlled2;
