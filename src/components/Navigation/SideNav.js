import React from 'react';
import Contact from './Contact'
import Nav from './Nav';
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav}) =>{
	return(
		<div>
			<div className={showHideNav? "hidebar" : "flex navbar"}  id="style-1">
				<div className="bar pointer absolute z-max sticky ml3 mt3" id="delBtn" onClick={handleSideNav}> 
	                 <i style={{background:"#ccac9d"}} className="fas fa-bars pa3 f3 white-80 hover-mid-gray br3"></i>
	            </div>
            </div>

            <div className={showHideNav? "side-nav scrollbar force-overflow" : "side-nav close"} id="style-1">
               	
            	<div className="pointer ml3 mt3" onClick={handleSideNav}> 
            	<i className=" fas fa-backspace mid-gray pa3 f3 dim"></i>
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