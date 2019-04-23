import React from 'react';
import {Animated} from "react-animated-css";

const Skill = () => {
	return(
		<div className="vh-100">
    <Animated animationIn="jello" isVisible={true} >
        <h1 className=" w-30-l w-50 black-80 center tc ma4 pa2 f2 f1-ns title_and_link fw5" style={{color:"#ccac9d"}}>Skills</h1>
    </Animated> 
         <Animated animationIn="slideInUp" isVisible={true}>

		 <p className="black-80 tc ma2 f6 f6-m f4-ns pl3 pr3 mt2">
             *Following are the programming languages, 
              frameworks and tools I've used in my projects.
             </p>

              <div className="flex justify-center flex-wrap ma5 icon mid-gray tc b">
                <div className="grow">
                     <i className="devicon-html5-plain colored"></i> 
                     <p>HTML5</p>
                </div>
                    <div className="grow">
                     <i className="devicon-css3-plain colored grow"></i>
                    <p>CSS3</p>
                </div>
                <div className="grow">
                    <i className="devicon-bootstrap-plain colored grow"></i> 
                   <p>Bootstrap</p>
                </div>
                <div className="grow">
                   <i className="devicon-react-original colored grow"></i> 
                   <p>React</p>
                </div> 

                <div className="grow">      
                    <i className="devicon-javascript-plain colored grow" ></i>
                   <p>Javascript</p>
                </div>
                <div className="grow">
                    <i className="devicon-postgresql-plain colored grow"></i>
                   <p>Postgresql</p>
                </div>
                <div className="grow">
                    <i className="devicon-nodejs-plain colored grow"></i>
                   <p>Node.js</p>
                </div>
                <div className="grow">
                   <i className="devicon-express-original colored grow"></i>
                   <p>Express.js</p>
                </div>
                <div className="grow">
                    <i className="devicon-heroku-original colored grow"></i>
                   <p>Heroku</p>
                </div>
                <div className="grow">
                    <i className="devicon-github-plain colored grow"></i>
                   <p>Github</p>
                </div>
                <div className="grow">
                    <i className="devicon-git-plain black grow"></i>
                   <p>Git</p>
                </div>
                <div className="grow">
                    <i className="fab fa-npm dark-red" style={{marginTop:"0px", marginBottom:"0px", padding:"0px 5px", fontWeight:"normal"}}></i>
                    <p>NPM</p>
                </div>
              </div>
        </Animated>
		</div>
	)
}

export default Skill;