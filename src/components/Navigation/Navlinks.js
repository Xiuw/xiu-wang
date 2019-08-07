import React from "react";
import "./Nav.css";

const Navlinks = () => {
  return (
    <div id="nav-link" className="center">
      <div className="flex flex-column center mb6">
        <a className={linkStyle} href="#about">
          <i className="fas fa-address-card" />
          {/*<span className="w-60 tc f5">About</span>*/}
        </a>
        <a className={linkStyle} href="#project">
          <i className="fas fa-tasks" />
          {/*<span className=" w-60 tc f5">Project</span>*/}
        </a>
        <a className={linkStyle} href="#contact">
          <i className="fas fa-envelope" />
          {/*<span className="w-60 tc f5">Contact</span>*/}
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
const linkStyle = "dim no-underline mid-gray flex center pa2 pb4";
export default Navlinks;
