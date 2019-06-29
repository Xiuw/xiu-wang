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
        <h1 className="center w-100 mid-gray fw6 tc pt5 f3 pl4 pr4 ma0">Let's get in touch!</h1>
        {
        this.state.isLoading?
        <div className="flex justify-center">
          <div className="pa3 f3-ns f4 mt6 mb5">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
               <p className="ph4 pa3 input-reset mt4"> 
               </p>
          </div>
        </div>  
        :
        this.state.success? 
          <div className="center tc pa3 f3-ns f4 mt5 mb6">
              <p className="ma4-ns ma2 f6 f5-ns black-80"> Thank you! Your message has been successfully sent.</p>
              <p className="btnBtn fw6 ph4 pa3 input-reset pointer f5 dib nudeC ba mt4" 
               onClick={this.handleReturn}>Send another message</p>
          </div>
          :
          <main className="ml2 mr2 pb0 mt4">
              <div className="measure center "> 
                <fieldset id="contact_form" className="ba b--transparent ph0 mh0 pb1">
                   <div className="mt3">
                    <input placeholder="Name" className="f5 fw6 pa3 input-reset ba bg-transparent nudeC w-100" 
                    type="text" name="name"  id="name" onChange={this.handleChange}/>
                  </div>
                  <div className="mt3">
                    <input placeholder="Email" className="f5 fw6 pa3 input-reset  ba bg-transparent w-100  nudeC" 
                    type="email" name="email"  id="email" onChange={this.handleChange}/>
                  </div>
                  <div className="mt3">
                    <textarea  placeholder="Message" rows="6" className="f5 fw6 pa3 input-reset ba bg-transparent w-100 nudeC" 
                    type="text" name="message"  id="message" onChange={this.handleChange}/>
                  </div>
                </fieldset>

                <span className="mid-gray f6">{this.state.error}</span>
                <span className="mid-gray f6 pa2"></span>
                <div className="tc">
                  <p className="btnBtn linkBtn fw6 ph4 pa3 input-reset pointer f5 nudeC dib ba no-underline"
                     type="submit" value="Send Message" onClick={this.handleSubmit}><i class="fas fa-envelope"></i>
                     <span className="pl2">Send message</span></p>
                </div>
              </div>
          </main>
          }
    </div>
  )
}
}

export default ContactForm;