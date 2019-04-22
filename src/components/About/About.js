import React,{Component} from 'react';
import xiu from './xiu.jpg';
import './About.css';

class About extends Component{
  constructor(){
    super();
    this.state={
      show:false
    }    
  }
  handleEffect = () =>{
   setTimeout(()=> this.setState({show:true}), 7000); 
  }

render(){
	return(
    <div>
		<article className="vh-100 dt w-100 black-80 " >
          <div className="dtc v-mid tc ph3 ph4-l">
             <h1 className="f-subheadline-l fw6 sayHello center" style={{color:"#ccac9d"}} >Hello!</h1>
             <div className={this.state.show?"show":'aboutme'} onLoad={this.handleEffect}>
                <img src={xiu} className="title_and_link h4 w3.5 dib center grow pic" alt="xiu"/>
                <hr className="mw3 bb center bw1 b--black-10 ma3"/>
                <p className="lh-copy measure-narrow center tc mid-gray pa3 fw4 f4">My name is <span className="b" style={{color:"#ccac9d"}}> Xiu Wang, </span> 
                  a self-taught web developer. I enjoy building both front-end and back-end application.
                </p>
              </div>
          </div>

       </article>
       </div>
	 )
  }
}

export default About;