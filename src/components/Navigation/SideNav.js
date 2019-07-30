import React from 'react';
import Navlinks from './Navlinks';
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav,showHideMenu}) =>{
	return(
		<div>
			<div>
				<a className="" href="/">
		          <p className="myInit pointer f2 pa2 nudeC ma0 animated slideInLeft slow">XW</p>
		          <p className="grow myInitial f2 pointer mid-gray pa2 ma0 animated slideInLeft slow">XW</p>    
        		</a>
				<div className="bar pa2 animated slideInRight slow"  onClick={handleSideNav}> 
	                 <div className="bar-line"></div>
					<div className="bar-line"> </div>
					<div className="bar-line"></div>     
	            </div>
            </div>
            <div className={showHideNav? "side-nav shadowE" : "side-nav hide"}>       	
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