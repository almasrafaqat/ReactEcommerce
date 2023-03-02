import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Login from '../../assets/images/login.png';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class UserLogin extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            error:"",
            loggedIn:false
        }
    }
    formSubmit = (e)=>{
        e.preventDefault();
      
        const data={
            email: this.state.email,
            password: this.state.password,
        }
        axios.post(AppURL.UserLogin,data).then(response =>{ 
            
            localStorage.setItem('token',response.data.token);
            this.setState({loggedIn:true})
            this.props.setUser(response.data.user);
           
            
       }).catch(error=>{
        this.setState({error:error.response.data.message})
       }); 

  
       
       }

       componentDidMount(){
        window.scroll(0,0)
   } 

   
  render() {
    
        if(this.state.error){
             toast.error(this.state.error,{
                  position: "top-right"
             });
             this.setState({error:""})
        }

    if(this.state.loggedIn == true){
        return <Redirect to={'/profile'} />
    }
    if(localStorage.getItem('token')){
        return <Redirect to="/profile" />
   }

    return (  
        <Fragment>
            <Container>
                <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                    <Row className="text-center">
                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                        <Form className="onboardForm" onSubmit={this.formSubmit}>
                            <h4 className="section-title-login"> USER SING IN </h4>
                            <h6 className="section-sub-title">Please Enter Your Mobile Number</h6>
                            <input className="form-control m-2" type="email"  onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Enter Your Email" />
                            <input className="form-control m-2" type="password" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Enter Your Password" />
                            <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>
                            <br></br> <br></br>
                            <hr />
                                <p> <b> Forget My Password? </b><Link to="/forget"><b> Froget Password </b> </Link> </p>
                                <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>
                        </Form>
                    </Col>
                    <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                        <img className="onboardBanner" src={Login} />
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
        <ToastContainer />
    </Fragment>
    )
  }
}

export default UserLogin