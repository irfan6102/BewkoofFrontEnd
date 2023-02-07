import React, { useState } from "react";
import loginImage from './LoginPageImage.webp';
import './Login.css';
import { Link } from "react-router-dom";

const Login=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  const emailHandler=(e)=>{
    setEmail(e.target.value);
    console.log(email);
  } 

  const passwordHandler=(e)=>{
    setPassword(e.target.value);
    console.log(password);
  }

    return(
        <> 
        <div className="d-inline-block"> 
            <img id="lgImage" src={loginImage} alt=".."/>
         </div>
         <div className="d-inline-block" style={{marginLeft:'180px'}}> 
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email}  onChange={emailHandler}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} onChange={passwordHandler} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn  btn-primary">Login</button>
  <Link to="/registeration" className="mx-3">New user? Register yourself!</Link>
</form>
</div>


        </>
    );
}

export default Login;