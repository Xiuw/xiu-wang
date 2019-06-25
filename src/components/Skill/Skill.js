import React from 'react';
import Tilt from 'react-tilt';
const Skill = () => {
	return(
		<div className="pb5" id="skill"  >
          <h1 className=" center w-100 w7 w5-ns tc pa3 mt0 fw4 header-title">Skill</h1>
              <div className="flex justify-center flex-wrap icon black-70 tc center mw7 mt5">
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

                 <Tilt className="Tilt pa2" options={{max:100}}>     
                    <i className="devicon-javascript-plain colored grow" ></i>
                   <p className="">Javascript</p>
                </Tilt>
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
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 5px", fontWeight:"normal"}}></i>
                    <p className="">NPM</p>
                </Tilt>
              </div> 
            
		</div>
	)
}

export default Skill;