import React from 'react';
import xiu from './xiu.jpg';
import './Homepage.css';

const Homepage = () =>{
	return(
    <div id="home">
		<article className="dt vh-100 w-100 black-80 tc" >
          <div className=" dtc v-mid ph4-l">
             <div className="show">
                <p className=" pa2 ma0 name-style tc f-subheadline-l" style={{color:"#ccac9d"}}> Xiu <span className="gray">Wang</span></p>
              
                <img src={xiu} className="grow dib center br-100 h4 w3.5" alt="me"/> 
            
                <p className="b pa3 f3 tc ma2" style={{color:"#ccac9d"}}>Web Developer</p>
                <hr className="dottedBorder w-50 mw5-ns"></hr>
                <p className="lh-copy fw5 f4 i ma3 " style={{color:"#ccac9d"}}>
                  Responsive web design 
                  <span className="fs-normal mid-gray fw6"> | </span>
                  Front-end application <span className="fs-normal fw6 mid-gray"> | </span> 
                  Back-end application
                </p>
                
              <div className="flex justify-center list pl0 mt5 link-effect">
                <a className="ba pa1 link ph4 title_and_link mid-gray f4"  href="#project"><i className="fas fa-arrow-down"></i></a>  
              </div>
            </div>       
          </div>
    </article>
    <hr className=" w-90 bb center b--black-40 "/>
    </div>
	 )
}
export default Homepage;