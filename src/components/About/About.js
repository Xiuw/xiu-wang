import React from 'react';
import xiu from './xiu.jpg';
import {Animated} from "react-animated-css";
// import Resume from '../Resume/Resume';
import './About.css';
const About = () => {
	return(
		

		<article className="vh-100 dt w-100 black-80 " >
          <div className="dtc v-mid tc ph3 ph4-l">
             <Animated animationIn="slideInUp" isVisible={true}>
              
              <h1 className="f1 f-subheadline-l fw6 tc grow sayHello" style={{color:"#ccac9d"}} >Hello</h1>
              <img src={xiu} className="br-100 h4 w3.5 dib center grow pic" alt="xiu"/>
              <hr className="mw3 bb center bw1 b--black-10 ma3"/>
              <p className="lh-copy measure-narrow center tc mid-gray pa3 b f5">My name is <span className="b" style={{color:"#ccac9d"}}> Xiu Wang, </span> 
              a self-taught web developer. I enjoy building both front-end and back-end application.
              </p>
              </Animated>
          </div>

       </article>

	)
}

export default About;