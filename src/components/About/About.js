import React from 'react';
import xiu from './xiu.jpg';
const About = () =>{
  return(
       <div id="about" className="pt5 themeBg bg-shape">
                <h1 className="center white tc pb4 f2 f1-ns ma0 fw9">About Me</h1>
                  <div className="center tc w-90 pa1 pb6 pt2 mw8" >
                    <div className="f5 fw5 gray pl1 pr1 lh-copy flex-l"> 
                    <div className="w-30-l tc flex items-center">
                      <img alt="xiu" className="br-100 ba center b--mid-gray bw1" width="130px" height="150px"src={xiu}/>
                    </div> 
                    <div className="w-10-l flex items-center"><span className="ml3 bl-l h5-l mid-gray bw1"></span></div>
                     <div className="w-60-l ma0 pa0">
                        <p className="tl">  
                        I'm a web developer who enjoys building web applications from the front-end to the back-end. 
                        I love using React to build client-side application and Node/Express for the server-side application.
                        </p>
      
                        <p className="tl">
                        My passion for web development is inspired by one of the stories on Medium. 
                        The story had deeply motivated me and resonated with my own. 
                        That's how my coding journey started, and I enjoy it and never stop learning since then.
                        </p>

                    <a className="btnBtn  ph4 pa2 mt1 fw6 pointer f5 dib no-underline white ba btn2 fl-l" 
                    href="https://drive.google.com/open?id=17oGCNyYAs8kUt_qR5SVM0TBD5JYu5GKy" target= "_blank" rel="noopener noreferrer">
                    <i className="fas fa-download"></i><span className="pl2">Resume</span>
                    </a>   
      
                    </div>
                   </div>
                 </div>
               
         </div>                   
  
  )
}
export default About;