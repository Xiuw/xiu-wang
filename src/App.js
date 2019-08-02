import React, { Component } from 'react';
import SideNav from './components/Navigation/SideNav';
import Homepage from './components/Home/Homepage';
import Project from './components/Project/Project';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Skill from './components/Skill/Skill';
import ContactForm from './components/Contact/ContactForm';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sideNavOpen:false,
    }
  }

  onHandleSideNav = () => {
    this.setState((prevState => {
      return {sideNavOpen:!prevState.sideNavOpen}
    } ))
  }
  
  render() {
    return (
        <div className="flex">
        <SideNav handleSideNav = {this.onHandleSideNav} showHideNav ={this.state.sideNavOpen}/>
        <div className={this.state.sideNavOpen? "backdrop" : ""} onClick={this.onHandleSideNav}/>
        <div className="w-100">
           <Homepage />
           <About/>
           <Project/>
           <Skill/>   
           <ContactForm/>
           <Footer/>
        </div>
      </div>
    );
  }
}
export default App;
