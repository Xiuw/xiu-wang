import React from "react";
import "./Nav.css";

const Navlinks = () => {
  return (
    <div id="nav-link" className="center">
      <div className="flex center mw6-l mw6-m mw5 pl2 pr2">
        <a className={linkStyle} href="#about">
          <i className="fas fa-address-card mr2" />
          <span className="w-60 tc f5 dn db-l db-m">About</span>
        </a>
        <a className={linkStyle} href="#project">
          <i className="fas fa-tasks mr2" />
          <span className=" w-60 tc f5 dn db-l db-m ">Project</span>
        </a>
        <a className={linkStyle} href="#contact">
          <i className="fas fa-envelope mr2" />
          <span className="w-60 tc f5 dn db-l db-m">Contact</span>
        </a>
        {/*<a className={linkStyle} href="https://drive.google.com/open?id=17oGCNyYAs8kUt_qR5SVM0TBD5JYu5GKy" 
				target= "_blank" rel="noopener noreferrer">
			   <i className="w-50 tc fas fa-paper-plane dib"></i>
			   <span className="w-50 tl f5">Resume</span>
			</a>*/}
      </div>
    </div>
  );
};
const linkStyle = "dim no-underline white-80 fw6 flex center pa2";
export default Navlinks;
