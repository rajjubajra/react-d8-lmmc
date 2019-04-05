import React from 'react';
import styled from 'styled-components';
import events from 'events'
import ajax from '../../../Restapi/ajax';

//import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;

    .text-muted{
      height: 10px;
    }

    label{
      margin: 0px 0px 0px 2px;
      font-weight: 100;
      letter-spacing: 0.1rem;
    }

    div{
      width: 100%;
    }

    .form-control{
      border-radius: 0px;
    }

    ul.close{
      width: 20px;
      height: 35px;
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      cursor: pointer;
      border: 1px solid #ccc;
      
    }
   
    ul.close li{
      list-style: none;
    width: 20px;
    height: 2px;
    background-color: var(--dark-3);
    margin: 1px;
    }

    
    ul.close li:nth-child(1){
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      -webkit-transform: rotate(40deg);
      -ms-transform: rotate(40deg);
      transform: rotate(40deg);
      position: relative;
      right: 10px;
      top: 15px;
    }
    ul.close li:nth-child(2){
      -webkit-transform: rotate(-40deg);
      -ms-transform: rotate(-40deg);
      transform: rotate(-40deg);
      position: relative;
      top: 11px;
      right: 10px;
    }
`;


// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();



class ContactForm extends React.Component{
  state = {
    name: '',
    email: '',
    message: ''
  }
  

  handleChange = (e) => {
    //data[propName] = e.target.value
    this.setState({[e.target.name]: e.target.value})
    
  }

  // note the 'async' keyword, it allows us to call 'await' later
  handleSubmit = async (e) => {
    e.preventDefault()
    var postData = {
      "webform_id": "contact_form",

      "name": `${this.state.name}`,
      "email": `${this.state.email}`,
      "message": `${this.state.message}`,
    };
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.post('/webform_rest/submit', postData) // wait for the POST AJAX request to complete
      console.log('Node created: ', response)
      emitter.emit('NODE_UPDATED')
    } catch (e) {
      alert(e)
    }
  }
  
  render(){
     return(
      <Form>
        <div>
          <h3>Message Form: </h3>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="InputName">Name</label>
              <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  placeholder="Enter name" 
                  onChange={this.handleChange}
                  required
              />
           
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail1">Email</label>
              <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  placeholder="Enter email" 
                  onChange={this.handleChange}
                  required
              />
          
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Message</label>
              <textarea 
                  name="message"
                  className="form-control" 
                  placeholder="Message"
                  rows="3"
                  onChange={this.handleChange}
                  required
              >
              </textarea>
             
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
      </Form>
    )
  }
   
}
export default ContactForm;

