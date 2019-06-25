import React from 'react';
import {projectList} from './projectList';
import'./Project.css';

const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
			<div key={i} className=" ml4 mr4 mb5 tc" >	
				<div className="flex flex-column container bgc  ">
					<img className="projectImage blurImage" 
				   		 width="400px" height="300px" 
				   		 alt={i} src={projectList[i].image} />
				   
				   	<p className="project-title black-70 pa2 w-60 f3 fw5" 
				   	  >{projectList[i].name}</p>

				   <div className="text flex flex-column w-30 ma0">
				   		<a className="linkBtn  pointer fw5  pa2 input-reset pointer black-70 f5 ba dib mt3 no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				  		href={projectList[i].website}>Visit site</a>
				   		<a className="linkBtn  pointer fw5  pa2 input-reset pointer black-70 ba f5 dib  mt3 no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				   		href={projectList[i].github}>Github</a>
				   </div>
				</div>
						
			
		    </div>	
		)
	})
	return(
		<div className="w-100 pb5 " id="project">
			<h1 className="w-100 w7 w5-ns center tc pa3 mt0 fw4 header-title" 
				>Projects</h1>  
			<div  className="flex justify-center flex-rows flex-wrap mt4 mw8 center mt5">
				{displayList}
			</div>
			 <div  className="tc ma3">
	             <a href="https://github.com/Xiuw"
	             	target= "_blank"
	             	rel="noopener noreferrer" 
	              	 className="linkBtn fw5 ph4 pa3 input-reset pointer f5 dib black-80 ba no-underline">	  
	              	More on Github 
	              </a>
            </div>
		</div>
	)
}
export default Project;