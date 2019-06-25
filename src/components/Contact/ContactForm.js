import React, {Component} from 'react';
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
      error:'',
      loading:false
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
      error:'',
      isLoading:false

    })
    return <Redirect to='/contact'/>
  }

  handleSubmit= ()=>{
    const{name,email,message} = this.state;
    if(name !=='' && email !=='' && message !==''){
        this.setState({isLoading:true})
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
            this.setState({success:true,isLoading:false})
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
    <div className="w-100 pb5" id="contact">
    
      <div className="ma0">
        <h1 className="w-100 w7 w5-ns center tc pa3 mt0 fw4 header-title">Contact</h1>
     
        {
        this.state.isLoading?
          <div className="center tc pa3 f3-ns f4 mt6 mb6">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
               <p className="ph4 pa3 input-reset mt4"> 
               </p>
          </div>
        :
        this.state.success? 
          <div className="center tc pa3 f3-ns f4 mt6 mb6">
              <p className="ma4-ns ma2 f6 f4-ns black-80"> Thank you! Your message has been successfully sent.</p>
              <p className="btnBtn fw5 ph4 pa3 input-reset pointer f5 dib greenC ba mt4" 
               onClick={this.handleReturn}>Send another message</p>
          </div>
          :
          <main className="black-70 ml2 mr2 pb0 mt5">
              <p className="tc f5 fw5">Let's get in touch!</p>   
              <div className="measure center"> 
                <fieldset id="contact_form" className="ba b--transparent ph0 mh0 pb1">
                   <div className="mt3">
                    <input placeholder="Name" className="f5 pa3 input-reset ba bg-transparent black-70 w-100" 
                    type="text" name="name"  id="name" onChange={this.handleChange}/>
                  </div>
                  <div className="mt3">
                    <input placeholder="Email" className="f5 pa3 input-reset  ba bg-transparent w-100 black-70" 
                    type="email" name="email"  id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="mt3">
                    <textarea  placeholder="Message" rows="6" className="f5 pa3 input-reset ba bg-transparent w-100 black-70" 
                    type="text" name="message"  id="message" onChange={this.handleChange}/>
                  </div>
                </fieldset>

                <span className="black-70 f6">{this.state.error}</span>

                <div className="tc">
                  <p className="btnBtn linkBtn fw5 ph4 pa3 input-reset pointer f5 dib black-70 ba no-underline"
                     type="submit" value="Send Message" onClick={this.handleSubmit}>Send message</p>
                </div>

              </div>
          </main>
          }
      </div>
    </div>
  )
}
}

export default ContactForm;