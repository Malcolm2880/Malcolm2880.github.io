import React from 'react';
import './Projects.css';
import face from '/Down.png'; // Tell webpack this JS file uses this image
import UBC from '/UBC.png';
import sts from '/sts.jpg'
import f1 from '/F1.png'
import code from '/CodeTest.png'

function Projects() {
    return (
        <div id="section2" >

            <div id="skillbox" >
                <div id="Skills" className="sibling-fade">
                    <div id="ProjectBoxes">

                        <img src={UBC} alt="Logo" />
                        <h1> UBC Course Searcher</h1>

                        <h3>
                            Large capstone project designed under test driven development. Created 100+ tests using ChaiJS testing framework.

                            Created RESTful API with implementations of GET, POST, and DELETE. Which is accessed from a React front-end.
                        </h3>



                        <u1 id="flex">

                            <h2 class="glow-on-hover2"> TypeScript</h2>
                            <h2 class="glow-on-hover2"> JavaScript</h2>
                            <h2 class="glow-on-hover2"> React</h2>
                            <h2 class="glow-on-hover2"> Node</h2>

                        </u1>
                        <a href="https://www.youtube.com/watch?v=4ez8B4Cy5Mw&ab_channel=Surat2880" className="btn-hover color-1">Demo</a>

                    </div>
                    <div id="ProjectBoxes">

                        <img src={sts} alt="Logo" />
                        <h1> Slay the Spire Card Manager</h1>

                        <h3>

                            A interactive and intelligent program that manages a card deck, and allows additions. All of which is given visual feedback.

                            Calculates optimal hands for the current deck based on added damage and defense cards.
                        </h3>



                        <u1 id="flex">

                            <h2 class="glow-on-hover2"> Python</h2>


                        </u1>
                        <a href="https://github.com/Malcolm2880/Spire-CardManager" className="btn-hover color-1">Link</a>

                    </div>
                    <div id="ProjectBoxes">

                        <img src={f1} alt="Logo" />
                        <h1>Formula 1 Database Management System</h1>

                        <h3>
                            Created relational database using SQL that stores Formula one race information and enforces relational database rules.

                            Allowed for live updates and database alteration using SQL statements and queries through a intuitive UI front end created with Java Swing.

                        </h3>



                        <u1 id="flex">

                            <h2 class="glow-on-hover2"> Java</h2>
                            <h2 class="glow-on-hover2"> SQL</h2>

                        </u1>
                        <a href="https://github.com/Malcolm2880/RacingDatabase" className="btn-hover color-1">Link</a>

                    </div>
                    <div id="ProjectBoxes">

                        <img src={code} alt="Logo" />
                        <h1>Super Boxagon</h1>

                        <h2>

                            Java program that recreates "Super Hexagon" using Java Swing

                            Created under test driven development, and under Agile methodologies.

                        </h2>



                        <u1 id="flex">

                            <h2 class="glow-on-hover2"> Java</h2>


                        </u1>
                        <a href="https://github.com/Malcolm2880/Super-boxagon" className="btn-hover color-1">Link</a>

                    </div>







                </div>
            </div>
        </div>
    );
}
export default Projects;