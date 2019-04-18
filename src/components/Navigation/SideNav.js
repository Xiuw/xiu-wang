import React from 'react';
import Contact from './Contact'
import Nav from './Nav';
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


			<div className="tc" onClick={handleSideNav}>
			   <Nav/>	
			</div>
			<hr className="mw4 bb center bw1 b--white-50 mt3 mb3"/>
			<Contact/>
            </div>
       
        </div>    
	)

}

export default SideNav;