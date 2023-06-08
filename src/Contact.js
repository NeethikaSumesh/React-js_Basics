import React from "react";

function Contact(props) {
    var nm = props.name.toUpperCase();
    return(
        <div>
            <h1>{nm} Contact page</h1>
            <p>{props.id[1]}</p>
            <label>Email</label>
            <input type="text" /><br />
            <label>Message</label>
            <textarea></textarea><br />
            <button>Submit</button>
        </div>
    )}

    export default Contact;