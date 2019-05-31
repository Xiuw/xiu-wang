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
			<div className="ma3 mw5 center">
				<Link className="no-underline"to="/">
					<div className=" ma4 pa3 grow gray bg-washed-yellow br4">
						<p className="f3 ma1">Xiu</p>
						<p className="b f3 ma1">Wang</p>  		
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