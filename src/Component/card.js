// This file is for creating one single Template Card Component

import React from 'react';
// import { robots } from './robots';

const Card=(props)=>{
       const {name,email}=props;
return(

       <div className='bg-light-green dib tc br4 ma3 pa2 ' >
       <img alt='robots' src={`https://robohash.org/${props.id}`}/>
       <div>
        <h2> {name} </h2>
        <p> {email} </p>
        </div>
       </div>
      
      
)
}

export default Card;