import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css"

const Navlinks = () => {
	return(
		<div className="flex flex-column ml4 mr4">

			<Link className={linkStyle} activeClassName='is-active' to="/">
				<i className="fas fa-home dib w1 h1"></i> 
				<span className="f5 mt1">Home</span>
			</Link>
			<Link className={linkStyle} to="project">
				<i className="fas fa-laptop-code dib w1 h1"></i> 
				<span className="f5 mt1">Project</span>
			</Link>
			<Link className={linkStyle} to="skill">
				<i className="fas fa-pencil-ruler dib w1 h1"></i> 
				<span className="f5 mt1">Skill</span>
			</Link>
			<Link className={linkStyle} to="contact">
				<i className="fas fa-paper-plane dib w1 h1"></i> 
				<span className="f5 mt1">Contact</span>
			</Link>
		</div>
		
	)
}
const linkStyle = "grow dim no-underline washed-yellow flex flex-column items-center ma2 b pa2"

export default Navlinks;