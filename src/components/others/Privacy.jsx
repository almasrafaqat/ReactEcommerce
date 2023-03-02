import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Privacy extends Component {
     constructor(){
          super();
          this.state={
              privacy:"",
              loaderDiv:"",
              mainDiv:"d-none",
          }
      }
  
      componentDidMount(){
       let SiteInfoPrivacy = sessionStorage.getItem('AllSiteInfo');
  
          if(SiteInfoPrivacy == null){
            axios.get(AppURL.AllSiteInfo).then(response =>{
                 let StatusCode = response.status;
                 if(StatusCode==200){
                      let JsonData = (response.data)[0]['privacy'];
                      this.setState({privacy:JsonData,loaderDiv:"d-none", mainDiv:""});
                      sessionStorage.setItem("SiteInfoPrivacy", JsonData);
                 }else{
                      toast.error("Somthing Went Wrong",{
                           position: "bottom-center"
                      });
                 }
    
            }).catch(error=>{
                 toast.error("Somthing Went Wrong. "+error,{
                      position: "bottom-center"
                 });
            });
          }
          else{
            this.setState({privacy:SiteInfoPrivacy+"LocalSession"});
          }
     }
     render() {
          return (
               <Fragment>
                    <Container>
                    <div className="breadbody">
                         <Breadcrumb>
                              <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
                              <Breadcrumb.Item> <Link to="/privacy"> Privacy </Link> </Breadcrumb.Item>
                         </Breadcrumb>
                    </div>
                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                              <div className={this.state.loaderDiv}>
                                   <div class="ph-item">
                                        <div class="ph-col-12">
                                             <div class="ph-row">
                                                  <div class="ph-col-6 big"></div>
                                                  <div class="ph-col-4 empty big"></div>
                                                  <div class="ph-col-4"></div>
                                                  <div class="ph-col-8 empty"></div>
                                                  <div class="ph-col-6"></div>
                                                  <div class="ph-col-6 empty"></div>
                                                  <div class="ph-col-12"></div>
                                                  <div class="ph-col-12"></div>
                                                  <div class="ph-col-12"></div>
                                                  <div class="ph-col-12"></div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className={this.state.mainDiv}>
                                   <h4 className="section-title-login">Privacy </h4>
                                   <p className="section-title-contact">
                                        
                                   { ReactHtmlParser(this.state.privacy) }
                                   </p>
                              </div>
                              </Col>
                         </Row>
                    </Container>
                    <ToastContainer/>
               </Fragment>
          )
     }
}

export default Privacy