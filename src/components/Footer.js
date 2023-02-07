import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="bg-dark" style={{height:'340px'}}>
           <h3 className="text-warning" style={{marginLeft:'60px',paddingTop:'80px'}}> Bewkoof </h3>
           <span className="text-warning" style={{marginLeft:'60px'}} >Customer Service</span>
           <span className="text-warning" style={{marginLeft:'120px'}}>Company</span>
           <span className="text-warning" style={{marginLeft:'180px'}} >Connect with us</span><br/><br/>
           <Link className="text-light fs-6" style={{marginLeft:'60px',paddingTop:'50px'}} to="/connectwithus">Connect with us</Link>
           <Link className="text-light fs-6" style={{marginLeft:'128px'}} to="/aboutus">About us</Link>
           <Link className="text-light fs-6" style={{marginLeft:'186px'}} to="/facebookpage">4.8M People Like this</Link><br/>
           <Link className="text-light fs-6" style={{marginLeft:'60px'}} to="/trackorder">Track order</Link>
           <Link className="text-light fs-6" style={{marginLeft:'161px'}} to="/wearehiring">We're Hiring</Link>
           <Link className="text-light fs-6" style={{marginLeft:'163px'}} to="/instapage">1M Followers</Link><br/>
           <Link className="text-light fs-6" style={{marginLeft:'60px'}} to="/trackorder">Return order</Link>
           <Link className="text-light fs-6" style={{marginLeft:'150px'}} to="/wearehiring">Terms & Conditions</Link><br/>
           <Link className="text-light fs-6" style={{marginLeft:'60px'}} to="/trackorder">Cancel order</Link>
           <Link className="text-light fs-6" style={{marginLeft:'150px'}} to="/wearehiring">Privacy Policy</Link><br/>
           <Link className="text-light fs-6" style={{marginLeft:'300px'}} to="/wearehiring">Blog</Link><br/>


           
        </div>
    );
}

export default Footer;