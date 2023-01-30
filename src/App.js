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
function App() {
  return (
  
    <Router>

     <Navbar />

     <Routes>
      <Route exact path="/" element={<><NavbarTypes />,<Product /></>}/>
         <Route exact path="/men" element={<><NavbarTypes />,<Men /></>}/>
         <Route exact path="/women" element={<><NavbarTypes />,<Women /></>}/>
         <Route exact path="/mobilecover" element={<><NavbarTypes />,<MobileCovers /></>}/>
         <Route exact path="/login" element={<Login />}/>
         <Route exact path="/registeration" element={<Register />}/>
     </Routes>

     </Router>
     
      
  );
}

export default App;
