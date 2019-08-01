import React from 'react';
import Navlinks from './Navlinks';
import './Nav.css';

const SideNav = ({handleSideNav, showHideNav}) =>{
	return(
		<div>
			<div>
				<a className="" href="/">
		          <p className="myInit pointer pa2  white ma0 animated slideInLeft slow">XW</p>
		          <p className="myInitial pointer mid-gray pa2 ma0 animated slideInLeft slow">XW</p>    
        		</a>
				<div className="bar pa2 animated slideInRight slow"  onClick={handleSideNav}> 
	                <div className={showHideNav? "bar1 change1":"bar1"}></div>
					<div className={showHideNav? "bar2 change2":"bar2"}> </div>
					<div className={showHideNav? "bar3 change3":"bar3"}></div>     
	            </div>
            </div>
            <div className={showHideNav? "side-nav shadowE center" : "side-nav hide"}>       	
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