import React from 'react';
import {projectList} from './projectList';
import {Animated} from "react-animated-css";
import'./Project.css';
const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ma3 mb4 project">
				<Animated animationIn="slideInUp" isVisible={true}>
				<div className=" overflow-hidden">
			
				 <img className="projectImage  shadow-5 grow" width="400px" height="300px" alt={i} src={projectList[i].image} />
				
				</div>
				<div className="overlay ">
				<p className=" b f3">{projectList[i].name}</p>
				<div className="flex-column flex">
				<a className="link gray dim f4 b mt4 mb4" href={projectList[i].website}>View Site</a>
				<a className="link gray dim f4 b" href={projectList[i].github}>Github</a>
				</div>
				</div>
				</Animated>
		    </div>
			
		)
	})
	return(
		<div>
			<h1 className="w-30 black-80 center tc ma4 pa2 f2 f1-ns" style={{color:"#ccac9d"}}>Project</h1>
			<div className="flex justify-center flex-rows flex-wrap">
				
				{displayList}
				
			</div>
			 <div className="tc ma4 mb5">
              <a href="https:github.com/xiuw">
              	<p style={{background:"#ccac9d"}} 
              	   className="b grow ph4 pv3 input-reset pointer f5 dib mid-gray hover-white"
              	>More on Github
              	</p>
              </a>	
            </div>
		</div>
	)
}

export default Project;