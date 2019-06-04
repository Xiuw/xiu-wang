import React from 'react';
import pdf from './Wang_2019.pdf';
import'./Nav.css';

const Contact = () => {
	return(
		<div className="w-100">
		    <hr className="bb center b--washed-yellow w4"/>
			<div className="flex flex-column ml4 mr4 center w4 mt2">

				<a className={linkStyle} href={pdf} target= "_blank" rel="noopener noreferrer">
	        		<i style={{color:"#936955"}}   className=" w-40 tc fas fa-download dib"></i>
					<span style={{color:"#936955"}} className="w-60 tl f5">Resume</span>
				</a>		
	            
	          	<a className={linkStyle} href="https://github.com/xiuw" target="_blank" rel="noopener noreferrer" title="GitHub">
		     		<i className="w-40 tc fab fa-github dib"></i>
		            <span className="w-60 tl f5 ">GitHub</span>
	           </a>


			   <a className={linkStyle} href="mailto:sylvi.xw@gmail.com">
		          <i className="w-40 tc fas fa-envelope-open dib"></i>	
		         <span className="w-60 tl f5">Gmail</span>
		       </a> 

	       		{/*<a className={linkStyle} href="https://www.linkedin.com/in/xiu-wang-4784a8114/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
	           		<i className="w-40 tc fab fa-linkedin dib"></i>
		            <span className="w-60 tl f5">LinkedIn</span>
	           	</a>*/}	
        	</div>
        </div>
	)
}
const linkStyle="dim no-underline mid-gray flex flex-rows pt3 pb3 b";
export default Contact;