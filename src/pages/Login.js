import { useState } from "react";

const Loginpage = () => {
    const[loginpage,setloginpage]=useState({
        username:null,
        password:null
    })

  return (
    <>
      <div className="container mt-3">
        <h2>Login</h2>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Loginpage;
