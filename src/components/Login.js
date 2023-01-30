import React from "react";
import loginImage from './LoginPageImage.webp';
import './Login.css';
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <> 
        <div className="d-inline-block"> 
            <img id="lgImage" src={loginImage} alt=".."/>
         </div>
         <div className="d-inline-block" style={{marginLeft:'180px'}}> 
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn  btn-primary">Login</button>
  <Link to="/registeration" className="mx-3">New user? Register yourself!</Link>
</form>
</div>


        </>
    );
}

export default Login;