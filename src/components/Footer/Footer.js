import React from 'react';

const Footer = () =>{
	return(
	<div id="footer"  className="bg-navy">
			 <div className="flex w-80 center pt4 measure">

        		<a href="tel:12407582632" className="gold center no-underline fw6">
        		<i className="fas fa-phone"></i>
        		<span className="pl2 white-70">+1 (240) 758-2632</span></a>
      		</div>
		
            <div className="flex w-80 center pt3 measure">
               <a className=" tc center fw6 f5 dim no-underline flex justify-center pt3 pb3" href="mailto:sylvi.xw@gmail.com">
		         <i className="fas fa-envelope-open dib gold"></i><span className="pl2 white-70">Gmail</span>
		  	   </a>	

		       <a className="tc center fw6 f5 dim no-underline flex justify-center pt3 pb3" href="https://github.com/xiuw" target="_blank" rel="noopener noreferrer" title="GitHub">
		     		<i className="fab fa-github dib pr2 gold"></i><span className="pl2 white-70">GitHub</span>
	           </a>

	           <a className="tc center fw6 f5 dim no-underline  flex justify-center pt3 pb3" 
	           	  href="https://drive.google.com/open?id=1B01NjxgXIhTBO2OHqpe5bRMrQrJrJavX" target= "_blank" rel="noopener noreferrer">
					 <i className="fas fa-download dib gold"></i><span className="pl2 white-70">Resume</span>
				</a>
           </div>  
           <p className="f5 db fw6 ttu tc gold lh-solid  pb3 pt3 ma0">© 2019 Xiu Wang.</p>
	</div>
	)
}
export default Footer;