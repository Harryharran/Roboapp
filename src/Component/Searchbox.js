
import React from "react";

const Searchbox=({searchchange})=>{
    
        return(
            <div className="pa-2">
           <input className="pa3 tc  br-2 bg-light-blue " type="search" placeholder="search robots" onChange={searchchange} />
           </div>
        )
    
}
export default Searchbox;