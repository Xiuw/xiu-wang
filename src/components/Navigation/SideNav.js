import React from 'react';
import Navlinks from './Navlinks';
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav,showHideMenu}) =>{
	return(
		<div>
			<div>
				<div className="bar pa2  animated slideInRight slow"  onClick={handleSideNav}> 
	                 <div className="bar-line"></div>
					<div className="bar-line"> </div>
					<div className="bar-line"></div>     
	            </div>
            </div>

            <div className={showHideNav? "side-nav scrollbar force-overflow" : "side-nav hide"} id="style-1">
               	
            	{/*<div className="bar" onClick={handleSideNav}> 
            		<i className=" fas fa-times mid-gray f2 pa2 pointer"></i>
	            </div>*/}
		            
				<div className="tc" onClick={handleSideNav}>
				  	<Navlinks/>	
				</div>
            </div>
       
        </div>    
	)

}

export default SideNav;