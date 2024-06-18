import React from 'react';
import './NavBar.css'; 
import Fox from './fox'


function handleClick() {
  alert('You clicked me!');
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Home</button>
        </li>
        <li>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Experience</button>
          
        </li>
        <li>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Projects</button>
        </li>
        <li>
        <button type="button" onClick={handleClick} className="btn-hover color-1">Projects</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;