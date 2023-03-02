import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { Link } from 'react-router-dom';
import CategoryLoading from '../PlaceHolder/CategoryLoading';

class Categories extends Component {
  constructor(){
    super();
    this.state={
      menuData: [],
      isLoading:"",
      mainDiv:"d-none",
    }
  }
  componentDidMount(){
    axios.get(AppURL.AllCategoryDetails)
    .then(response=>{
      this.setState({menuData: response.data, isLoading: "d-none", mainDiv:""});

    })
    .catch(error=>{

    })
  }



  render() {
    var CatList = this.state.menuData;
    const MyView = CatList.map((CatList,i)=>{
      return <Col className="p-0" key={i.toString()}  xl={2} lg={2} md={2} sm={6} xs={6}>
        <Link className='text-link' to={"/productcategory/"+CatList.category_name}>
      <Card className="h-100 w-100 text-center">
        <Card.Body>
        <img className="center" src={CatList.category_image} />  
        <h5 className="category-name">{CatList.category_name}</h5>  
        </Card.Body>
      </Card>
      </Link>
    </Col>
    })



    return (
      <Fragment>
        <CategoryLoading isLoading={this.state.isLoading}/>
          <div className={this.state.mainDiv}>
            <Container className='text-center' fluid={true}>
              <div className='section-title mb-55 text-center'>
                <h2>Category</h2>
                <p>Some Of Our Exclusive Collection, You May Like </p>
              </div>
              <Row>
                
                  <Row>
                    {MyView}

                  </Row>
                
              </Row>
            </Container>
          </div>
      </Fragment>
    )
  }
}

export default Categories