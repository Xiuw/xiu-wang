import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
	return(
		<div>
		<Link className="grow dim white no-underline b flex flex-column items-center ma4" to="Skill">
				<p className="dim pa2 ma1 f6 mid-gray">Resume </p>
				<i className="fas fa-download dim mid-gray"></i>
		</Link>
		<hr className="mw3 mw4-l bb center bw1 b--white-50  "/>
		<ul className="flex flex-column list pl0 justify-center ">
    
	        <li><a className={linkStyle} href="mailto:Sylv_xw@gmail.com">
	              <i className="fas fa-envelope-open dib w1 h1"></i>	
	              <span className="f6 mt1">Gmail</span>
	        </a> </li>
            
          	<li><a className={linkStyle} href="https://github.com/" title="GitHub">
	     		<i className="fab fa-github dib w1 h1"></i>
	            <span className="f6 mt1">GitHub</span>
           	</a></li>

           <li><a className={linkStyle} href="https://www.linkedin.com/in/xiu-wang-4784a8114/" title="LinkedIn">
           		<i className="fab fa-linkedin dib w1 h1"></i>
	            <span className="f6 mt1">LinkedIn</span>
           </a></li>
      
        </ul>
        </div>
	)
}
const linkStyle="grow no-underline dim white flex flex-column items-center ma3 b";
export default Contact;