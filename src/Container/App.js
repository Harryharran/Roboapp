import React, { Component } from "react";
import Searchbox from "../Component/Searchbox.js";
// import { robots } from "./robots";
import Cardlist from "../Component/cardlist.js";
import "./app.css";
import Scroll from "../Component/Scroll.js";


class App extends Component{
    constructor(){
      super()
      this.state={
       robot: [],
       searchfield:''
      }
      // console.log('3');
    }

     //  When u make own methods in a component, Arrow func it.onsearchange is to communicate searchbox to app
     onsearchange=(event)=>{
     this.setState ({searchfield : event.target.value})
      // this.setState() is required to update searchfield value everytime
     }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robot:users}))
    //  console.log('1');
  }
    
      render(){
        // const {robot,searchfield}= this.state;
        const Searchrobots = this.state.robot.filter((robot)=>{
          //  in above array 'arg-robot' is alike arg-I in array
          return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          // returning robot name with-from searchfield(.includes)
       })
      // Searchrobots func is to communicate from searchbox to robotslist via app
      // console.log('2');

      if (this.state.robot.length === 0){
        return <h1 className="tc">loading</h1>
      }
       else{ return(
          <>
           <div className="a">
          <h1 className="f1">RoboFriends</h1>
          <Searchbox searchchange={this.onsearchange}/>
          {/* this. coz Onsearchange is an object */}
          </div>
          <Scroll>
          <Cardlist robo={Searchrobots}/>
          </Scroll>
          {/* From here robo is passed to Cardlist {robo} */}
          {/* this.state. coz robots is passed as props via state */}
          {/* {Searchrobots} coz searchbox to robots via app */}
          </>
        )}
  
      }
}



export default App;
