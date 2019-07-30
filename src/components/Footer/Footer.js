import React from 'react';

const Footer = () =>{
	return(
	<div id="footer"  className="bg-mid-gray pt4">
           <div className="flex justify-center pt2 pb3">
            <a className="fw6 f2-ns f3 white dim no-underline pt3 pr3" href="mailto:sylvi.xw@gmail.com">
		           <i className="fas fa-envelope-open"></i>
		  	   </a>	
            <a className=" fw6 f2-ns f3  white dim no-underline pt3 pl3 pr3" href="https://linkedin.com/in/xiu-wang">
             <i className="fab fa-linkedin-in"></i>
           </a>
           <a className="fw6 f2-ns f3  white dim no-underline pt3 pl3"
              href="https://github.com/Xiuw">
            <i className="fab fa-github"></i>
            </a>  
           </div> 
           <hr className="mw6-l mw5"/> 
           <p className="f6-ns f7 db fw6 ttu tc nudeC pb5">© 2019 Developed by Xiu Wang.</p>
	</div>
	)
}
export default Footer;