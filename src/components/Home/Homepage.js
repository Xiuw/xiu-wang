import React from 'react';
import './Homepage.css';
import xiu from './xiu.jpg';

const Homepage = () =>{
	return(
    <div className="pb4" id="home">
  		<div className="dt vh-100 w-100">
            <div className=" dtc v-mid bg1 themeBg">
               <div className="center mw8 pt3">
                  <p className="f1-ns f2 tc white animated slideInDown fw6">Hi, I am <span className="mid-gray">Xiu</span>. I'm a Web Developer.</p>
                  <p className="white-80 pa1 f2-ns f3 tc ma2 animated slideInRight f3-ns f4 fw6"></p>
               </div>
                <div className="flex justify-center list pl0 animated slideInUp">
                  <a className="fw6 ph3 pa4 pointer f4 dib mid-gray link-effect hover-white"
                     href="#about">
                      <i className="fas fa-chevron-down"></i>
                  </a>  
                </div>  
              </div> 
          </div>

         <div id="about" className="pt5 ml4 mr4">
                <h1 className="center mid-gray fw6 tc pb3 f3 pl4 pr4 ma0">About Me</h1>
                <p className="tc f4"></p>
               <div className="center tc br4 measure-wide pa3 shadowE" >
                    <p className="f5 fw5 gray pl2 pr2 tl lh-copy"> 
                    <div className="fl pa3">
                    <img alt="xiu" className="center br-100 ba b--washed-red bw2 grow" width="130px" height="150px"src={xiu}/>
                    </div>
                    My name is Xiu Wang. I'm a self-taught web developer in Maryland.  
                    I'm passionate about building web applications from the front-end to the back-end. 
                    I'm excited about learning new technologies and implement them in my projects.
                    </p>
                    <p className="f5 fw5 gray pl4 pr3 tl lh-copy">
                   My passion for web development is inspired by one of the stories on Medium. 
                   The story had deeply motivated me and resonated with my own. 
                   That's how my coding journey started, and I enjoy it since then.
                    </p>
                    </div>
                  <div className="tc mt5 ">
                    <a className="btnBtn linkBtn fw6 ph4 pa3 input-reset pointer ba f5 dib nudeC no-underline " 
                    href="https://drive.google.com/open?id=17oGCNyYAs8kUt_qR5SVM0TBD5JYu5GKy" target= "_blank" rel="noopener noreferrer">
                    <i className="fas fa-download dib"></i><span className="pl2">Resume</span>
                    </a>   
                </div>
          </div> 
    </div>
	 )
}
export default Homepage;