import React, { Component, Fragment  } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import UserLogin from '../components/common/UserLogin'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'


export class UserLoginPage extends Component {
  render() {
    const setUser = this.props.setUser;
    const user = this.props.user;
    return (
        <Fragment> 
            <div className="Desktop">
            <NavMenuDesktop /> 
            </div>

            <div className="Mobile">
            <NavMenuMobile />  
            </div>                       

            <UserLogin setUser={setUser} user ={user} /> 

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

export default UserLoginPage