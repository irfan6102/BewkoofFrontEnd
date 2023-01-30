import React from "react";

const Register=()=>{
   return(
    <div className="container mt-5" style={{width:'400px'}}>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" placeholder="Please enter your name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" placeholder="Please enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder="Please enter your password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" placeholder="Please confirm your password" className="form-control" id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary mt-3">Register</button>
</form>
    </div>
   );

}

export default Register;