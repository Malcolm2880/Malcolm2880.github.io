import React from 'react';
import './NavBar.css'; 
import Fox from './fox'


function handleClick() {
  alert('You clicked me!');
}

function NavBar() {
  return (
    <nav>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Home</button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Experience</button>
          
       
        <button type="button" onClick={handleClick} className="btn-hover color-1">Projects</button>
       
        <button type="button" onClick={handleClick} className="btn-hover color-1">Projects</button>
       
    </nav>
  );
}

export default NavBar;