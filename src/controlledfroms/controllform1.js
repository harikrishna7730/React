import { useState } from "react";
import "./controlform1.css";

const ControlledFrom = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [userErr, setuserErr] = useState(null);
  const[passErr,setpassErr]=useState(null)

  const handleusername = (e) => {
    const username = e.target.value;
    setusername(username);
    if (username.trim().length < 6) {
      setuserErr("Enter valid name");
    } else {
      setuserErr(null);
    }
  };

  const handlepassword = (e) => {
    const password = e.target.value;
    setpassword(password);
    if (password.trim().length < 6 || !/[!@#$&*]/.test(password)) {
      setpassErr("Enter valid password");
    } else {
      setpassErr(null);
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const Details = {
      username: username,
      password: password,
      email: email,
    };
    console.log(Details);
  };

  return (
    <div className="main">
      <form onSubmit={handlesubmit} id="border">
        <h2>Register Form</h2>
        <input
          type="text"
          value={username}
          onChange={handleusername}
          placeholder="Enter your Name"
        />
        <br />
        {userErr && <span style={{ color: "white", padding:"0px" , marginBottom:"-5px" }}>Enter valid name</span>}
        <br />
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your Email"
        />
        <br />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={handlepassword}
          placeholder="Enter your Password"
        />
        <br />
        {passErr && <span style={{ color: "white",  padding:"0px", marginBottom:"-5px"}}>Enter valid password</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ControlledFrom;
