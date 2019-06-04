import React from 'react';
import {projectList} from './projectList';


import'./Project.css';
const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
		
			<div key={i} className="tc ml4 mr4 mb5 ">
			
					<p className="f3 mid-gray fw6 ">{projectList[i].name}</p>
					<div className="projectContainer grow">
					 <img className="projectImage" width="400px" height="300px" alt={i} src={projectList[i].image} />
					 <div className="flex flex-column overlay">
					 	<div className="plink flex flex-column">
						<a className="mb2 link mid-gray f4 pa2 w4 center title_and_link hover-white-80 hover_on_link" 
						   href={projectList[i].website}>View Site</a>
						<a className="link mid-gray f4 pa2 center w4 title_and_link hover-white-80 hover_on_link" 
						   href={projectList[i].github}>Github</a>
						</div>
					</div>
					</div>

		    </div>
			
		)
	})
	return(
		<div className="w-100" id="project">

				<h1 className="mw5-l w-40 black-80 center tc ma4 pa2 f2 f1-ns fw5 bb shadowE " style={{color:"#ccac9d"}}>Projects</h1>

			<div className="flex justify-center flex-rows flex-wrap mt4">
				{displayList}
			</div>
			 <div className="tc mb6">
              <a href="https://github.com/Xiuw"
                 style={{background:"#ccac9d"}}  
              	 className=" link fw5 ph4 pa2 input-reset pointer f4 dib mid-gray hover-white-80 title_and_link">
              
              	  
              	More on Github
             
              </a>	
            </div>
		</div>
	)
}
export default Project;