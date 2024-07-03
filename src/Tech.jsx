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
        <div id = "section">
            <h1>
                Skills
            </h1>
            <div id ="skillbox">
                <div id ="Skills" >
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Java</h2>
                    <img src={Java} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Python</h2>
                    <img src={Python} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> C</h2>
                    <img src={C} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> C++</h2>
                    <img src={ccc} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Scala</h2>
                    <img src={Scala} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Groovy</h2>
                    <img src={groovy} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> JavaScript</h2>
                    <img src={JS} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> TypeScript</h2>
                    <img src={TS} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Bash</h2>
                    <img src={Bash} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> HTML</h2>
                    <img src={html} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> CSS</h2>
                    <img src={Css} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> React</h2>
                    <img src={R} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Node</h2>
                    <img src={Node} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Docker</h2>
                    <img src={Docker} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Jenkins</h2>
                    <img src={Jenkins} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> Gradle</h2>
                    <img src={Gradle} alt="Logo" />
                    </div>
                    <div id = "Tech" className="btn-hover color-1">
                    <h2> SQL</h2>
                    <img src={sql} alt="Logo" />
                    </div>
                </div>
            
            


            <div id ="boxTech">
               <ul>
                    <h1> Visier!</h1>
                    <h2>September 2022 -- April 2023</h2>
                        <li>
                        Communicated and collaborated with other developers about problems with the developmental workflow. Resolved
                        them through Gradle tasks, Bash scripts and new Jenkins pipelines.
                        </li>
                        <li>
                        Reduced flagship software startup time by 50% by remediating Gradle compile logic.
                        </li>
                        <li>
                        Reduced sandbox DB startup time by 35% through reducing Gradle task responsibilities.
                        </li>
                        <li>
                        participated in an on-call rotation for driving all developer pull requests, and responded to failures in the
                        integration tests. Alerted developers about the reasons for their tests failing, and created tickets for faulty tests.
                        </li>
                        <li>
                        Won internal development competition with Jenkins job optimization using git-bisect and understanding of Visier’s
                        build systems, decreasing monthly AWS service costs by 5%.
                        </li>
                </ul>
            
            </div>
        </div>
            <h1>
                And Many More!
            </h1>
    </div>
    );
}
export default Tech;