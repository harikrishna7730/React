import { useState } from "react";

const Loginpage = () => {
    const[form,setform]=useState({
        username:null,
        password:null
    })

    const Handlechanges=(e)=>{
        const name=e.targer.value
console.log(name)
        setform(e.prevstate=>{
            ...prevstate,
        })
    }

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
              id="pwd"
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
    </>
  );
};
export default Loginpage;
