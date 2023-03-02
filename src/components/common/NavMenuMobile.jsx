import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from '../../assets/images/cropped-artheme-logo-150x55.png';
import {Link} from "react-router-dom";
import MegaMenuMobile from '../home/MegaMenuMobile';

class NavMenuMobile extends Component {
  constructor(){
    super();
    this.state={
      SideNavState:'sideNavClose',
      ContentOverState: 'ContentOverlayClose',
    }
  }

  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  }
  ContentOverlayClickHandler= () =>{
    this.SideNavOpenClose();
  }

  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if(SideNavState==="sideNavOpen"){
         this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})

    }
    else{
         this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
    }
  }
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">
          <Container fluid={true}>
            <Row>
              <Col>
                <Button onClick={this.MenuBarClickHandler}><i className='fa fa-bars'></i></Button>
                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
                <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
              </Col>
            </Row>
          </Container>
          <div className={this.state.SideNavState}>
               <hr className="w-80" />
               <div className="list-group">
               <a className="list-group-item nav-font nav-itemmenu list-group-item-action" ><i className="fa mr-2 fa-home"></i>Home </a>
               </div> 
               <MegaMenuMobile/>
          </div>
          <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

          </div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile