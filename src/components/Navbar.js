import './Navbar.css';
import image1 from './CartImage.webp';
import image2 from './heartImage.png';
import { Link } from "react-router-dom";



const Navbar=()=>{


  


   

     return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom border-2">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold mx-5" to="/">Bewkoof</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" id="m">
          <Link className="nav-link active" aria-current="page" to="/men">MEN</Link>
        </li>
        <li className="nav-item" id='m1'>
          <Link id="m1" className="nav-link active" to="/women">WOMEN</Link>
        </li>
        <li className="nav-item" id="m2">
          <Link  id="m2" className="nav-link active" to="/mobilecover">MOBILE COVERS</Link>
        </li>
       
        </ul>
    
      
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link  id="login" className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item" >
          <Link  to="/im"><img id="heartimage" src={image2} alt="..." /></Link>
          </li>
        <li className="nav-item" >
          <Link  to="/im"><img id="cartimage" src={image1} alt="..." /></Link>
          </li>
      
        </ul>
        
      
    </div>
  </div>
</nav>
     );
}

export default Navbar;