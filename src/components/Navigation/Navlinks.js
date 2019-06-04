import React from 'react';
import "./Nav.css"

const Navlinks = () => {
	return(
		<div className="flex flex-column ml4 mr4 center w4">

			<a className={linkStyle}  href="#home">
				<i className="w-40 tc fas fa-home dib"></i> 
				<span className="w-60 tl f5">Home</span>
			</a>

			<a className={linkStyle} href="#project">

				<i className="w-40 tc fas fa-laptop-code dib"></i> 
				<span className=" w-60 tl f5">Project</span>
			</a>
			<a className={linkStyle} href="#skill">
				
				<i className="w-40 tc w1 tl fas fa-pencil-ruler dib"></i>
				<span className="w-60 tl f5">Skill</span>
			</a>
			<a className={linkStyle} href="#contact">
				<i className="w-40 tc fas fa-paper-plane dib"></i> 
				<span className="w-60 tl f5">Contact</span>
			</a>
		</div>
		
	)
}
const linkStyle = "dim no-underline washed-yellow flex flex-rows b pt3 pb3"

export default Navlinks;