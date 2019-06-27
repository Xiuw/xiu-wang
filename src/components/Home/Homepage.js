import React from 'react';
import './Homepage.css';


const Homepage = () =>{
	return(
    <div className="" id="home">
        <a className="" href="/">
          <p className="myInit pointer f2 pa2 white-80 ma0 animated slideInLeft slow">XW </p>
          <p className="grow myInitial f2 pointer pa2 gold ma0 animated slideInLeft slow">XW</p>    
        </a>
		<article className="dt vh-100 w-100 tc bg-navy bgPolygon" >
          <div className=" dtc v-mid ph4-l ">
             <div className="">
             <div className="center">
                <p className="pa3 f3-ns f4 tc ma2 white-80 animated slideInDown fw6">I'm</p>  
                <h1 className=" pa2 ma0 tc animated slideInLeft slow gold f1-ns f2">Xiu Wang.</h1>
                <p className="white-80 pa3 f2-ns tc ma2 animated slideInRight f3-ns f4 fw6">I'm a self-taught web developer.</p>
             </div>
            
 
             <p className="lh-copy fw6 f5 ma3 white-80 mt4 animated slideInLeft slow mt3">
                Responsive Design
                <i className="fas fa-star f6 pl2 pr2 gold animated infinite tada delay-2s"></i> 
                Front-end development
                <i className="fas fa-star f6 pl2 pr2 gold animated infinite tada delay-2s"></i> 
                Back-end development
             </p>
                
              <div className="flex justify-center list pl0 mt6 animated slideInUp">
                <a className="fw6 ph3 pa2 pointer f4 dib gold link-effect"
                   href="#project">
                    <i className="fas fa-chevron-down"></i>
                </a>  
              </div>
            </div>       
          </div>  
    </article>
    </div>
	 )
}
export default Homepage;