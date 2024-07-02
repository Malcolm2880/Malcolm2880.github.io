import React from 'react';
import './Tech.css'; 
import face from '/Down.png'; 
import Java from '/Java.png'; 
function Tech() {
    return (
        <div id = "section">
            <h1>
                Skills
            </h1>
            <div id ="skillbox">
                <div id ="Skills">
                    <div id = "Tech">
                    <h2> Java</h2>
                    <img src={Java} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Python</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> C</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> C++</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Scala</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Groovy</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> JavaScript</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> TypeScript</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Bash</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> HTML</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> CSS</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> React</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Node</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Docker</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Jenkins</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Gradle</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> Puppet</h2>
                    <img src={face} alt="Logo" />
                    </div>
                    <div id = "Tech">
                    <h2> SQL</h2>
                    <img src={face} alt="Logo" />
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