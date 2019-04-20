import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './ContactForm.css'

class ContactForm extends Component{
   constructor(){
    super();
    this.state={
      name:'',
      email:'',
      message:'',
      success:false
    }
   }

  handleChange =(e) => {
    const {name, value }= e.target;
    this.setState({[name]:value})

  }
 
  handleReturn = (e) => {
    this.setState({success:false})
    return <Redirect to='/contact'/>
  }

  handleSubmit= ()=>{
    const{name,email,message} = this.state;
    axios({
      url:"https://obscure-sands-80594.herokuapp.com/contact",
      method:"post",
      data: {
        name:name,   
        email: email,  
        message: message,
        success:false
      }
      }).then((response)=>{
         if (response.data.msg === 'success'){
            this.setState({success:true})
      }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
      }
    })

  }

render(){
	return(
		<div className="ml3 mr3">
      <Animated animationIn="slideInUp" isVisible={true}>
      {
      this.state.success? 
          <div className=" center tc ma6 pa3 f3-ns f4">
            <p className="ma3 mid-gray">Your message has been successfully sent</p>
            <p className="mt5 link dim pointer" style={{color:"#ccac9d"}} onClick={this.handleReturn}>Click here to return</p>
          </div>
      :
          <div>
    		   <h1 className=" center tc ma4 pa3 f2 f1-ns" style={{color:"#ccac9d"}}>Contact Form</h1>
           <main className="pa2 mid-gray">
              <div className="measure center">
                <fieldset id="contact_form" className="ba b--transparent ph0 mh0">

                   <div className="mt3">
                    <label className="db fw6 lh-copy f5" forhtml="contact-name">Name</label>
                    <input style={{borderColor:"#ccac9d"}}  className="pa2 input-reset ba bw1 bg-transparent mid-gray w-100" type="text" name="name"  id="name" onChange={this.handleChange}/>
                  </div>
                           
                  <div className="mt3">
                    <label className="db fw6 lh-copy f5" forhtml="email-address">Email</label>
                    <input style={{borderColor:"#ccac9d"}} className="pa2 input-reset bw1 ba bg-transparent w-100 mid-gray" type="email" name="email"  id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f5" forhtml="message">Message</label>
                    <textarea  style={{borderColor:"#ccac9d"}} rows="5" className="pa2 input-reset ba bw1 bg-transparent w-100 mid-gray" type="text" name="message"  id="message" onChange={this.handleChange}/>
                  </div>
              
                </fieldset>
                <div className="fl">
                  <input style={{background:"#ccac9d"}} className="b ph3 pv2 input-reset pointer f5 dib mid-gray hover-white" type="submit" value="Send Message" onClick={this.handleSubmit}/>
                </div>
              </div>
            </main>
          </div>
      }
      </Animated>

		</div>
	)
}
}

export default ContactForm;