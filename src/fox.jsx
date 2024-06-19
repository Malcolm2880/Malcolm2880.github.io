import React from 'react';
import './Fox.css'; 
import face from '/tempFace.png'; // Tell webpack this JS file uses this image

function Fox() {
    return (
        <div id ="box">
            <ul>
            <div id = "pic">
            <img src={face} alt="Logo" />
            </div>
        <div id="person">
           
        <header>
            <h1>Hello I am Malcolm Tees-DeBeyer</h1>
            <h2>I am a recent graduate from UBC in computer science! My passion involves playing video games, listening to music, and even watching TV shows!</h2>
           
        </header>
        </div>
        </ul>
      
        
    </div>
    );
}
export default Fox;