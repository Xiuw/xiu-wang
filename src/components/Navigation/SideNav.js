import React from 'react';
import Contact from './Contact'
import Navlinks from './Navlinks';
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav}) =>{
	return(
		<div>

			<div id="style-1">
				<div className="bar"  onClick={handleSideNav}> 
	                 <i className="fas fa-bars pa3 f3 white-80 pointer"></i>     
	            </div>
            </div>

            <div className={showHideNav? "side-nav scrollbar force-overflow" : "side-nav hide"} id="style-1">
               	
            	<div className="" onClick={handleSideNav}> 
            		<i className=" fas fa-backspace mid-gray pa3 f3 ml3 mt3 pointer"></i>
	            </div>
		            
				<div className="tc" onClick={handleSideNav}>
				  	<Navlinks/>	
				</div>
				<Contact/>
            </div>
       
        </div>    
	)

}

export default SideNav;