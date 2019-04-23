import React from 'react';
import {projectList} from './projectList';
import {Animated} from "react-animated-css";

import'./Project.css';
const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ml4 mr4 mb5 ">
				<Animated animationIn="slideInUp" isVisible={true}>
					<p className="f3 mid-gray fw6 ">{projectList[i].name}</p>
					<div className="image">
					 <img className="projectImage" width="400px" height="300px" alt={i} src={projectList[i].image} />
					 <div className="flex flex-column overlay">
						<a className={project_link} href={projectList[i].website}>View Site</a>
						<a className={project_link} href={projectList[i].github}>Github</a>
					</div>
					</div>
				</Animated>
		    </div>
			
		)
	})
	return(
		<div className="100-vh">
			<Animated animationIn="jello" isVisible={true} >
				<h1 className="w-30-l w-50 black-80 center tc ma4 pa2 f2 f1-ns fw5 title_and_link" style={{color:"#ccac9d"}}>Projects</h1>
			</Animated>
			<div className="flex justify-center flex-rows flex-wrap">
				{displayList}
			</div>
			 <div className="tc ma4 mb5">
              <a href="https:github.com/xiuw">
              	<p style={{background:"#ccac9d"}} 
              	   className="fw5 grow ph4 pa2 input-reset pointer f4 dib mid-gray hover-white-80 title_and_link"
              	>More on Github
              	</p>
              </a>	
            </div>
		</div>
	)
}
const project_link = "link mid-gray f4 pa2 center hover_on_link w-40  fw5  mb2";
export default Project;