//save to database with php,mysql and react js
import React, {Component} from "react";


class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            username : "test",
            password : "test password",
            displayname : "test name",

        }
    }


    inputSet = (e) => {
        
        this.setState({ [e.target.name] : e.target.value })
    }
    register = (e) => {
        e.preventDefault();
        var dat = {
            username : this.state.username,
            password : this.state.password,
            displayname : this.state.displayname,
        };
        //axios.post("")
    }


    render() {
        return (
            <div className="container">
                <h2>Registration</h2>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={this.inputSet} name="username" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.inputSet} name="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Display Name</label>
                        <input type="text" onChange={this.inputSet} name="displayname" className="form-control" /><br />
                    </div>

                    <div className="form-group">
                        <button onClick={this.register} className="btn btn-primary">Register</button>
                    </div>

                    <p>{this.state.username}</p>
                    <p>{this.state.password}</p>
                    <p>{this.state.displayname}</p>
                </form>
            </div>
        );
    }
}
export default  Form;