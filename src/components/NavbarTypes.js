import React from "react";
import './NavbarTypes.css';

const NavbarTypes=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIVE NOW!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="v1" class="nav-link active" aria-current="page" href="#">MEN</a>
        </li>
        <li class="nav-item">
          <a id="v2" class="nav-link active" href="#">WOMEN</a>
        </li>
        <li class="nav-item">
          <a id="v3" class="nav-link active" href="#">ACCESSORIES</a>
        </li>
        <li class="nav-item">
          <a id="v4" class="nav-link active" href="#">WINTERWEAR</a>
        </li>
       </ul>
        
   
    </div>
  </div>
</nav>
    );
}

export default NavbarTypes;