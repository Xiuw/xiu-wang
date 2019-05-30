import React from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import Navlinks from './Navlinks';
import './Nav.css';
import {Animated} from "react-animated-css";

const Navigation = () =>{
	return(
	<div className="scrollbar w-20-l vh-100 tc force-overflow nav fixed" id="style-1">
		<Animated animationIn="jello" isVisible={true} >
			<div className="ma3 ">
				<Link className="no-underline"to="/">
					<div className="pa3 ma2 ma4-ns grow gray bg-washed-yellow myName">
						<p className="f3 ma0 pa0">Xiu</p> 
						<p className="b f3 ma0 pa1">Wang</p>
					</div>
				</Link>		
			</div>
		</Animated>
		
		<hr className="mw3 mw4-l bb center bw1 b--white-50 "/>
		<Navlinks/>
		<hr className="mw3 mw4-l bb center bw1 b--white-50 "/>
		<Contact />	
	</div>
	)
}

export default Navigation;