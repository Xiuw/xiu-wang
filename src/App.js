import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SideNav from './components/Navigation/SideNav';
import Homepage from './components/Home/Homepage';
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
    return (
        <div className="flex roboto bg-washed-yellow">
        
        <Navigation/>
        <SideNav handleSideNav = {this.onHandleSideNav} showHideNav ={this.state.sideNavOpen} />
         <div className={this.state.sideNavOpen? "backdrop" : ""} onClick={this.onHandleSideNav}/>
         <div className="w-20-ns w-20-m w-0 space"></div>
         <div className="w-80-ns w-80-m w-100  scrollbar force-overflow main center" id="style-1">
         <Homepage/>
         <Project/>
         <Skill/>
         <ContactForm/>
        </div>
      </div>
    );
  }
}

export default App;
