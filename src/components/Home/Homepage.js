import React from 'react';
import './Homepage.css';
import xiu from './xiu.jpg';

const Homepage = () =>{
	return(
    <div className="pb4" id="home">
  		<div className="dt vh-100 w-100">
            <div className=" dtc v-mid bg1 themeBg">
               <div className="center mw8 pa4">
                  <p className="f1-ns f2 tc white animated slideInDown fw6">Hi, I am <span className="mid-gray">Xiu</span>. I'm a Web Developer.</p>
                  <p className="white-80 pa1 f2-ns f3 tc ma2 animated slideInRight f3-ns f4 fw6"></p>
               </div>
                <div className="flex justify-center list pl0 animated slideInUp">
                  <a className="fw6 ph3 pa2 pointer f4 dib mid-gray link-effect hover-white"
                     href="#about">
                      <i className="fas fa-chevron-down"></i>
                  </a>  
                </div>  
              </div> 
          </div>
         <div id="about" className="pt5 ml4 mr4">
                <p className="tc f4 "></p>
                <div className="center mw6 tc shadowE br4-ns " >
                     <img className="br-100 tc mt4 ba b--washed-red bw2 grow" width="130px" height="150px"src={xiu}/> 
                <div className="center measure  pt3 pb3">
                  <p className="f5 fw6 gray pl3 pr3 tl lh-copy">My name is Xiu Wang. I'm a self-taught Web Developer.
                   I enjoy and love building web applications from front-end to back-end.  
                   I'm currently looking for an opportunity. Feel free to check out my projects.             
                   </p>
                </div>  
            </div>
            <div className="tc mt5">
                <a className="btnBtn linkBtn fw6 ph4 pa3 input-reset pointer ba f5 dib nudeC no-underline " 
                href="https://drive.google.com/open?id=1B01NjxgXIhTBO2OHqpe5bRMrQrJrJavX" target= "_blank" rel="noopener noreferrer">
                <i className="fas fa-download dib"></i><span className="pl2">Resume</span>
                </a>   
            </div>
          </div> 
    </div>
	 )
}
export default Homepage;