import React from 'react';
import Fade from 'react-reveal/Fade';
const Skill = () => {
  return(
    <div className="pb5 pt5 w-100 " id="skill"  >
    <Fade top cascade>
    <h1 className="center mid-gray tc pb3 f2 f1-ns ma0 fw9" 
        >Skills</h1> 
       </Fade>  
          <div className="ml4 mr4  ma2">
     <Fade top cascade>     
            <p className="tc pl4 pr4 center f5 fw5 mid-gray mw7 pa3">
            Here are programming languages, frameworks, and tools I've used in my projects.</p> 
      </Fade>      
          <div className="tc center mid-gray mw7 pt4 pb5 icon flex flex-wrap justify-center">
              <Fade bottom cascade delay={500} duration={3000}>
                  <div className="pa2">
                   <i className="devicon-html5-plain colored"></i> 
                   <p className="f6">HTML5</p>
                  </div>
                  <div className="pa2">
                   <i className="devicon-css3-plain colored "></i>
                  <p className="f6">CSS3</p>
                  </div>
                  <div className="pa2">
                    <i className="devicon-bootstrap-plain colored"></i> 
                   <p className="f6">Bootstrap</p>
                   </div>
                 <div className="pa2">
                   <i className="devicon-react-original colored"></i> 
                   <p className="f6">React</p>
                 </div>                    
                 <div className="pa2">
                    <i className="devicon-postgresql-plain colored"></i>
                   <p className="f6">PosgreSQL</p>
                   </div>
                  <div className="pa2">
                      <i className="devicon-nodejs-plain colored"></i>
                     <p className="f6">Node</p></div>
                <div className="pa2">
                  
                     <i className="devicon-express-original colored"></i>
                     <p className="f6">Express</p></div>
                   <div> 
                      <i className="devicon-javascript-plain colored" ></i>
                     <p className="f6">JavaScript</p></div>                
                <div className="pa2">
                    <i className="devicon-heroku-original colored grow"></i>
                   <p className="f6">Heroku</p></div>
                <div className="pa2">
                    <i className="devicon-github-plain colored"></i>
                   <p className="f6">Github</p></div>
              <div className="pa2">
                    <i className="devicon-git-plain black"></i>
                   <p className="f6">Git</p></div>
              <div className="pa2">
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 18px", fontWeight:"normal"}}></i>
                    <p className="f6">NPM</p></div>     
              </Fade>
               </div> 
       </div>     
    </div>
  )
}

export default Skill;