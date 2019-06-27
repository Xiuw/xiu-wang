import React from 'react';
import Tilt from 'react-tilt';
const Skill = () => {
	return(
		<div className="pb5 bg-navy" id="skill"  >
          <h1 className=" center w-100 gold fw6 tc pt5 f3 pl4 pr4 ma0">My skills</h1>
          <p className="tc pl4 pr4 f5 white-80 pt2">Here are programming languages, frameworks, and tools I've used in my projects.</p> 
          <div className="ml4 mr4">
            <div className={divBox}>
              <p className={insideHeader}> Front-end skills</p>
              <div className={iconSection}>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                         <i className="devicon-html5-plain colored"></i> 
                         <p className="">HTML5</p>
                    </Tilt>
                     <Tilt className="Tilt pa2" options={{max:100}}>
                         <i className="devicon-css3-plain colored grow"></i>
                        <p className="">CSS3</p>
                    </Tilt>
                     <Tilt className="Tilt pa2" options={{max:100}}>
                        <i className="devicon-bootstrap-plain colored grow"></i> 
                       <p className="">Bootstrap</p>
                    </Tilt>
                    <Tilt className="Tilt pa2" options={{max:100}}>
                       <i className="devicon-react-original colored grow"></i> 
                       <p className="">React</p>
                    </Tilt> 
              </div>
            </div>
            <div className={divBox}>
               <p className={insideHeader}> Back-end skills</p>
                <div className={iconSection}>
                   <Tilt className="Tilt pa2" options={{max:100}}>
                      <i className="devicon-postgresql-plain colored grow"></i>
                     <p className="">Postgresql</p>
                  </Tilt>
                  <div className="grow pa2">
                      <i className="devicon-nodejs-plain colored grow"></i>
                     <p className="">Node.js</p>
                  </div>
                   <Tilt className="Tilt pa2" options={{max:100}}>
                     <i className="devicon-express-original colored grow"></i>
                     <p className="">Express.js</p>
                  </Tilt>

                   <Tilt className="Tilt pa2" options={{max:100}}>     
                      <i className="devicon-javascript-plain colored grow" ></i>
                     <p className="">Javascript</p>
                  </Tilt>
              
                </div>
              </div>
            <div className={divBox}>
              <p className={insideHeader}>Other skills</p>
              <div className={iconSection}>
                   <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-heroku-original colored grow"></i>
                   <p className="">Heroku</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-github-plain colored grow"></i>
                   <p className="">Github</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="devicon-git-plain black grow"></i>
                   <p className="">Git</p>
                </Tilt>
                 <Tilt className="Tilt pa2" options={{max:100}}>
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 15px", fontWeight:"normal"}}></i>
                    <p className="">NPM</p>
                </Tilt>
              </div>
              </div>
          </div>    
            
		</div>
	)
}

const divBox = "center bg-white-50 mw7 br4 pa3 mt5";
const insideHeader="tc gold f4 b";
const iconSection="flex justify-center flex-wrap icon navy fw6 tc center mt3";
export default Skill;