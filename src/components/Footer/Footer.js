import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () =>{
	return(
	<div id="footer"  className="bg-mid-gray pt4">
        <Fade bottom cascade>
           <div className="flex justify-center pt2 pb3">
          
            <a className="fw6 f2-ns f3 white no-underline pt3 pr3" href="mailto:sylvi.xw@gmail.com" >
		           <i className="fas fa-envelope-open"></i>
		  	   </a>	
            <a className=" fw6 f2-ns f3  white no-underline pt3 pl3 pr3" href="https://linkedin.com/in/xiu-wang" target= "_blank" rel="noopener noreferrer" >
             <i className="fab fa-linkedin-in"></i>
           </a>
           <a className="fw6 f2-ns f3 white  no-underline pt3 pl3"
              href="https://github.com/Xiuw" target= "_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            </a>  
           </div> 
           <hr className="mw6-l mw5"/> 
           <p className="f6-ns f7 db fw6 ttu tc nudeC pb5">© 2019 Developed by Xiu Wang.</p>
        </Fade>
	</div>
	)
}
export default Footer;