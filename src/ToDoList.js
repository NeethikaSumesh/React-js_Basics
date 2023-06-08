// Simple TODO list application

import React,{Component} from "react";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : ["Item1","Item2"],
            textcontent : ""
        }
    }

    textChange = (e) => {
        this.setState({textcontent : e.target.value});
    }
    addItem = (e) => {
        let currentTxt = this.state.textcontent;
        let currentItems = this.state.items;
        currentItems.push(currentTxt);
        this.setState({items: currentItems});
    }

    removeItem = (i) => {
        if(!window.confirm("Are u sure u want to dlt this ?")){
            return;
        }
        let currentItems = this.state.items;
        currentItems.splice(i,1);
        this.setState({items: currentItems});
    }

    render(){
        return(
            <div className="">
                <h1 style={{ color: 'blue',}}>TODO LIST</h1>
                <input type="text" onChange = {this.textChange}/>
                <button onClick={this.addItem}>Add</button>

                <ul>
                    {this.state.items.map((itm,k)=>{
                        return(
                            <li>{itm} <button onClick={ () => {this.removeItem(k) }}>Delete</button></li>
                        )
                    })}
                </ul>
                <p>{this.state.textcontent}</p>
            </div>
        );
    }
}

export default ToDoList;