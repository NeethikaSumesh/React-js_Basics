//class component works and the concept of state.
import React, {Component} from "react";

class Counternew extends Component {
    //constructor receives props as an arguement
    constructor(props){
        super(props);//calling the parent class constructor
        //the values that are changing inside a component is given in state,no variable is used
        this.state = {
            counter : 0
        };
    }

    increment(){
        setTimeout(()=>{
            this.setState( (prev,props) => ({counter: prev.counter+1}));
        },1000)
        
    }

    render(){
        this.increment();
        return (
            <div>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}
export default Counternew;

//if there is a change in state we re-render the portion again.