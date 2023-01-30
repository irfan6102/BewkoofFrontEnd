import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import wImage from './WomenTshirtImage.webp';

const Women=()=>{
    const handleAddToCart=()=>{

    }

    const [alluser,setAlluser]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getProductByName/Women's T-shirt")
        .then(res=>res.json())
        .then((result)=>{
            setAlluser(result);
        })
    },[]);

    return(
        <>
        <div className="row mx-5">
           {alluser.map((alluser)=>(
         
              <div className="col-md-4" key={alluser.id}>
              <div className="card my-4" >
                
                    <img src={wImage} className="card-img-top" alt="Nothing to display!!!"/>
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

export default Women;