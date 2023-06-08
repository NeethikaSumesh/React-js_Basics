import React from "react";

var count = 0;

function Counter(){
    count++;
    return(
        <p>{count}</p>
    );
}

export default  Counter;