import React from 'react';
import './Homepage.css';


const Homepage = () =>{
	return(
    <div className="pb4" id="home">
        <a className="" href="/">
              <p className="myInit pointer pa2  white ma0 animated slideInLeft slow">XW</p>
              <p className="myInitial pointer mid-gray pa2 ma0 animated slideInLeft slow">XW</p>    
        </a>
  		<div className="dt vh-100 w-100">
            <div className=" dtc v-mid ">
               <div className="center mw8 pt3">
                  <p className="f1 tc mid-gray animated slideInLeft fw9 slow pl2 pr2">Hi, My name is <span className="nudeC">Xiu Wang</span>.</p>
                  <p className="mid-gray pa1 f2 tc ma2 animated slideInRight fw6 slow">I'm a Web Developer.</p>
               </div>
                <div className="flex justify-center list pl0 animated slideInUp">
                  <a className="fw6 ph3 pa4 pointer f4 dib mid-gray link-effect hover-white"
                     href="#about">
                      <i className="fas fa-chevron-down"></i>
                  </a> 
                   
                </div>  
              </div> 
          </div>

      
    </div>
	 )
}
export default Homepage;