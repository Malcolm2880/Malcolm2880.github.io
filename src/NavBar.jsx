import React from 'react';
import './NavBar.css';
import Fox from './fox'


function handleClick() {
  alert('You clicked me!');
}

function NavBar() {
  return (
    <nav>
      <a href="#all" className="btn-hover color-1">Home</a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <a href="#section" className="btn-hover color-1">Skills</a>
      <a href="#section2" className="btn-hover color-1">Experience</a>
      <a href="#nav2" className="btn-hover color-1">Contact Me!</a>


    </nav>
  );
}

export default NavBar;