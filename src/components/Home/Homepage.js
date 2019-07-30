import React from 'react';
import './Homepage.css';


const Homepage = () =>{
	return(
    <div className="pb4" id="home">
  		<div className="dt vh-100 w-100">
            <div className=" dtc v-mid ">
               <div className="center mw8 pt3">
                  <p className="f1-ns f2 tc nudeC animated slideInLeft fw9 slow">Hi, my name is <span className="mid-gray">Xiu Wang</span>. </p>
                  <p className="nudeC pa1 f2-ns f3 tc ma2 animated slideInRight fw6 slow">I'm a Web Developer.</p>
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