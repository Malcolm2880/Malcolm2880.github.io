import React from 'react';
import './Projects.css'; 
import face from '/Down.png'; // Tell webpack this JS file uses this image

function Projects() {
        return (
            <div id = "section2" >
                <h1>
                  Projects! 
                </h1>
                <div id ="skillbox" >
                    <div id ="Skills"  className ="sibling-fade">
                    <ul>
                        <h1> UBC Course Searcher</h1>
                        <h2>September 2023 -- December 2023</h2>
                            <li >
                            Large capstone project designed under test driven development. Created 100+ tests using ChaiJS testing framework.
                            </li>
                            <li>
                            Created RESTful API with implementations of GET, POST, and DELETE. Which is accessed from a React front-end.
                            </li>
                            
                          
                           
                            
                            
                            <a href="https://www.youtube.com/watch?v=4ez8B4Cy5Mw&ab_channel=Surat2880" className="btn-hover color-1">Demo</a>
                            
                           
                    </ul>      
                    
                    <ul>
                        <h1> Slay the Spire Card Manager</h1>
                        <h2>April 2022 -- July 2022</h2>
                            <li>
                            A interactive and intelligent program that manages a card deck, and allows additions. All of which is given visual feedback.
                            </li>
                            <li>
                            Calculates optimal hands for the current deck based on added damage and defense cards.
                            </li>
                            <a href="https://github.com/Malcolm2880/Spire-CardManager" className="btn-hover color-1">Link</a>
                            
                    </ul>
                    <ul>
                        <h1>Formula 1 Database Management System</h1>
                        <h2>September 2021 -- December 2021</h2>
                            <li>
                            Created relational database using SQL that stores Formula one race information and enforces relational database rules.
                            </li>
                            <li>
                            Allowed for live updates and database alteration using SQL statements and queries through a intuitive UI front end created with Java Swing.
                            </li>
                            <a href="https://github.com/Malcolm2880/RacingDatabase" className="btn-hover color-1">Link</a>
                           
                    </ul>
                    <ul>
                        <h1> Super Boxagon</h1>
                        <h2>April 2022 -- July 2022</h2>
                            <li>
                            Java program that recreates "Super Hexagon" using Java Swing
                            </li>
                            <li>
                            Created under test driven development, and under Agile methodologies
                            </li>
                            <a href="https://github.com/Malcolm2880/Super-boxagon" className="btn-hover color-1">Link</a>
                            
                    </ul>
                    
                    
                    
                     
                    </div>
            </div>
        </div>
    );
}
export default Projects;