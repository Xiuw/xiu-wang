import React from 'react';

const Footer = () =>{
	return(
	<div id="footer"  className="themeBg bg2 pt5">
            <div className="flex w-80 center pa3 measure flex flex-column">
            	<a href="tel:12407582632" className="white dim center no-underline fw6">
        			<i className="fas fa-phone"></i>
        			<span className="pl2 white">+1 (240) 758-2632</span>
        		</a>
               <a className=" tc center fw6 f5  white dim no-underline flex justify-center pt3" href="mailto:sylvi.xw@gmail.com">
		         <i className="fas fa-envelope-open"></i><span className="pl2">sylvi.xw@gmail.com</span>
		  	   </a>	 
           </div>  
           <p className="f5 db fw6 ttu tc mid-gray lh-solid  pb3 pt3 ma0">© 2019 Xiu Wang.</p>
	</div>
	)
}
export default Footer;