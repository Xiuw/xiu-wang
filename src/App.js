import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import SideNav from './components/Navigation/SideNav';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';
import ContactForm from './components/Contact/ContactForm';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sideNavOpen:false
    }
  }

  onHandleSideNav = () => {
    this.setState((prevState => {
      return {sideNavOpen:!prevState.sideNavOpen}
    } ))
  }

  render() {
    console.log(this.state.sideNavOpen)
    return (
      <Router>
        <div className="flex roboto">
        <Navigation/>
        <SideNav handleSideNav = {this.onHandleSideNav} showHideNav ={this.state.sideNavOpen} />
         <div className={this.state.sideNavOpen? "backdrop" : ""} onClick={this.onHandleSideNav}/>

         <div className="w-80-l w-100-m vh-100 scrollbar force-overflow main bg-washed-yellow"  id="style-1">
        <Switch>
          
          <Route exact path="/" component={About}/>
          <Route path="/project" component={Project}/>
          <Route path="/skill" component={Skill}/>
          <Route path="/contact" component={ContactForm}/>
          
        </Switch>

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
