import React from 'react';
import {projectList} from './projectList';
import {Animated} from "react-animated-css";

const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ma3 mb4">
				<Animated animationIn="slideInUp" isVisible={true}>
				<div className="ma2 overflow-hidden">
				<a class="mid-gray link dim" href={projectList[i].website}>
				 <img class="projectImage  shadow-5 grow" width="400px" height="300px" alt={i} src={projectList[i].image} />
				 <p class="mt4 mb0 dim b f4">{projectList[i].name}</p>
				</a>
				</div>
				<div className="ma0">
				<a className="link gray dim f5 b" href={projectList[i].github}>Github</a>
				</div>
				</Animated>
		    </div>
			
		)
	})
	return(
		<div>
			<h1 className="w-30 black-80 center tc ma4 pa2 f3 f2-ns" style={{color:"#ccac9d"}}>Project</h1>
			<div className="flex justify-center flex-rows flex-wrap">
				
				{displayList}
				
			</div>
		</div>
	)
}

export default Project;