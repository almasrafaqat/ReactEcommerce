import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import validation from '../../validation/validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Contact extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            message:"",
        }
    }

        nameOnChange = (event) => {
            let name = event.target.value;
            // alert(name);
            this.setState({name:name});
        }
        emailOnChange = (event) => {
            let email = event.target.value;
            // alert(email);
            this.setState({email:email});
        }
        messageOnChange = (event) => {
            let message = event.target.value;
            // alert(message)
            this.setState({message:message});
        }

        onFormSubmit = (event) => {
            // alert('formSubmit');
            let name = this.state.name;
            let email = this.state.email;
            let message = this.state.message;
            let sendBtn = document.getElementById("sendBtn");
            let contactForm = document.getElementById('contactForm');

            if(message.length == 0){
                toast.error("Please write your message");
            }
            else if(name.length==0){
                toast.error("please write your name");
            }
            else if(email.length==0){
                toast.error("Please write your email");
            }
            else if(!(validation.NameRegx).test(name)){
                toast.error("invalide Name");
            }else{
            sendBtn.innerHTML="Sending...";
            let myFormData = new FormData();
            myFormData.append("name", name);
            myFormData.append("email", email);
            myFormData.append("message",message);

            axios.post(AppURL.PostContact, myFormData)
            .then((response)=>{
                if(response.status==200 && response.data==1){
                    contactForm.reset();
                    this.setState({name:"",email:"",message:""});
                    sendBtn.innerHTML="Send";
                    toast.success("Message Send Successfully");
                }else{
                    toast.error("Error occured");
                    sendBtn.innerHTML="Send";
                }
                
            })
            .catch((error)=>{
                toast.error(error);
                sendBtn.innerHTML="Send";
            })
           
        }
        event.preventDefault();
        }
    
  render() {
    return (
        <Fragment>
            <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <Row className="text-center">
                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                        <Form onSubmit={this.onFormSubmit} id="contactForm" className="onboardForm">
                            <h4 className="section-title-login">CONTACT WITH US </h4>
                            <h6 className="section-sub-title">Please Contact With Us </h6>
                            <input onChange={this.nameOnChange} value={this.name} className="form-control m-2" type="text" placeholder="Enter Name" />
        
                            <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Email" />
                            <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" placeholder="Enter Your Message"/>
                            
                            <Button type="submit" id="sendBtn" className="btn btn-block m-2 site-btn-login"> Send </Button>
        
                        </Form>
                    </Col>
        
                    <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                        <br></br><br></br>
                        <p className="section-title-contact">
                        1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                        Email: Support@easylearningbd.com
                        </p>
        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.933946288916!2d46.601294317443866!3d24.763453800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3f5fcb7225b%3A0xb278db99bcc2a87e!2sBoulevard%20Riyadh%20City!5e0!3m2!1sen!2ssa!4v1654666326519!5m2!1sen!2ssa" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
        
                    </Col>
                </Row>
        
        
        
                    </Col>
                </Row>
                <ToastContainer/>
            </Container>
      </Fragment>
    )
  }
}

export default Contact