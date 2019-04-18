import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import axios from 'axios';

class ContactForm extends Component{
   constructor(){
    super();
    this.state={
      name:'',
      email:'',
      message:''
    }
   }

  handleChange=(e)=>{
    const {name, value }= e.target;
    this.setState({[name]:value})

  }

  handleSubmit= ()=>{
    const{name,email,message} = this.state;
    axios({
      url:"https://quiet-refuge-90905.herokuapp.com/contact",
      method:"post",
      data: {
        name:name,   
        email: email,  
        message: message
      }
      }).then((response)=>{
         if (response.data.msg === 'success'){
          console.log("success")
            alert("Message Sent."); 
      }else if(response.data.msg === 'fail'){
             console.log("failed")
            alert("Message failed to send.")
      }
    })

  }

render(){
	return(
		<div>
      <Animated animationIn="slideInUp" isVisible={true}>
		   <h1 className=" center tc ma4 pa3 f3 f2-ns" style={{color:"#ccac9d"}}>Contact Form</h1>
       <main className="pa4 mid-gray">
          <div className="measure center">
            <fieldset id="contact_form" className="ba b--transparent ph0 mh0">

               <div className="mt3">
                <label className="db fw6 lh-copy f6" forhtml="contact-name">Name</label>
                <input style={{borderColor:"#ccac9d"}}  className="pa2 input-reset ba bw1 bg-transparent mid-gray w-100" type="text" name="name"  id="name" onChange={this.handleChange}/>
              </div>
                       
              <div className="mt3">
                <label className="db fw6 lh-copy f6" forhtml="email-address">Email</label>
                <input style={{borderColor:"#ccac9d"}} className="pa2 input-reset bw1 ba bg-transparent w-100 mid-gray" type="email" name="email"  id="email" onChange={this.handleChange}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" forhtml="message">Message</label>
                <textarea  style={{borderColor:"#ccac9d"}} rows="5" className="pa2 input-reset ba bw1 bg-transparent w-100 mid-gray" type="text" name="message"  id="message" onChange={this.handleChange}/>
              </div>
          
            </fieldset>
            <div className="fr">
              <input style={{background:"#ccac9d"}} className="b grow ph3 pv2 input-reset pointer f6 dib mid-gray hover-white" type="submit" value="Send" onClick={this.handleSubmit}/>
            </div>
          </div>
        </main>

      </Animated>

		</div>
	)
}
}

export default ContactForm;