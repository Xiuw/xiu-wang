import React from 'react';
import {Link} from 'react-router-dom';
import Contact from './Contact';
import Nav from './Nav';


import './Nav.css';
import {Animated} from "react-animated-css";

const Navigation = () =>{
	return(
	<div className="scrollbar w-20-l vh-100 tc force-overflow nav" id="style-1">
			<Animated animationIn="jello" isVisible={true} >
			<div className="pa2 title_and_link ma4-l ma2 mt3 mb1 bg-washed-yellow">
				<Link className="no-underline"to="/">
				<h2 className="f3 black-80 f5-m " style={{color:"#ccac9d"}}>Xiu Wang</h2>
				</Link>		
			</div>
			</Animated>
			<h2 className="f5 mid-gray f6-m mb4">Web Developer</h2>

			<hr className="mw3 mw4-l bb center bw1 b--white-50 "/>

		
		<Nav/>
		<hr className="mw3 mw4-l bb center bw1 b--white-50 "/>
		
		<Contact />
		
	</div>
	)
}


export default Navigation;