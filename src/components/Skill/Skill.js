import React from 'react';
import {Animated} from "react-animated-css";

const Skill = () => {
	return(
		<div>
         <Animated animationIn="slideInUp" isVisible={true}>
		<h1 className=" black-80 center tc ma4 pa3 f3 f2-ns" style={{color:"#ccac9d"}}>Skills</h1>
		 <p className="black-80 tc ma2 f6 f6-m f4-ns pl3 pr3">
             *Following are the programming languages, 
              frameworks and tools I've used in my projects.
             </p>

              <div className="flex justify-center flex-wrap ma5 icon">
                <div>
                     <i className="devicon-html5-plain grow"></i> 
                     <p className="tc">HTML5</p>
                </div>
                    <div>
                     <i className="devicon-css3-plain colored grow"></i>
                    <p className="tc">CSS3</p>
                </div>
                <div>
                    <i className="devicon-bootstrap-plain colored grow"></i> 
                   <p className="tc">Bootstrap</p>
                </div>
                <div>
                   <i className="devicon-react-original colored grow"></i> 
                   <p className="tc">React</p>
                </div> 

                <div>      
                    <i className="devicon-javascript-plain colored grow" ></i>
                   <p className="tc">Javascript</p>
                </div>
                <div>
                    <i className="devicon-postgresql-plain colored grow"></i>
                   <p className="tc">Postgresql</p>
                </div>
                <div>
                    <i className="devicon-nodejs-plain colored grow"></i>
                   <p className="tc">Node.js</p>
                </div>
                <div>
                   <i className="devicon-express-original colored grow"></i>
                   <p className="tc">Express.js</p>
                </div>
                <div>
                    <i className="devicon-heroku-original colored grow"></i>
                   <p className="tc">Heroku</p>
                </div>
                <div>
                    <i className="devicon-github-plain colored grow"></i>
                   <p className="tc">Github</p>
                </div>
                <div>
                    <i className="devicon-git-plain grow"></i>
                   <p className="tc">Git</p>
                </div>
                <div>
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 5px"}}></i>
                    <p className="tc ">NPM</p>
                </div>
              </div>
        </Animated>
		</div>
	)
}

export default Skill;