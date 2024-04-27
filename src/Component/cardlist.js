import React from "react";
import Card from "./card";
// import { robots } from "./robots";

// We can't return array, can return only Func comp with single parent Element. So Cardarray is enclaved within cardlist. 
// const Cardlist =({robo})=>{
//     const Cardarray = robo.map((user,i)=> {
//   return <Card id={robo[i].id} name={robo[i].name} email={robo[i].email} /> ;
//     })
//     return (
//         <>
//         {Cardarray} 
//         </>
//         // Has to destructure coz its a function.
//     );
// }


const Cardlist =({robo})=>{
  // This (if) is to demonstrate a sample Error msg in case of an Error in App
  // if(true){
  //   throw new Error ('yes');
  // }
  return (
      <div className="tc">
      {
     robo.map((user,i) => {
      return (
      <Card
       key={i}
       id={robo[i].id} 
       name={robo[i].name}
       email={robo[i].email} 
       />)
      })
      }
      </div>  
      // Tag elements unifies under single parent or fragment,else these func enclose it in destructure. 
      // User is used indirectly.
  );
}

export default Cardlist;