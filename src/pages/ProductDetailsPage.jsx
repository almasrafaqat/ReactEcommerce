import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import SliderLoading from '../components/PlaceHolder/SliderLoading'
import ProductDetails from '../components/ProductDetails/ProductDetails'


class ProductDetailsPage extends Component {
     constructor({match}){
          super();
          this.state={
               code: match.params.code,
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none" 
          }
     }
     componentDidMount(){
          window.scroll(0,0);
          // alert(this.state.code);
          axios.get(AppURL.ProductDetails(this.state.code))
          .then(response=>{
               this.setState({ProductData: response.data, isLoading:"d-none", mainDiv:""});
          })
          .catch(error=>{
               console.log(error);
          })
          
     }

     render() {
          const User = this.props.user;
        if(this.state.mainDiv == "d-none"){
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       
               
               <SliderLoading isLoading={this.state.isLoading}/>

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
        }else{
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       
               
               <ProductDetails data={this.state.ProductData} user={User} />
               

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
}

export default ProductDetailsPage