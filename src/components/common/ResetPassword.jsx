import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import Forget from '../../assets/images/forget.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ResetPassword extends Component {
     constructor(){
          super();
          this.state={
               token:"",
               email:"",
               password:"",
               password_confirmation:"",
               success:'',
               error:"",
          }
     }

      // Reset Form Submit Method 
      formSubmit = (e) => {
          e.preventDefault();
          const data={
               token: this.state.token,
               email: this.state.email,
               password: this.state.password,
               password_confirmation: this.state.password_confirmation,
          }
          axios.post(AppURL.UserResetPassword, data).then(response=>{
               this.setState({success:response.data.message})

             
               document.getElementById("formreset").reset();
               this.setState({
                    token:"",
                    email:"",
                    password:"",
                    password_confirmation:"",
               })
          })
          .catch(error=>{
               this.setState({error:error.response.data.message})
               
          });
               
          
     }

     render() {
          if(this.state.success){
               toast.success(this.state.success,{
                    position: "top-right"
               });
               this.setState({success:""})
          }
          if(this.state.error){
               toast.error(this.state.error,{
                    position: "top-right"
               });
               this.setState({error:""})
          }
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form className="onboardForm" id="formreset" onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> RESET PASSWORD </h4>

                    <input className="form-control m-2" type="text"onChange={(e)=>{this.setState({token:e.target.value})}} placeholder="Enter Your Pin Code" />

                    <input className="form-control m-2" type="email" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Enter Your Email" />

                    <input className="form-control m-2" type="password" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Your New Password" />

                    <input className="form-control m-2" type="password" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} placeholder="Confirm Your Password" />


                    <Button type="submit" className="btn btn-block m-2 site-btn-login"> Reset Password </Button> 

               </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner" src={Forget} />
                         </Col>
                    </Row>






                         </Col>
                    </Row>
                    <ToastContainer />
               </Container>
          </Fragment>
          )
     }
}

export default ResetPassword