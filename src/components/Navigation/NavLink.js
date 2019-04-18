import React from 'react';
import {Link} from 'react-router-dom';

const NavLink = () => {
	return(
		<ul className="flex flex-column list pl0">

			<li className="pa3 grow">
				<Link className={linkStyle} to="/">Home</Link>
			</li>
			<li className="pa3 grow">
				<Link className={linkStyle} to="project">Project</Link>
			</li>

			<li className="pa3 grow" >
				<Link className={linkStyle} to="Skill">Skill</Link>
			</li>
			<li className="pa3 grow" >
				<Link className={linkStyle} to="form">Contact</Link>
			</li>
		</ul>
	)
}
const linkStyle = "grow dim white no-underline b"
export default NavLink;