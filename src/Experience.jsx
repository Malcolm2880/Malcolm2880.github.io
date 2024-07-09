import React from 'react';
import './Experience.css'; 
import face from '/Down.png'; // Tell webpack this JS file uses this image
import Visier from '/Visier.png'

function Experience() {
        return (
            <div id = "section2" >
                <h1>
                  Experience! 
                </h1>
                <div id ="skillbox" >
                    <div id ="Skills">
                    <ul>
                        
                    <img src={Visier} alt="Logo" />
                        <h1> Visier</h1>
                        
                                                <li >
                                                Communicated and collaborated with other developers about problems with the developmental workflow. Resolved
                    them through Gradle tasks, Bash scripts and new Jenkins pipelines.
                    </li><li >
                    Reduced flagship software startup time by 50% by remediating Gradle compile logic.
                    </li><li >
                    Reduced sandbox DB startup time by 35% through reducing Gradle task responsibilities.
                    </li><li >
                    participated in an on-call rotation for driving all developer pull requests, and responded to failures in the
                    integration tests. Alerted developers about the reasons for their tests failing, and created tickets for faulty tests.
                    </li><li >
                    Won internal development competition with Jenkins job optimization using git-bisect and understanding of Visier’s
                    build systems, decreasing monthly AWS service costs by 5%.
                            </li>
                            
                          
                           
                            
                           
                    </ul>      
                    
                    
                    
                    
                    
                     
                    </div>
            </div>
        </div>
    );
}
export default Experience;