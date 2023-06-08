//how event handling can be done in a function component
import React from "react";

var x=10;
function inc() {
    x++;
    alert(x);
}

function test(){
    alert('test function')
}

function Demo() {
    return (
        <div>
            <button onClick={ ()=>{ alert('Welcome')} }>Click</button><br />
            <button onClick = {test}>Submit</button><br />
            <button onClick={ inc }>Click me</button><br />
        </div>
    );
}
export default Demo;