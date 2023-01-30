import React, { useState } from "react";
import { useEffect } from "react";
import mImage from './MensTshirtImage.jpg';
import { Link } from "react-router-dom";

const Men=()=>{

    const handleAddToCart=()=>{

    }

    const [alluser,setAlluser]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getProductByName/Men's T-shirt")
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
                
                    <img src={mImage} className="card-img-top" alt="Nothing to display!!!"/>
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

export default Men;