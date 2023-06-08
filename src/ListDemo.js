//Render List of Items, uses the concept of map
//displaying the value of the array as a list

import React, {Component} from "react";

class ListDemo extends Component {

    constructor(props){
        super(props);

        this.state = {
            items : ["cat","dog","cow","goat","buffalo"],
            users : [
                //lists some objects in the array named users,each object has properties name,age
                {name:"ammu", age:29},
                {name: "liya", age:14},
                {name: "lyna", age: 21}
            ]
        };
    }

    
    render(){
        
        return(
            <div>
                <ul>
                    {this.state.items.map((itm,k)=> <li key={k}>{itm}</li> )}
                </ul>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                    {
                        this.state.users.map((itm,k)=>{
                            return (
                                <tr>
                                    <td>{itm.name}</td>
                                    <td>{itm.age}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }

}
export default ListDemo;

//map function :will take each item and execute the function(itm:cat , k:0) then take nxt like that