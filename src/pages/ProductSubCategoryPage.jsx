import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SubCategory from '../components/ProductDetails/SubCategory'
import axios from 'axios'


export class ProductSubCategoryPage extends Component {
    constructor({match}){
        super();
        this.state={
            Category: match.params.category,
            SubCategory: match.params.subcategory,
            ProductData:[]

        }
    }

    componentDidMount(){
        // alert(this.state.Category)
        axios.get(AppURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory))
        .then(response=>{
            this.setState({ProductData: response.data});
        })
    }
  render() {
    return (
        <Fragment> 
        <div className="Desktop">
        <NavMenuDesktop/>
        </div>

        <div className="Mobile">
        <NavMenuMobile />  
        </div>                       

        <SubCategory Category={this.state.Category} SubCategory={this.state.SubCategory} ProductData={this.state.ProductData} />


        <div className="Desktop">
        <FooterDesktop/>
        </div>

        <div className="Mobile">
        <FooterMobile/>
        </div>

   </Fragment>
    )
  }
}

export default ProductSubCategoryPage