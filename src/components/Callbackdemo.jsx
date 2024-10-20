import React from 'react'

function Callbackdemo() {

    function hello(call){
        setTimeout(function () {
            console.log("hello")
            call();
        },3000); 
        
    }

    function bye(){
        console.log("bye")
    }
    
    hello(bye);
    

    return (
        <div>Callbackdemo</div>
    )
}



export default Callbackdemo