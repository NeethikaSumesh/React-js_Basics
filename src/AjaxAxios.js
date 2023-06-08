//Ajax with AXIOS
import React,{Component} from "react";
import axios from 'axios';
//Ajax call 2 types-get request(fetch data),post request(submissions)

class AjaxAxios extends Component {
    constructor(){
        super();
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        //asynchronous request--we cant access it directly, can access after completion by using then function
        //after completing ajax call, the function specified in then will be executed
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            //console.log(response.data[1]);
            this.setState({posts : response.data})
        })
    }
    render(){

        return(
            
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>title</td>
                </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((itm,k)=>{
                        return (
                            <tr>
                                <td>{itm.id}</td>
                                <td>{itm.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}
export default AjaxAxios;