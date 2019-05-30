import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css"

const Navlinks = () => {
	return(
		<div className="flex flex-column ml4 mr4">

			<Link className={linkStyle} to="/">Home</Link>
			<Link className={linkStyle} to="project">Project</Link>
			<Link className={linkStyle} to="skill">Skill</Link>
			<Link className={linkStyle} to="contact">Contact</Link>	
				
		</div>
		
	)
}
const linkStyle = "grow dim washed-yellow no-underline b f5 pa2 ma2"

export default Navlinks;