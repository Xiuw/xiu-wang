import React from 'react';
import {projectList} from './projectList';
import'./Project.css';

const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
			<div key={i} className=" ml4 mr4 mb5 tc " >	
				<div className="flex flex-column container shadowE">
					<img className="projectImage blurImage" 
				   		 width="400px" height="300px" 
				   		 alt={i} src={projectList[i].image} />
				   	<div className="project-info w-100" 
				   	  >
				   	   <h1 className="nudeC f3-ns f4 f3-m f3-l fw6">{projectList[i].name}</h1>
				   	   	<p className="project-description gray fw6 f6 f5-m f5-l pl1 pr1 pt2">{projectList[i].description}</p>	
				   	  </div>
				   <div className="text flex flex-column w-30 ma0">
				   		<a className="linkBtn  pointer fw6 pa2  pointer nudeC ba f6 f5-m f5-l dib mt3 no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				  		href={projectList[i].website}>Website</a>
				   		<a className="linkBtn  pointer fw6 pa2  pointer f6  f5-m f5-l nudeC ba dib mt3 no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				   		href={projectList[i].github}>Github</a>
				   </div>
				</div>	
		    </div>	
		)
	})
	return(
		<div className="w-100 pb4" id="project">
			<h1 className="center w-100 mid-gray fw6 tc pt5 f3 pl4 pr4 ma0" 
				>My projects</h1> 
				<p className="tc pl4 pr4 f5 gray pt3 fw6">Some projects are using Heroku's free dynos, it may take sometime to load.</p> 
			<div  className="flex justify-center flex-rows flex-wrap mt4 mw8 center mt5">
				{displayList}
			</div>
			 <div  className="tc">
	             <a href="https://github.com/Xiuw"
	             	target= "_blank"
	             	rel="noopener noreferrer" 
	              	 className="linkBtn fw6 ph4 pa3 pointer f5 dib ba nudeC no-underline">	  
	              	<i class="fab fa-github"></i><span className="pl2">More on Github </span>
	              </a>
            </div>
		</div>
	)
}
export default Project;