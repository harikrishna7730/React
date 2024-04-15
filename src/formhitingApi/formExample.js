import { useState } from "react";
import "./formhittingApi.css";


const Example = () => {
  const [form, setfrom] = useState({
    username: null,
    password: null
  });

 // const[formErr,setformErr]=useState( )

  const[login,setlogin]=useState(false)

  const[Error,setError]=useState("")

  //handling the field validations in form
  const handleChanges = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setfrom(prevState=>({
      ...prevState,[name]:value
    }))
  };

  //handling the submit
  const submitHandler = (e) => {
    e.preventDefault();
    const Details = {
      username: form.username,
      password: form.password,
    };
    ApiHitting(Details);
   console.log(Details)

   
  };

  //Hiting the api from the server
  const ApiHitting = async (userInfo) => {
    const result = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const result1 = await result.json();
    console.log(result1);
    if(result1.message){
      setlogin(false)
      setError(result1.message)
      // alert(result1.message)
    }else{
      setError(`wellcome ${result1.username}`)
      setlogin(true)
    }

  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <h1>LOGIN</h1>
        <label>Username:</label>
        <br />
        <input
          type="text"
          id="fname"
          placeholder="Enter your Username"
          value={form.username}
          onChange={handleChanges}
          name="username"
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          id="lname"
          placeholder="Enter your Password"
          value={form.password} 
          onChange={handleChanges}
          name="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {Error && <h1>{form.message}</h1>}
      {
          login  && <h1>welcome ${form.username} </h1>
        }
       
    </>
  );
};

export default Example;
