import React, { useState } from "react";

const Register=()=>{

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [conPassword,setConPassword]= useState('');
    

    const handleEmailOnChange=(event)=>{
        setEmail(event.target.value);
        // console.log(email);
    }
    const handleNameOnChange=(event)=>{
        setName(event.target.value);
        // console.log(name);
    }
    const handlePasswordOnChange=(event)=>{
        setPassword(event.target.value);
        // console.log(password);
    }
    const handleConPasswordOnChange=(event)=>{
        setConPassword(event.target.value);
        // console.log(conPassword);
    }

    const handleSubmit=(event)=>{
        
        event.preventDefault();
        const user={
            name:name,
            email:email,
            password:password,
            conPassword:conPassword
        }
        if(password!==conPassword){
            alert("Please enter same password!")

        }else{
        fetch("http://localhost:8080/user/saveUser",{
            method:"POST",
            headers:{   "Accept": "application/json","Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New user added");
            alert("Registartion sucessfull!!");
            setName('');
            setEmail('');
            setPassword('');
            setConPassword('');
          })
    }
    }
   return(
    <div className="container mt-5" style={{width:'400px'}}>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" onChange={handleNameOnChange} value={name} placeholder="Please enter your name" className="form-control" id="name" required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" onChange={handleEmailOnChange} value={email} placeholder="Please enter your email" className="form-control" id="email" aria-describedby="emailHelp" required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={handlePasswordOnChange} value={password} placeholder="Please enter your password" className="form-control" id="password" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" onChange={handleConPasswordOnChange} value={conPassword} placeholder="Please confirm your password" className="form-control" id="confirmPassword" required />
  </div>

  <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">Register</button>
</form>
    </div>
   );

}

export default Register;