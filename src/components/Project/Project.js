import React from 'react';
import {projectList} from './projectList';


import'./Project.css';
const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ml4 mr4 mb5">
			
					<p className="f3 mid-gray fw6 ">{projectList[i].name}</p>
					<div className="flex flex-column mb3 container">
					<a className="dib link mid-gray center" 
					   href={projectList[i].website}>
					   <img className="projectImage blurImage" width="400px" height="300px" alt={i} src={projectList[i].image} />
					   <p className="text ph4 pa2 fw5 mid-gray br3 ba">View Site</p>
					</a>
					</div>

					<a className="link fw5 ph4 pa2 input-reset pointer f5 dib mid-gray ba br3 hover-effect"
					   style={{borderColor:"#ccac9d"}}  
					   href={projectList[i].github}>Github</a>

		    </div>
			
		)
	})
	return(
		<div className="w-100" id="project">
				<h1 className="mw5-l w-40 black-80 center tc ma4 pa2 f2 f1-ns fw5 bb shadowE" style={{color:"#ccac9d"}}>Projects</h1>
			<div className="flex justify-center flex-rows flex-wrap mt4">
				{displayList}
			</div>
			 <div className="tc mb5">
             <a href="https://github.com/Xiuw"
                 style={{background:"#ccac9d"}}  
              	 className="fw5 link ph4 pa2 input-reset pointer f4 dib mid-gray hover-white-80 br3">	  
              	More on Github 
              </a>	
            </div>
            <hr className=" w-90 bb center b--black-40"/>
		</div>
	)
}
export default Project;