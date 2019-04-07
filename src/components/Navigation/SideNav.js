import React from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact'
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav}) =>{
	return(
		<div>
			<div className="flex navbar"  id="style-1">
				<div className="bar pointer absolute dim" id="delBtn" onClick={handleSideNav}> 
	                 <i className="fas fa-bars ml4 mt3 f3 black-80 "></i>
	            </div>
            </div>

		   

            <div className={showHideNav? "side-nav scrollbar force-overflow" : "side-nav close"} id="style-1">
               	
            	<div className="pointer" onClick={handleSideNav}> 
            	<i className=" fas fa-backspace black-80 ml4 mt3 f3 dim"></i>
	            </div>

	            <ul className="flex flex-column list tc mt3 ma0 pa0" onClick={handleSideNav}>
					<li className="pa3 grow">
						<Link className={linkStyle} to="/">Home</Link>
					</li>
					<li className="pa3 grow">
						<Link className={linkStyle} to="project">Project</Link>
					</li>
					<li className="pa3 grow" >
						<Link className={linkStyle} to="Skill">Skill</Link>
					</li>
				</ul>

			<hr className="mw4 bb center bw1 b--white-50 mt3 mb3"/>
			 <Contact/>


				
            </div>
        
        	

        </div>    

	)

}

const linkStyle = "white link dim b"

export default SideNav;