import React from 'react';
import {projectList} from './projectList';
import {Animated} from "react-animated-css";
import'./Project.css';
const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ma4 mb4">
				<Animated animationIn="slideInUp" isVisible={true}>
				<div className="image">
				 <img className="projectImage" width="400px" height="300px" alt={i} src={projectList[i].image} />
				 <div className="flex flex-column overlay">
					<a className="link w-50 center f4 mid-gray pa2 mb3 hover_on_link fw6" href={projectList[i].website}>View Site</a>
					<a className="link mid-gray f4 pa2 hover_on_link w-50 center fw6" href={projectList[i].github}>Github</a>
				</div>

				</div>
			
					 <p className="f3 mid-gray fw6 pa2">{projectList[i].name}</p>	
				
			
				</Animated>
		    </div>
			
		)
	})
	return(
		<div>
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

export default Project;