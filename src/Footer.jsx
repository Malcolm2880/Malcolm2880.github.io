import React from 'react';
import './Footer.css';


function handleClick() {
  alert('You clicked me!');
}

function Footer() {
  return (
    <div id="nav2">

      <h1> Contact me!</h1>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <a href="mailto:malcolmteesd@Gmail.com" className="btn-hover color-1">Email</a>
      <a href="https://www.linkedin.com/in/malcolm-tees-debeyer-71661b160/" className="btn-hover color-1">Linkedin</a>
      <a href="https://github.com/Malcolm2880" className="btn-hover color-1">Github</a>


    </div>
  );
}

export default Footer;