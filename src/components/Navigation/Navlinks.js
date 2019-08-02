import React from 'react';
import "./Nav.css"

const Navlinks = () => {
	return(
	  <div id="nav-link"className="center w-70">		
		<div className="flex flex-row center mw6">
			<a className={linkStyle}  href="#about">
				<i className="w-40 fas fa-id-card tc"></i> 
				{/*<span className="w-60 tc f5">About</span>*/}
			</a>
			<a className={linkStyle} href="#project">
				<i className="w-40 fas fa-laptop-code tc"></i> 
				{/*<span className=" w-60 tc f5">Project</span>*/}
			</a>
			<a className={linkStyle} href="#skill">	
				<i className="w-40 tc fas fa-pencil-ruler"></i>
				{/*<span className="w-60 tc f5">Skill</span>*/}
			</a>
			<a className={linkStyle} href="#contact">
				<i className="w-40 fas fa-envelope dib tc"></i> 
				{/*<span className="w-60 tc f5">Contact</span>*/}
			</a>
			{/*<a className={linkStyle} href="https://drive.google.com/open?id=17oGCNyYAs8kUt_qR5SVM0TBD5JYu5GKy" 
				target= "_blank" rel="noopener noreferrer">
			   <i className="w-50 tc fas fa-paper-plane dib"></i>
			   <span className="w-50 tl f5">Resume</span>
			</a>*/}
			</div>
		</div>		
	)
}
const linkStyle = "dim no-underline mid-gray flex flex-rows f4 fw6 center pt1 pb2"
export default Navlinks;