
import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(){
       super()
       this.state={
        hasError:false 
        // hasError:false To set a basic default value
       } 
    }

    componentDidCatch(Error,info){
      this.setState({hasError:true})
    //   hasError:true to update error every time 
    }
    // ComponentDidCatch is a Method 


    render(){
        if (this.state.hasError === true){
            return <h1>"OOps,unexpected Error"</h1>;
            // hasError === true to display if there is an Error
        }
        return this.props.children;
    }
}

export default ErrorBoundary;