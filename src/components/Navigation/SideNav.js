import React from 'react';
import Contact from './Contact'
<<<<<<< HEAD
import Nav from './Nav';
=======
import NavLink from "./NavLink";
>>>>>>> 1d05b6c4e2a3c1baf8dbe9555ad63a7b1dae3e78
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

<<<<<<< HEAD
			<div className="tc" onClick={handleSideNav}>
			   <Nav/>	
			</div>
			<hr className="mw4 bb center bw1 b--white-50 mt3 mb3"/>
			<Contact/>
            </div>
       
=======
				<div onClick={handleSideNav} className="tc">
					<NavLink/>
				</div>

				<hr className="mw4 bb center bw1 b--white-50 mt3 mb3"/>
			 	
			 	<Contact/>
	
            </div>
>>>>>>> 1d05b6c4e2a3c1baf8dbe9555ad63a7b1dae3e78
        </div>    
	)

}

export default SideNav;