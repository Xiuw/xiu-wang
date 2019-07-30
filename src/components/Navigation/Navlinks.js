import React from 'react';

import "./Nav.css"

const Navlinks = () => {
	return(
		<div className="flex flex-column ml4 mr4 center w4">
			<a className={linkStyle}  href="#about">
				<i className="w-50 tc fas fa-id-card dib"></i> 
				<span className="w-50 tl f5">About</span>
			</a>
			<a className={linkStyle} href="#project">
				<i className="w-50 tc fas fa-laptop-code dib"></i> 
				<span className=" w-50 tl f5">Project</span>
			</a>
			{/*<a className={linkStyle} href="#skill">	
				<i className="w-50 tc w1 fas fa-pencil-ruler dib"></i>
				<span className="w-50 tl f5">Skill</span>
			</a>*/}
			<a className={linkStyle} href="#contact">
				<i className="w-50 tc fas fa-envelope dib"></i> 
				<span className="w-50 tl f5">Contact</span>
			</a>
			{/*<a className={linkStyle} href="https://drive.google.com/open?id=17oGCNyYAs8kUt_qR5SVM0TBD5JYu5GKy" 
				target= "_blank" rel="noopener noreferrer">
			   <i className="w-50 tc fas fa-paper-plane dib"></i>
			   <span className="w-50 tl f5">Resume</span>
			</a>*/}
			</div>	
	)
}
const linkStyle = "dim no-underline nudeC flex flex-rows dim f4 fw6 pt3 pb3"
export default Navlinks;