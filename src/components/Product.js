import React, { useEffect, useState } from "react";
import mImage from './MensTshirtImage.jpg';
import wImage from './WomenTshirtImage.webp';
import { Link } from "react-router-dom";
import Search from "./Search";

const Product=()=>{
    const[alluser,setAlluser]=useState([]);

    const handleAddToCart=()=>{
        console.log("Add to cart clicked");
    }

    useEffect(()=>{
        fetch("http://localhost:8080/getAllProducts")
        .then(res=>res.json())
        .then((result)=>{
            setAlluser(result);
        })
    },[]);
   
    return(
        <>
        <Search />
        <div className="row mx-5">
           {alluser.map((alluser)=>(
         
              <div className="col-md-4" key={alluser.id}>
              <div className="card my-4" >
                
                    <img src={alluser.name==="Women's T-Shirt"?mImage:wImage} className="card-img-top" alt="Nothing to display!!!"/>
                <div className="card-body">
                    <h5 className="card-title">{alluser.name}</h5>
                    <p className="card-text">{alluser.price}.00Rs</p>
                    <Link to="/buynow" className="btn btn-primary btn-sm">Buy now</Link>
                    <Link to="/addtocart" onClick={handleAddToCart} className="btn btn-primary btn-sm mx-3">Add to cart</Link>
              </div>
              </div>
              </div>
                
        
                
            
           ))
        }
        </div>

       </>   
    );
}

export default Product;