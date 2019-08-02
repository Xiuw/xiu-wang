import React from 'react';
import {projectList} from './projectList';
import'./Project.css';
import Fade from 'react-reveal/Fade';


const Project = () => {
	const displayList = projectList.map((project,i)=>{
		return(
			<div key={i} className=" ml4 mr4 mb5 tc project-section"  >	
				<div className="flex flex-column container shadow-2">
					<img className="projectImage blurImage" alt={i} src={projectList[i].image} /> 
				   	<div className="project-info w-100">	   	  
				   	   <h1 className="nudeC f5 f3-ns f2-l fw6">{projectList[i].name}</h1>
				   	   	<p className="project-description gray fw6 f7 f5-m f5-l pl1 pr1 pt3 ml4 mr4">{projectList[i].description}</p>	
				   	  </div>
				   <div className="text flex flex-column w-25 mt2">
				   		<a className="linkBtn pointer fw6  pa2 pointer nudeC ba f7 f5-m f5-l dib  no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				  		href={projectList[i].website}>Website</a>
				   		<a className="linkBtn pointer fw6  pa2 pointer f7 f5-m f5-l nudeC ba dib mt3-ns mt2 no-underline" target= "_blank"
				   		rel="noopener noreferrer"  
				   		href={projectList[i].github}>Github</a>
				   </div>   
				</div>	
		    </div>	
		)
	})
	return(
		<div className="w-100 pb5 pt5 center" id="project">
			<Fade top cascade>
			<h1 className="center mid-gray tc pb3 f2 f1-ns ma0 fw9 " 
				>Projects</h1> 
			</Fade>	
			<div  className="flex justify-center flex-rows flex-wrap mt4 center mt5" style={{maxWidth:"1200px"}}>	
			<Fade bottom cascade delay={500}>
				{displayList}
			</Fade>		
			</div>
			 <Fade bottom>	
			 <div  className="tc">
	             <a href="https://github.com/Xiuw"
	             	target= "_blank"
	             	rel="noopener noreferrer" 
	              	 className="linkBtn fw6 ph4 pa3 pointer f5 dib ba nudeC no-underline">
	              	  
	              	<i className="fab fa-github"></i><span className="pl2">More on Github </span>
	              </a>
            </div>
            </Fade>
		</div>
	)
}
export default Project;	