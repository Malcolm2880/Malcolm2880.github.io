import React from 'react';
import './Tech.css';
import face from '/Down.png';
import C from '/C.png';
import Java from '/java3.png';
import Css from '/Css.png';
import html from '/html.png'
import JS from '/JS.png';
import Python from '/Python.png';
import R from '/React.png';
import TS from '/TS.png';
import ccc from '/cplusplus.png'
import Scala from '/scala-spiral.png'
import groovy from '/Groovy-logo.svg.png'
import Bash from '/Bash.png'
import Node from '/Node.png'
import Docker from '/Docker.png'
import Jenkins from '/jenkins.png'
import Gradle from '/gradle.png'
import sql from '/SQL.png'

function Tech() {
    return (
        <div id="section">

            <div id="skillbox">
                <div id="Skills" >
                    <div id="Tech" class="glow-on-hover">
                        <h2> Java</h2>
                        <img src={Java} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Python</h2>
                        <img src={Python} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> C</h2>
                        <img src={C} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> C++</h2>
                        <img src={ccc} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Scala</h2>
                        <img src={Scala} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Groovy</h2>
                        <img src={groovy} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> JavaScript</h2>
                        <img src={JS} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> TypeScript</h2>
                        <img src={TS} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Bash</h2>
                        <img src={Bash} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> HTML</h2>
                        <img src={html} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> CSS</h2>
                        <img src={Css} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> React</h2>
                        <img src={R} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Node</h2>
                        <img src={Node} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Docker</h2>
                        <img src={Docker} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Jenkins</h2>
                        <img src={Jenkins} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> Gradle</h2>
                        <img src={Gradle} alt="Logo" />
                    </div>
                    <div id="Tech" class="glow-on-hover">
                        <h2> SQL</h2>
                        <img src={sql} alt="Logo" />
                    </div>
                </div>





            </div>

        </div>
    );
}
export default Tech;