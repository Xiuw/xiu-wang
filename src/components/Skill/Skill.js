import React from "react";
import Fade from "react-reveal/Fade";
const Skill = () => {
  return (
    <div className="pb5 pt3 w-100 " id="skill">
      <div className="ml4 mr4  ma2">
        <div className="tc center mid-gray pt4 pb3 icon flex flex-wrap justify-center">
          <Fade bottom cascade delay={500} duration={3000}>
            <div className="pa2">
              <i className="devicon-javascript-plain" />
              <p className="f7">JavaScript</p>
            </div>
            <div className="pa2">
              <i className="devicon-react-original " />
              <p className="f7">React</p>
            </div>
            <div className="pa2">
              <i className="devicon-html5-plain " />
              <p className="f7">HTML5</p>
            </div>
            <div className="pa2">
              <i className="devicon-css3-plain  " />
              <p className="f7">CSS3</p>
            </div>
            <div className="pa2">
              <i className="devicon-sass-original " />
              <p className="f7">Sass</p>
            </div>
            <div className="pa2">
              <i className="devicon-bootstrap-plain " />
              <p className="f7">Bootstrap</p>
            </div>

            <div className="pa2">
              <i className="devicon-postgresql-plain " />
              <p className="f7">PosgreSQL</p>
            </div>
            <div className="pa2">
              <i className="devicon-nodejs-plain " />
              <p className="f7">Node</p>
            </div>
            <div className="pa2">
              <i className="devicon-express-original " />
              <p className="f7">Express</p>
            </div>
            <div className="pa2">
              <i className="devicon-github-plain " />
              <p className="f7">Github</p>
            </div>
            <div className="pa2">
              <i className="devicon-git-plain " />
              <p className="f7">Git</p>
            </div>
            <div className="pa2">
              <i
                className="fab fa-npm"
                style={{
                  marginTop: "0px",
                  marginBottom: "0px",
                  padding: "0px 18px",
                  fontWeight: "normal"
                }}
              />
              <p className="f7">NPM</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skill;
