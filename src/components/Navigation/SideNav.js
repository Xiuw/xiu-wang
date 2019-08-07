import React from "react";
import Navlinks from "./Navlinks";
import "./Nav.css";
import Fade from "react-reveal/Fade";

const SideNav = ({ handleSideNav, showHideNav }) => {
  return (
    <div>
      <div>
        <Fade right delay={1500}>
          <div
            className="bar pa2 animated slideInRight slow"
            onClick={handleSideNav}
          >
            <div className={showHideNav ? "bar1 change1" : "bar1"} />
            <div className={showHideNav ? "bar2 change2" : "bar2"}> </div>
            <div className={showHideNav ? "bar3 change3" : "bar3"} />
          </div>
        </Fade>
      </div>
      <div
        className={showHideNav ? "side-nav shadowE center" : "side-nav hide"}
      >
        {/*<div className="bar" onClick={handleSideNav}> 
            		<i className=" fas fa-times mid-gray f2 pa2 pointer"></i>
	            </div>*/}
        <div className="tc flex vh-100 items-center" onClick={handleSideNav}>
          <Navlinks />
        </div>
      </div>
    </div>
  );
};
export default SideNav;
