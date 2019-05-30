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
      success:false,
      error:''
    }
   }

  handleChange =(e) => {
    const {name, value }= e.target;
    this.setState({[name]:value, error:''})

  }
 
  handleReturn = (e) => {
    this.setState({
       name:'',
      email:'',
      message:'',
      success:false,
      error:''

    })
    return <Redirect to='/contact'/>
  }

  handleSubmit= ()=>{
    const{name,email,message} = this.state;
    if(name !=='' && email !=='' && message !==''){
        axios({
        url:"https://obscure-sands-80594.herokuapp.com/contact",
        method:"post",
        data: {
          name:name,   
          email: email,  
          message: message   
        }
      }).then((response)=>{
         if (response.data.msg === 'success'){
            this.setState({success:true})
      }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
      }
    })
   }   
      else{
        this.setState({error:"*Please check your form again"});
      }  
  }

render(){
  console.log(this.state.success)
	return(
		<div className="vh-100 ma0 pa0">
      {
      this.state.success? 
          <div className=" center tc ma6 pa3 f3-ns f4">
            <p className="ma3 mid-gray">Your message has been successfully sent.</p>
            <p className="mt5 link dim pointer b" style={{color:"#ccac9d"}} onClick={this.handleReturn}>Click here to return</p>
          </div>
      :
          <div>
          <Animated animationIn="jello" isVisible={true} >
    		   <h1 className="center tc ma4 pa2 f2 f1-ns bb w-30-l w-50 fw5" style={{color:"#ccac9d"}}>Contact</h1>
          </Animated>
          <Animated animationIn="slideInUp" isVisible={true}>
           <main className="pa2 mid-gray ml2 mr2">
              <div className="measure center">
                <span style={{color:"#ccac9d", fontWeight:"bold"}}>{this.state.error}</span>
                <fieldset id="contact_form" className="ba b--transparent ph0 mh0">

                   <div className="mt3">
                    <label className="db  lh-copy f4" forhtml="contact-name">Name:</label>
                    <input style={{borderColor:"#ccac9d"}}  className="f3 pa2 input-reset ba bg-transparent mid-gray w-100" type="text" name="name"  id="name" onChange={this.handleChange}/>
                  </div>
                           
                  <div className="mt3">
                    <label className="db lh-copy f4" forhtml="email-address">Email:</label>
                    <input style={{borderColor:"#ccac9d"}} className="f3 pa2 input-reset  ba bg-transparent w-100 mid-gray" type="email" name="email"  id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="mv3">
                    <label className="db lh-copy f4" forhtml="message">Message:</label>
                    <textarea  style={{borderColor:"#ccac9d"}} rows="6" className="f3 pa2 input-reset ba bg-transparent w-100 mid-gray" type="text" name="message"  id="message" onChange={this.handleChange}/>
                  </div>
              
                </fieldset>
                <div className="tc">
                  <p style={{background:"#ccac9d"}} 
                    className="fw5 ph4 pa2 input-reset pointer grow f4 dib mid-gray hover-white-80 title_and_link" 
                    type="submit" value="Send Message" onClick={this.handleSubmit}>Send message</p>
                </div>
              </div>
            </main>
          </Animated>
          </div>
      }
  

		</div>
	)
}
}

export default ContactForm;