import React from 'react';

import "./Nav.css"

const Navlinks = () => {
	return(
		<div className="flex flex-column ml4 mr4 center w4">

			{/*<a className={linkStyle}  href="#home">
				<i className="w-50 tc fas fa-home dib"></i> 
				<span className="w-50 tl f5">Home</span>
			</a>*/}
			<a className={linkStyle} href="#project">
			
				<i className="w-50 tc fas gold fa-laptop-code dib"></i> 
				<span className=" w-50 tl f5">Project</span>
			</a>

			<a className={linkStyle} href="#skill">
				
				<i className="w-50 tc w1 gold fas fa-pencil-ruler dib"></i>
				<span className="w-50 tl f5">Skill</span>
			</a>
			
			<a className={linkStyle} href="#contact">
				<i className="w-50 tc gold fas fa-paper-plane dib"></i> 
				<span className="w-50 tl f5">Contact</span>
			</a>
			<a className={linkStyle} href="https://drive.google.com/open?id=1B01NjxgXIhTBO2OHqpe5bRMrQrJrJavX" target= "_blank" rel="noopener noreferrer">
			   <i className="w-50 tc fas gold fa-download dib"></i>
			   <span className="w-50 tl f5">Resume</span>
			</a>
		</div>	
	)
}
const linkStyle = "dim no-underline white-70 flex flex-rows dim f4 fw6 pt3 pb3"

export default Navlinks;