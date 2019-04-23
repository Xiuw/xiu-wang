import React from 'react';
import Contact from './Contact'
import Navlinks from './Navlinks';
import './Nav.css';
import {Animated} from "react-animated-css";

const SideNav = ({handleSideNav, showHideNav}) =>{
	return(
		<div>
			<Animated animationIn="jello" isVisible={true} >
				<div className={showHideNav? "hidebar" : "flex navbar"}  id="style-1">
					<div className="bar pointer fixed z-max ml3 mt3 absolute" id="delBtn" onClick={handleSideNav}> 
		                 <i style={{background:"#ccac9d",borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}} 
		                 	className="fas fa-bars pa3 f3 white-80 hover-mid-gray"></i>     
		            </div>

	            </div>
	        </Animated>    
            <div className={showHideNav? "side-nav scrollbar force-overflow" : "side-nav close"} id="style-1">
               	
            	<div className="pointer ml3 mt3" onClick={handleSideNav}> 
            	<i className=" fas fa-backspace mid-gray pa3 f3 dim"></i>
	            </div>
		            
				<div className="tc" onClick={handleSideNav}>
				  	<Navlinks/>	
				</div>
				<hr className="mw4 bb center bw1 b--white-50 mt3 mb3"/>
				<Contact/>
            </div>
       
        </div>    
	)

}

export default SideNav;