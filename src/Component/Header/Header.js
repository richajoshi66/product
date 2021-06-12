import React, { Component } from 'react';


class Header extends Component{
    render(){
        return(
            <header id="header">
            <div class="container">
               <div class="row">
                {/*  <!--Logo section--> */}
                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <div class="logo-section">
                        <a href="javascript:void(0)">Logo</a>
                     </div>
                  </div>
               {/*   <!--Logo section End-->
                  <!--Header right section--> */}
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                     <ul class="d-flex justify-content-end header-right-section">
                        <li>
                           <label class="custom-select-box">
                              <select class="">
                                 <option>USD</option>
                                 <option>INR</option>
                                 <option>USD</option>
                              </select>
                           </label>
                        </li>
                        <li>
                           <label class="custom-select-box">
                              <select class="">
                                 <option>EN</option>
                                 <option>FR</option>
                                 <option>UE</option>
                              </select>
                           </label>
                        </li>
                        <li class="my-account">
                           <img src="/images/login-icon.svg" /> My Account
                        </li>
                     </ul>
                  </div>
                 {/* <!--Header right section End-->*/}
               </div>
            </div>
         </header>
        );
    }
}

export default Header;