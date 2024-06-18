import React from 'react';
import './Fox.css'; 
import face from '/Down.png'; // Tell webpack this JS file uses this image

function Fox() {
    return (
        <div id="person">
            <div id="person">
        <header>
            <h1>Hello I am Malcolm Tees-DeBeyer</h1>
            <h2>I am a recent graduate from UBC in computer science!</h2>
           
        </header>
        </div>
        <img src={face} alt="Logo" />
        
    </div>
    );
}
export default Fox;