//life cycle methods/hooks-MOUNT,UPDATE,UNMOUNT
//These methods are automatically triggered
//MOUNT--events related to mounting(WORKFLOW=Constructor,componentWillMount,Render,componentDidMount)
//UPDATE--each time a change happens, re-render occurs,(WORKFLOW=componentWillUpdate,Render,componentDidUpdate)
//      -- we can give a control in update method(whether to re-render/not if a change happens)--shouldComponentUpdate method
//UNMOUNT--routing should be enabled here-componentWillUnmount method(to make a action before unmounting)
import React, {Component} from "react";

class Hooks extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0,
        }
        console.log("cons triggered")
    }
    //before mounting--componentWillmount method
    componentWillMount(){
        console.log("inside component willmount")
    }

    increment = () => {
        this.setState( (prev,props) => ( {counter: prev.counter+1} ))
    }

    render(){
        console.log("render method")
        return (
            <div>
                
                <button onClick={this.increment}>increment</button>
                <p>You have clicked {this.state.counter} times</p>
            </div>
        )
    }
    //after the component is mounted--componentDidMount method
    componentDidMount(){
        console.log("inside compo did mount")
    }
    //shouldComponentUpdate(inoder to avoid rendering at a point),this method returns a true/false value
    //true--updation will happen,false- no updation
    shouldComponentUpdate(){
        return true;
    }

    //before the component is updating--componentWillUpdate method
    componentWillUpdate(){
        console.log("inside componentWillUpdate")

    }
    //after the component is updated--componentDidUpdate method
    componentDidUpdate(){
        console.log("inside componentDidUpdate")

    }

}
export default Hooks;
