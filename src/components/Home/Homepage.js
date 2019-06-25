import React from 'react';
import './Homepage.css';


const Homepage = () =>{
	return(
    <div className="frontBg" id="home">
      
		<article className="dt vh-100 w-100 tc " >
          <div className=" dtc v-mid ph4-l">
             <div className="">
             <div className="measure-wide center">
             <p className="pa3 f2 tc ma2 greenC animated slideInDown">I'm</p>  
                <h1 className=" pa2 ma0 name-style tc f-subheadline-l animated slideInLeft slow black-70"> Xiu <span className="greenC">Wang,</span></h1>
                
                <p className=" black-70 pa3 f2-ns tc ma2 animated slideInRight f3">a web developer.</p>
             </div>
            
             <div className="center w4 bt pa2 greenC bw1 animated slideInLeft"></div>
                <p className="lh-copy fw5 f5 ma3 greenC mt4 animated slideInRight slow mt3">
                  Responsive web design
                  <i className="fas fa-star f6 pl2 pr2 yellowC animated infinite tada delay-2s"></i> 
                  Front-end development 
                  <i className="fas fa-star f6 pl2 pr2 yellowC animated infinite tada delay-2s"></i> 
                  Back-end development
                </p>
                
              <div className="flex justify-center list pl0 mt5 animated slideInUp">
                <a className="fw5 ph3 pa2 pointer f4 dib black-80 link-effect"
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