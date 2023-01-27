import React from "react";
import './Navbar.css';
import image1 from './CartImage.webp';
import image2 from './heartImage.png';


const Navbar=()=>{
     return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom border-2">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold mx-5" href="#">Bewkoof</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" id="m">
          <a className="nav-link active" aria-current="page" href="#">MEN</a>
        </li>
        <li className="nav-item" id='m1'>
          <a id="m1" className="nav-link active" href="#">WOMEN</a>
        </li>
        <li className="nav-item" id="m2">
          <a  id="m2" className="nav-link active" href="#">MOBILE COVERS</a>
        </li>
       
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search by product,category or collection " aria-label="Search" />
      </form>
      <p className="para1">|</p>
      
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a  id="login" className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item" >
          <a  href="#"><img id="heartimage" src={image2} alt="..." /></a>
          </li>
        <li className="nav-item" >
          <a  href="#"><img id="cartimage" src={image1} alt="..." /></a>
          </li>
      
        </ul>
        
      
    </div>
  </div>
</nav>
     );
}

export default Navbar;