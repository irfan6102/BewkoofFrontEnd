import React from "react";
import Navbar from "./components/Navbar";
import NavbarTypes from "./components/NavbarTypes";
import Men from "./components/Men";
import Women from "./components/Women";
import MobileCovers from "./components/MobileCovers";
import Product from "./components/Product";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Register from "./components/Register";
import Accessories from "./components/Accessories";
import Winterwear from "./components/Winterwear";
import Footer from "./components/Footer";
function App() {
  return (
  
    <Router>

     <Navbar />

     <Routes>
      <Route exact path="/" element={<><NavbarTypes />,<Product />,  <Footer /></>}/>
         <Route exact path="/men" element={<><NavbarTypes />,<Men />,  <Footer /></>}/>
         <Route exact path="/women" element={<><NavbarTypes />,<Women />,  <Footer /></>}/>
         <Route exact path="/mobilecover" element={<><NavbarTypes />,<MobileCovers />,  <Footer /></>}/>
         <Route exact path="/login" element={<Login />}/>
         <Route exact path="/registeration" element={<Register />}/>
         <Route exact path="/accessories" element={<><NavbarTypes />,<Accessories />,  <Footer /></>}/>
         <Route exact path="/winterwear" element={<><NavbarTypes />,<Winterwear />,  <Footer /></>}/>
         <Route exact path="/livenow" element={<><NavbarTypes />,<Product />,  <Footer /></>}/>
         
     </Routes>
      
    

     </Router>
     
      
  );
}

export default App;
