
import React, { Component } from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';


class ViewProduct extends Component{
    render(){
        return(
            <React.Fragment>
                            <Header/>

            <section class="page-title-section">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6 col-md-4 col-sm-12 section-left">
                        <h1 class="page-heading">View Product</h1>
                     </div>
                  </div>
               </div>
            </section>
           
            <section class="product-details-box ">
               <div class="container">
                
                  <ul class="d-flex product-details-icon box-shadow">
                     <li>
                        <a href="javascript:void(0)">
                        <img src="/images/Group.svg" alt="Group"/>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <img src="/images/Portfolio.svg" alt="Portfolio"/>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <img src="/images/Delivery.svg" alt="Delivery"/>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <img src="/images/download.svg" alt="Download"/>
                        </a>
                     </li>
                     <li>
                        <a href="javascript:void(0)">
                        <img src="/images/upload.svg" alt="Upload"/>
                        </a>
                     </li>
                  </ul>
  
 
                  <div class="box-shadow white-block-padd product-details-block">
                     <div class="row">
                        <div class="col-sm-4">
                           <div class="form-group">
                              <label>Product SKU</label>
                              <p class="info-show">Btl-Red-09</p>
                           </div>
                        </div>
                        <div class="col-sm-4">
                           <div class="form-group">
                              <label>Product id</label>
                              <p class="info-show">M6045</p>
                           </div>
                        </div>
                        <div class="col-sm-4">
                           <div class="form-group">
                              <label>Product title</label>
                              <p class="info-show">Elegant blanket, 125 x 160 cm size.</p>
                           </div>
                        </div>
                        <div class="col-sm-12">
                           <div class="form-group">
                              <label>Product descripition</label>
                              <p class="info-show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa felis, cursus vitae tincidunt at, tempus sit amet velit. Cras blandit, mauris vitae pulvinar accumsan, dolor ante tempus risus
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
   
                  <div class="product-image-block white-block-padd box-shadow ">
                     <div class="d-flex inner-section-headings justify-content-between">
                        <h2>Product images</h2>
                     </div>
                     <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12">
                           <div class="product-img-box">
                              <div class="product-info-icons">
                                 <div class="product-info-icons-top">
                                    <a href="javascript:void(0)">
                                    <img src="/images/Rectangle.svg" />
                                    </a>
                                    <a href="javascript:void(0)">
                                    <img src="/images/Grid.svg" />
                                    </a>
                                 </div>
                                 <a href="javascript:void(0)" class="eye-icon">
                                 <img src="/images/Eye.svg" />
                                 </a>
                              </div>
                              <img src="/images/corkcicle-walnut-collection.jpg"/>
                           </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12">
                           <div class="row">
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-1.jpg"/>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-2.jpg"/>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-3.jpg"/>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-4.jpg"/>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-5.jpg"/>
                                 </div>
                              </div>
                              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                 <div class="product-img-box">
                                    <div class="product-info-icons">
                                       <div class="product-info-icons-top">
                                          <a href="javascript:void(0)">
                                          <img src="/images/Rectangle.svg" />
                                          </a>
                                          <a href="javascript:void(0)">
                                          <img src="/images/Grid.svg" />
                                          </a>
                                       </div>
                                       <a href="javascript:void(0)" class="eye-icon">
                                       <img src="/images/Eye.svg" />
                                       </a>
                                    </div>
                                    <img src="/images/stainless-steel-6.jpg"/>
                                 </div>
                              </div>
  
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
      
            <section class="price-details-section ">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between">
                    <h2>Price</h2>
                  </div>
      
                  <div class="row mt-5 align-items-end">
                    <div class="col ">
                      <div class="form-group profit-col">
                        <label>Profit</label>
                        <p class="info-show">$230.00</p>
                      </div>
                    </div>
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Unit price</label>
                        <p class="info-show">$230.00</p>
                      </div>
                    </div>
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Cost per item</label>
                        <p class="info-show">$2.00</p>
                      </div>
                    </div>
      
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Margin increase on <br/>sale price</label>
                        <p class="info-show">$23.00</p>
                      </div>
                    </div>
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Sale price ($0.00) %</label>
                        <p class="info-show">$230.00</p>
                      </div>
                    </div>
      
                    <div class="switch-col ">
                      <div class="form-group">
                        <label>On sale</label>
                        <p class="info-show">Yes</p>
                      </div>
                    </div>
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Minimum order quantity</label>
                        <p class="info-show">200</p>
                      </div>
                    </div>
      
                    <div class="col ">
                      <div class="form-group">
                        <label>Deposit required %</label>
                        <p class="info-show">10%</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <p class="info-show">Charge tax on this</p></div>
                  </div>
                  <hr/>
                  <div class="discount-form-block">
                    <h2 class="section-heading mb-2 mt-3">Volume discount variant</h2>
                    <div class="table-block">
                      <table class="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row">50+</td>
                            <td>220.00</td>
                            <td width="200px"><a href="#"  class="text-danger"><i class="fa fa-trash-alt mr-2"></i>Remove</a></td>
                          </tr>
                          <tr>
                            <td scope="row">100+</td>
                            <td>200.00</td>
                            <td width="200px"><a href="#"  class="text-danger"><i class="fa fa-trash-alt mr-2"></i>Remove</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
      
      
                </div>

               </div>
             </section>

      
             <section class="product-details-section accordion"  id="accordion">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h2>Product Detail</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      
                    <div class="row form-row mb-3">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Product Type</label>
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <span class="badge badge-secondary badge-rounded">Bottle <i class="fa fa-times-circle mr-1"></i></span>
                        <span class="badge badge-secondary badge-rounded">Executive <i class="fa fa-times-circle mr-1"></i></span>
                      </div>
                    </div>
      
                    <div class="row form-row mb-3 ">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Brand Name</label>
                          
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row ">
                          <div class="col-lg-7 col-md-12 col-sm-4 col-xs-12">
                            <span class="badge badge-secondary badge-rounded">Nike <i class="fa fa-times-circle mr-1"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div class="row form-row mb-3 ">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Product Materials</label>
                          
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row">
                          <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                            <span class="badge badge-secondary badge-rounded">Nike <i class="fa fa-times-circle mr-1"></i></span>
                            <span class="badge badge-secondary badge-rounded">Leather <i class="fa fa-times-circle mr-1"></i></span>
                            <span class="badge badge-secondary badge-rounded">Metal <i class="fa fa-times-circle mr-1"></i></span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
      
                    <div class="row form-row mb-3 ">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Collections</label>
                          
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row">
                          <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                            <span class="badge badge-secondary badge-rounded">Bottle <i class="fa fa-times-circle mr-1"></i></span>
                            <span class="badge badge-secondary badge-rounded">Christmas <i class="fa fa-times-circle mr-1"></i></span>
                            <span class="badge badge-secondary badge-rounded">Green <i class="fa fa-times-circle mr-1"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    <div class="row form-row mb-3 ">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Tags</label>
                          
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row">
                          <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                            <span class="badge badge-secondary badge-rounded">Hoslitality <i class="fa fa-times-circle mr-1"></i></span>
                            <span class="badge badge-secondary badge-rounded">Vintagr <i class="fa fa-times-circle mr-1"></i></span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
      
                    <div class="row form-row mb-3 ">
                      <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                        <div class="form-group d-flex">
                          <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Supplier/Vendor</label>
                          
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="row">
                          <div class="col-lg-8 col-md-12 col-sm-4 col-xs-12">
                            <span class="badge badge-secondary badge-rounded">Bbbs <i class="fa fa-times-circle mr-1"></i></span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
      
                  </div>
      
      
                </div>

               </div>
             </section>
 
      
             <section class="product-details-section accordion"  id="accordion2">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <h2>Branding Position</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion2">
                    <div class="row">
                      <div class="col-md-12 mt-3">
                        <div class="table-responsive">
                          <table class="table branding-table">
                            <thead>
                              <tr>
                                <th scope="col">Layer</th>
                                <th scope="col">Layer Number</th>
                                <th scope="col">Layer Title / Branding Location</th>
                                <th scope="col">Position Max. Width (cm)</th>
                                <th>Position Max. Height (cm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row"><img src="/images/cape1.svg" alt=""/></td>
                                <td>Layer 1</td>
                                <td><p class="info-show">Front</p></td>
                                <td><p class="info-show">16</p></td>
                                <td><p class="info-show">9</p></td>
                              </tr>
                              <tr>
                                <td scope="row"><img src="/images/cape2.svg" alt=""/></td>
                                <td>Layer 2</td>
                                <td><p class="info-show">Front Left</p></td>
                                <td><p class="info-show">16</p></td>
                                <td><p class="info-show">9</p></td>
                              </tr>
                              <tr>
                                <td scope="row"><img src="/images/cape3.svg" alt=""/></td>
                                <td>Layer 3</td>
                                <td><p class="info-show">Front Right</p></td>
                                <td><p class="info-show">16</p></td>
                                <td><p class="info-show">9</p></td>
                              </tr>
                              <tr>
                                <td scope="row"><img src="/images/cape4.svg" alt=""/></td>
                                <td>Layer 4</td>
                                <td><p class="info-show">Back</p></td>
                                <td><p class="info-show">16</p></td>
                                <td><p class="info-show">9</p></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
      
                    
      
                  </div>
      
      
                </div>
               
               </div>
             </section>
           
      
             <section class="product-details-section accordion"  id="accordion3">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <h2>Product Branding + Decorating Methods</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseThree" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion3">
                    <div class="row pt-1">
                      
                      <div class="col-lg-10 col-md-9 col-sm-12">
                        <div class="row branding-row">
      
                          <div class="col-lg-3 col-md-6 mb-3">
                            <div class="branding-block text-center">
                              <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                              <h6>Branding methods</h6>
                              <img class="product-image" src="/images/pro1.png" alt=""/>
                              
                            
                            </div>
                          </div>
      
                          <div class="col-lg-3 col-md-6 mb-3">
                            <div class="branding-block text-center">
                              <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                              <h6>Supa print</h6>
                              <img class="product-image" src="/images/pro2.png" alt=""/>
                              
                             
                            </div>
                          </div>
      
                          
      
                          <div class="col-lg-3 col-md-6 mb-3">
                            <div class="branding-block text-center">
                              <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                              <h6>Engraving</h6>
                              <img class="product-image" src="/images/pro1.png" alt=""/>
                              
                              
                              
                            </div>
                          </div>
      
                        </div>
                      </div>
                    </div>
                  </div>
      
      
                </div>
              
               </div>
             </section>
        
      
      
      
             <section class="inventory-section accordion"  id="accordion4">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <h2>Inventory</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseFour" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion4">
                      <div class="row align-items-end">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>SKU - Stock keeping unit</label>
                            <p class="info-show">10</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Barcode (ISBN, UPC, GTIN, etc)</label>
                            <p class="info-show">GBF52360</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Total no. available - All locations</label>
                            <p class="info-show">60000</p>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Alert restock at this number</label>
                            <p class="info-show">900000</p>
                          </div>
                        </div>
                      </div>
                      <hr class="mt-0"/>
                      <div class="checkbox-container-square d-inline-block mr-3 mb-3">
                        <p class="info-show">Track quantity</p>
                      </div>
                      <div class="checkbox-container-square d-inline-block mr-3 mb-3 active">
                        <p class="info-show">Stop selling stock at zero</p>
                      </div>
                      
                  </div>
      
      
                </div>
           
               </div>
             </section>
      
      
      
             <section class="stock-location-section accordion"  id="accordion5">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    <h2>Product stock location</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseFive" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion5">
                      <div class="row">
                        <div class="col-lg-2 col-md-4">
                          <div class="form-group">
                            <label>SKU - Stock keeping unit</label>
                            <p class="info-show">Warehouse 3</p>
                          </div>
                        </div>
                        <div class="col-lg-10 col-md-12">
                          <div class="row align-items-end">
                            <div class="col ">
                              <div class="form-group">
                                <label>Qty this location</label>
                                <p class="info-show">63333</p>
                              </div>
                            </div>
                            <div class="col ">
                              <div class="form-group">
                                <label>Stock alert qty.</label>
                                <p class="info-show">3000</p>
                              </div>
                            </div>
                            <div class="col ">
                              <div class="form-group">
                                <label>Location A</label>
                                <p class="info-show">New </p>
                              </div>
                            </div>
                            <div class="col ">
                              <div class="form-group">
                                <label>Location B</label>
                                <p class="info-show">New</p>
                              </div>
                            </div>
                            <div class="col ">
                              <div class="form-group">
                                <label>Location C</label>
                                <p class="info-show">New</p>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
               
               </div>
             </section>
            
      
             <section class="edit-product-variant-section accordion"  id="accordion6">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="row  inner-section-headings justify-content-between align-items-start  cz-accordian-bar">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0"><h2>Product variants</h2></div>
                                  
                  </div>
                  <div id="collapseSix" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion6">
                    <div class="row ">
                      <div class="col-md-12">
                        <div class="table-responsive">
                          <table class="table product-variant-table">
                            <thead>
                              <tr>
                                <th>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check13"/>
                                    <label for="check13">
                                    </label>
                                  </div>
                                </th>
                                <th >Image</th>
                                <th >SKU</th>
                                <th >Size</th>
                                <th>Color</th>
                                <th>Price</th>
                                <th>Warehouse</th>
                                <th>Location A</th>
                                <th>Location B</th>
                                <th>Location C</th>
                                <th>Qty. Stock Unit</th>{/*<!-- 
                                <th class="text-center">Actions</th> -->*/}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check14"/>
                                    <label for="check14">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup1.png"/></td>
                                <td>Btl-Red-01</td>
                                <td>Small</td>
                                <td>Red</td>
                                <td>1200</td>
                                <td>Brogan</td>
                                <td>225 Bills Place</td>
                                <td>Bills Place</td>
                                <td>Room 156 Classon Avenue</td>
                                <td>1,000</td>
                              {/*  <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                            </td> -->*/}
                              </tr>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check15" checked/>
                                    <label for="check15">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup2.png"/></td>
                                <td>GreenST </td>
                                <td>Small</td>
                                <td>Blue</td>
                                <td>1024</td>
                                <td>Rehrersburg</td>
                                <td>266 Tiffany Place</td>
                                <td>Tiffany Place</td>
                                <td>#22-163 Grove Street</td>
                                <td>12,020</td>
                               {/* <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                               </td> --> */}
                              </tr>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check16" />
                                    <label for="check16">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup3.png"/></td>
                                <td>Btl-Red-01</td>
                                <td>Small</td>
                                <td>Red</td>
                                <td>1200</td>
                                <td>Brogan</td>
                                <td>225 Bills Place</td>
                                <td>Bills Place</td>
                                <td>Room 156 Classon Avenue</td>
                                <td>1,000</td>
                               {/* <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                               </td> --> */}
                              </tr>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check17" />
                                    <label for="check17">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup4.png"/></td>
                                <td>Btl-Red-01</td>
                                <td>Small</td>
                                <td>Red</td>
                                <td>1200</td>
                                <td>Brogan</td>
                                <td>225 Bills Place</td>
                                <td>Bills Place</td>
                                <td>Room 156 Classon Avenue</td>
                                <td>1,000</td>
                             {/*      <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                             </td> -->  */}
                              </tr>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check18" />
                                    <label for="check18">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup5.png"/></td>
                                <td>Btl-Red-01</td>
                                <td>Small</td>
                                <td>Red</td>
                                <td>1200</td>
                                <td>Brogan</td>
                                <td>225 Bills Place</td>
                                <td>Bills Place</td>
                                <td>Room 156 Classon Avenue</td>
                                <td>1,000</td>
                              {/* }  <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                            </td> --> */}
                              </tr>
                              <tr>
                                <td>
                                  <div class="checkbox-container-square checkbox-simple">
                                    <input class="cz-check" type="checkbox" id="check19" />
                                    <label for="check19">
                                    </label>
                                  </div>
                                </td>
                                <td><img class="product-image" src="/images/cup6.png"/></td>
                                <td>Btl-Red-01</td>
                                <td>Small</td>
                                <td>Red</td>
                                <td>1200</td>
                                <td>Brogan</td>
                                <td>225 Bills Place</td>
                                <td>Bills Place</td>
                                <td>Room 156 Classon Avenue</td>
                                <td>1,000</td>
                            {/*}    <!-- <td>
                                  <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                                  <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                        </td> --> */}
                              </tr>
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
               </div>
             </section>
          
      
             <section class="product-dimension-section accordion"  id="accordion7">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    <h2>Product dimensions and weight</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseSeven" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion7">
                      <div class="row align-items-end">
                        <div class="col-location-checkbox">
                          <div class="form-group">
                            <label class="w-100">Product stock location</label>
                            <p class="info-show">This is a physical product</p>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                            <label>Height</label>
                            <p class="info-show">250mm</p>
                          </div>
                        </div>
                  
                        <div class="col">
                          <div class="form-group">
                            <label>Width</label>
                            <p class="info-show">160mm</p>
                          </div>
                        </div>
                 
                        <div class="col">
                          <div class="form-group">
                            <label>Length</label>
                            <p class="info-show">10mm</p>
                          </div>
                        </div>
                
                        <div class="col">
                          <div class="form-group">
                            <label>Unit weight</label>
                            <p class="info-show">100g</p>
                          </div>
                        </div>

                        <div class="col">
                          <div class="form-group">
                            <label>Product Packaging</label>
                            <p class="info-show">20g</p>
                          </div>
                        </div>
         
                        <div class="col-md-2">
                          <div class="form-group">
                            <label>Units per Product</label>
                            <p class="info-show">100</p>
                          </div>
                        </div>
  
                      </div>
                  </div>
                </div>
            
               </div>
             </section>
             
      
             <section class="product-dimension-section accordion"  id="accordion7">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#CartonDimensions" aria-expanded="true" aria-controls="CartonDimensions">
                    <h2>Carton dimensions and weight</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="CartonDimensions" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion7">
                      <div class="row align-items-end">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Height (mm)</label>
                            <p class="info-show">250mm</p>
                          </div>
                        </div>
                      
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Width (mm)</label>
                            <p class="info-show">160mm</p>
                          </div>
                        </div>
                 
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Length (mm)</label>
                            <p class="info-show">10mm</p>
                          </div>
                        </div>
                   
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Unit per carton</label>
                            <p class="info-show">100g</p>
                          </div>
                        </div>
               
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Carton packaging</label>
                            <p class="info-show">20g</p>
                          </div>
                        </div>
           
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Note <small>(to appear with product specification)</small></label>
                            <p class="info-show">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                          </div>
                        </div>
                    
                      </div>
                  </div>
                </div>
            
               </div>
             </section>
          
      
      
             <section class="product-dimension-section accordion"  id="accordion8">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                    <h2>Pallet dimensions and weight</h2>
                    <i class="fa fa-angle-up"></i>
                  </div>
      
                  <div id="collapseEight" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion8">
                      <div class="row align-items-end">
                        
                            <div class="col-sm-3">
                              <div class="form-group">
                                <label>Pallet Weight (Kilos)</label>
                                <p class="info-show">500</p>
                              </div>
                            </div>
                         
                            <div class="col-sm-3">
                              <div class="form-group">
                                <label>Cartons per pallet</label>
                                <p class="info-show">200</p>
                              </div>
                            </div>
                      
                            <div class="col-sm-3">
                              <div class="form-group">
                                <label>Units per Pallet</label>
                                <p class="info-show">300</p>
                              </div>
                            </div>
                            
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Note <small>(to appear with product specification)</small></label>
                            <p class="info-show">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                          </div>
                        </div>
                     
                      </div>
                  </div>
                </div>
                
               </div>
             </section>
             
      
             <section class="note-section mb-3">
               <div class="container">
                <div class="note-block">
                  <div class="row">
                    <div class="col-md-9">
                      <h2 class="section-heading mb-3 mt-3">Product note <small class="ml-3">(The note appear under the description in the customer product view page)</small></h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="col-md-3 text-right">
                      <img src="/images/note-image.svg" alt=""/>
                    </div>
                  </div>
                </div>
               </div>
             </section>
      
             
      
             <section class="media-section accordion"  id="accordion10">
               <div class="container">
                <div class="white-block-padd box-shadow">
                  <div class="d-flex inner-section-headings justify-content-between cz-accordian-bar" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                    <h2>Media</h2>
                    <span><i class="fa fa-angle-up"></i></span>
                  </div>
      
                  <div id="collapseTen" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion10">
                    
            
                    <div class="row">
                      <div class="col-md-12 d-flex align-items-center">                  
                        <h6 class="mr-5">Line Art</h6>
                        
                      </div>
                    </div></div>
                    <hr/>
                    <div class="row pt-1 block-section-1">
                      <div class="col-lg-3 col-md-4 col-sm-12">
                        <div class="image-section image-section-small-bordered text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/media1.png" alt=""/>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-12">
                        <div class="image-section image-section-small-bordered text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/media2.png" alt=""/>
                        </div>
                      </div>
                      
                    </div>
                  
      
            
                    <div class="row mt-3">
                      <div class="col-md-12 d-flex align-items-center">                  
                        <h6 class="mr-5">Life style images</h6>
                      </div>                
                    </div>
                    <hr/>
                    <div class="row pt-1 block-section-2">
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/other-media-image.png" alt=""/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/stainless-steel-3.jpg" alt=""/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/other-media-image.png" alt=""/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/stainless-steel-3.jpg" alt=""/>
                        </div>
                      </div>
                      
                    </div>
                  
      
                    <div class="row mt-3">
                      <div class="col-md-12 d-flex align-items-center">                  
                        <h6 class="mr-5">Other media</h6>
                        <button type="button" class="btn btn-dark">Search Library</button>
                      </div>
                    </div>
                    <hr/>
                    <div class="row pt-1 block-section-3">
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/other-media-image.png" alt=""/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter title here"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/stainless-steel-3.jpg" alt=""/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter title here"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/other-media-image.png" alt=""/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter title here"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="image-section image-section-small text-center">
                          <div class="action-group">
                            <a class="" href=""><i class="fa fa-pen"></i></a>
                            <a class="" href=""><i class="fa fa-trash-alt"></i></a>
                          </div>
                          <img class="pro-image" src="/images/stainless-steel-3.jpg" alt=""/>
                        </div>
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter title here"/>
                        </div>
                      </div>
                      
                    </div>
     
                  </div>
                </div>

             
             </section>


             </React.Fragment>
      
        );
    }
}

export default ViewProduct;