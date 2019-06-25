import React from 'react';
import './Footer.css';

const Footer = () =>{
	return(
	<div id="skill"  className="footerBg">
		
            <div className="flex w-80 center pt5 measure">
               <a className=" tc center fw5 f5 dim no-underline flex justify-center pt3 pb3" href="mailto:sylvi.xw@gmail.com">
		         <i className="fas fa-envelope-open dib greenC"></i><span className="pl2 black-70">Gmail</span>
		       </a> 

		       <a className="tc center fw5 f5 dim no-underline flex justify-center pt3 pb3" href="https://github.com/xiuw" target="_blank" rel="noopener noreferrer" title="GitHub">
		     		<i className="fab fa-github dib pr2 greenC"><span className="pl2 black-70">GitHub</span></i>
	           </a>

	           <a className="tc center fw5 f5 dim no-underline  flex justify-center pt3 pb3" 
	           	  href="https://drive.google.com/open?id=1Qe9GR1SgcjAPtAiTOqvc5lFSu__KSGB1" target= "_blank" rel="noopener noreferrer">
					 <i className="fas fa-download dib greenC"></i><span className="pl2 black-70">Resume</span>
				</a>

	        </div>
            <p className="f5 db fw6 ttu tc black-70 lh-solid  pb3 pt3 ma0">© 2019 Xiu Wang.</p>
              
	</div>
	)
}

export default Footer;