import React from 'react';
import Tilt from 'react-tilt';
const Skill = () => {
  return(
    <div className="pb4 w-100 " id="skill"  >
          <h1 className="center mid-gray fw6 tc pt5 f3 pl4 pr4 ma0">My skills</h1>
          <p className="tc pl4 pr4 center f5 fw6 mid-gray pa4 mw7">Here are programming languages, frameworks, and tools I've used in my projects.</p> 
          <div className="ml4 mr4">
          <div className=" shadowE tc center white mw7 br4 pt5 pb4 icon flex flex-wrap justify-center bg-white-20">
                 <Tilt className="Tilt pa2" options={{max:100}}>
                         <i className="devicon-html5-plain colored"></i> 
                         <p className="f6">HTML5</p>
                    </Tilt>
                     <Tilt className="Tilt pa2" options={{max:100}}>
                         <i className="devicon-css3-plain colored grow"></i>
                        <p className="f6">CSS3</p>
                    </Tilt>
                     <Tilt className="Tilt pa2" options={{max:100}}>
                        <i className="devicon-bootstrap-plain colored grow"></i> 
                       <p className="f6">Bootstrap</p>
                    </Tilt>
                    <Tilt className="Tilt pa2" options={{max:100}}>
                       <i className="devicon-react-original colored grow"></i> 
                       <p className="f6">React</p>
                    </Tilt> 
                   <Tilt className="Tilt pa2" options={{max:100}}>
                      <i className="devicon-postgresql-plain colored grow"></i>
                     <p className="f6">PostgreSQL</p>
                  </Tilt>
                  <Tilt className="grow pa2">
                      <i className="devicon-nodejs-plain colored grow"></i>
                     <p className="f6">Node</p>
                  </Tilt>
                   <Tilt className="Tilt pa2" options={{max:100}}>
                     <i className="devicon-express-original colored grow"></i>
                     <p className="f6">Express</p>
                  </Tilt>
                   <Tilt className="Tilt pa2" options={{max:100}}>     
                      <i className="devicon-javascript-plain colored grow" ></i>
                     <p className="f6">JavaScript</p>
                  </Tilt>
                   <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-heroku-original colored grow"></i>
                   <p className="f6">Heroku</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-github-plain colored grow"></i>
                   <p className="f6">Github</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-git-plain black grow"></i>
                   <p className="f6">Git</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 18px", fontWeight:"normal"}}></i>
                    <p className="f6">NPM</p>
              </Tilt>
               </div> 
       </div>     
    </div>
  )
}

export default Skill;