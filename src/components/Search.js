import React from "react";

const Search=()=>{
    
    return(
        <div>
        <form class="d-flex" style={{width:'400px',marginLeft:'400px'}}>
        <input class="form-control me-2" type="search" placeholder="Search based on product or collection" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        </div>
    );
}
export default Search;