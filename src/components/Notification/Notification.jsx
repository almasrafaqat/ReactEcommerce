import React, { Component, Fragment,  } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import axios from 'axios'

export class Notification extends Component {
  
    constructor(){
        super();
        this.state={
            show:false,
            NotificationData:[],
            isLoading:"",
            mainDiv:"d-none",
            Notificationmsg:"",
            Notificationtitle:"",
            Notificationdate:""
            
        }
    }

    componentDidMount(){
        axios.get(AppURL.NotificationHistory).then(response =>{

             this.setState({NotificationData:response.data});         

        }).catch(error=>{

        });
   }

    handleClose = () => {
        this.setState({show:false});
    }

    handleShow = (event) => {
        this.setState({show:true});
        let Nmsg = event.target.getAttribute("data-message");
        let Ntitle = event.target.getAttribute("data-title");
        let Ndate = event.target.getAttribute("data-date");
        this.setState({Notificationmsg:Nmsg,Notificationtitle:Ntitle,Notificationdate:Ndate})

    }



  render() {
    
    const NotificationList = this.state.NotificationData;
    let MyView = NotificationList.map((NotificationList,i)=>{
        return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
        <Card  className="notification-card">
            <Card.Body>
                <h6> {NotificationList.title} </h6>
                <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {NotificationList.date} | Status: Unread</p>
                <Button onClick={this.handleShow} data-title={NotificationList.title} data-date={NotificationList.date} data-message={NotificationList.message} className='btn btn-danger'>Details</Button>
            </Card.Body>
            
        </Card>
    </Col>
    })
    return (
        <Fragment>

        <Container className="TopSection">
            <div className="breadbody">
                <Breadcrumb>
                    <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>
                    <Breadcrumb.Item> <Link to="/notification"> Notification </Link> </Breadcrumb.Item>
                 </Breadcrumb>
            </div>
        <Row>
            
        {MyView}
          
    
        </Row>
    </Container>
    
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <h6><i className="fa fa-bell"></i> Date: {this.state.Notificationdate} </h6>
            </Modal.Header>
            <Modal.Body>
                <h6>{this.state.Notificationtitle}</h6>
                <p>
                {this.state.Notificationmsg}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
   
    </Fragment>
    )
  }
}

export default Notification