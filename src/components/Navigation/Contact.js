import React from 'react';
import pdf from './Wang_2019.pdf';
import'./Nav.css';

const Contact = () => {
	return(
		<div>
		
		{/*<hr className="mw3 mw4-l bb center bw1 b--white-50  "/>*/}
		<ul className="flex flex-column list pl0 justify-center ml4 mr4 ">
    
	        <li><a className={linkStyle} href="mailto:Sylvi.xw@gmail.com">
	              <i className="fas fa-envelope-open dib w1 h1"></i>	
	              <span className="f5 mt1">Gmail</span>
	        </a> </li>
            
          	<li><a className={linkStyle} href="https://github.com/xiuw" title="GitHub">
	     		<i className="fab fa-github dib w1 h1"></i>
	            <span className="f5 mt1">GitHub</span>
           	</a></li>

           {/*<li><a className={linkStyle} href="https://www.linkedin.com/in/xiu-wang-4784a8114/" title="LinkedIn">
           		<i className="fab fa-linkedin dib w1 h1"></i>
	            <span className="f5 mt1">LinkedIn</span>
           </a></li>
      		*/}		
        </ul>

        <a className="grow dim no-underline b flex flex-column items-center ma4" href={pdf} target= "_blank" rel="noopener noreferrer">
				<p className="dim pa2 ma1 f5 mid-gray">Resume</p>
				<i className="fas fa-download dim mid-gray"></i>
		</a>

        </div>
	)
}
const linkStyle=" grow dim no-underline washed-yellow flex flex-column items-center ma2 b pa2";
export default Contact;