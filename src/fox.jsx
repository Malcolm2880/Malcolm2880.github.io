import React from 'react';
import './Fox.css'; 
import face from '/me.jpeg'; // Tell webpack this JS file uses this image

function Fox() {
    return (
        <div id ="box">
          
            <div id = "pic">
            <img src={face} />
            </div>
        <div id="person">
           
        
            <h1>Hello I am Malcolm Tees-DeBeyer</h1>
           
          

           
        
        </div>
        
      
        
    </div>
    );
}
export default Fox;