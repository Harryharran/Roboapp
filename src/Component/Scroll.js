import React from "react";

function scroll (props){
    // console.log(props);
  return (
    <div style={{overflowY:'scroll', border:'5px solid grey', height:'350px' }}>
    {props.children}
    </div>
)
}

export default scroll;