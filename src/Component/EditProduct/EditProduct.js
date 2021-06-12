import React, { Component } from 'react';
import Header from '../Header/Header';

class EditProduct extends Component{
    render(){
        return(
            <React.Fragment>
            
       <Header />
      <section class="page-title-section">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-4 col-sm-12 section-left">
                  <h1 class="page-heading">Edit Product</h1>
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
                  <div class="col-sm-6">
                     <div class="form-group">
                        <label>Product SKU</label>
                        <input type="text" placeholder="Product SKU" class="form-control" value="Btl-Red-09" />
                     </div>
                  </div>
                  <div class="col-sm-6">
                     <div class="form-group">
                        <label>Product id</label>
                        <input type="text" placeholder="Product id" class="form-control" value="M6045" readonly />
                     </div>
                  </div>
                  <div class="col-sm-12">
                     <div class="form-group">
                        <label>Product title</label>
                        <input type="text" placeholder="Product title" class="form-control" value="Elegant blanket, 125 x 160 cm size." />
                     </div>
                  </div>
                  <div class="col-sm-12">
                     <div class="form-group">
                        <label>Product descripition</label>
                        <textarea id="" name="" class="form-control" placeholder="Product Descripition">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa felis, cursus vitae tincidunt at, tempus sit amet velit. Cras blandit, mauris vitae pulvinar accumsan, dolor ante tempus risus
                        </textarea>
                     </div>
                  </div>
               </div>
            </div>
     
            <div class="product-image-block white-block-padd box-shadow ">
               <div class="d-flex inner-section-headings justify-content-between">
                  <h2>Product images</h2>
                  <div class="text-right">
                    <button type="button" class="btn btn-dark mr-2">Search Library</button>
                    <a href="javascript:void(0)" class="inner-section-btn btn">Add Media from url</a>
                </div>
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
                                    <img src="images/Rectangle.svg" />
                                    </a>
                                    <a href="javascript:void(0)">
                                    <img src="images/Grid.svg" />
                                    </a>
                                 </div>
                                 <a href="javascript:void(0)" class="eye-icon">
                                 <img src="images/Eye.svg" />
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
                                 <img src="images/Eye.svg" />
                                 </a>
                              </div>
                              <img src="/images/stainless-steel-6.jpg"/>
                           </div>
                        </div>
                      
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex">
                          <div class="drag-drop-container text-center d-flex align-items-center">
                            <span>
                              <h6>Add Media</h6>
                              <span class="cz-upload-text text-secondary mb-2">Drag or Browse file to upload</span>
                              <input class="cz-upload-input" type="file" id="inputFile" accept="image/*" onchange="readUrl(this)"/>
                              <button type="button" class="cz-upload-btn btn btn-dark w-100">
                                <i class="fa fa-cloud-upload-alt mr-2"></i>Browse
                              </button>
                            </span>
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
              <a href="javascript:void(0)" class="inner-section-btn">Add Product Badge</a>
            </div>

            <div class="row mt-5 align-items-end">
              <div class="col ">
                <div class="form-group profit-col">
                  <label>Profit</label>
                  <input type="text" class="form-control" id="" value="$230.00"/>
                </div>
              </div>

              <div class="col ">
                <div class="form-group">
                  <label>Unit price</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>

              <div class="col ">
                <div class="form-group">
                  <label>Cost per item</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>


              <div class="col ">
                <div class="form-group">
                  <label>Margin increase on <br/>sale price</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>

              <div class="col ">
                <div class="form-group">
                  <label>Sale price ($0.00) %</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>

              <div class="switch-col ">
                <div class="form-group">
                  <label>On sale</label>
                  <div class="button-switch">
                    <input type="checkbox" id="switch-green" class="switch" checked />
                    <label for="switch-green" class="lbl-off">No</label>
                    <label for="switch-green" class="lbl-on">Yes</label>
                  </div>
                </div>
              </div>

              <div class="col ">
                <div class="form-group">
                  <label>Minimum order quantity</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>

              <div class="col ">
                <div class="form-group">
                  <label>Deposit required %</label>
                  <input type="text" class="form-control" id="" placeholder="Enter"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="custom-form-check form-group d-inline-block mr-5">
                  <input class="custom-form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                  <label class="custom-form-check-label" for="exampleRadios1">Charge tax on this</label>
                </div>
                <div class="custom-form-check form-group d-inline-block mr-5">
                  <input class="custom-form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                  <label class="custom-form-check-label" for="exampleRadios2">Product has price variant</label>
                </div>
              </div>
            </div>
            <hr/>
            <div class="discount-form-block">
              <h2 class="section-heading mb-2 mt-3">Volume discount variant</h2>
              <form action="">
                <div class="row align-items-end">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="">Qty from</label>
                      <input type="text" class="form-control" id="" placeholder="50"/>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="inlineFormInputGroup">Price</label>
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text pl-4 pr-4">$</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="220.00"/>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <button type="button" class="btn btn-dark w-100"><i class="fa fa-plus mr-2"></i>Add</button>
                    </div>
                  </div>
                </div>  
              </form>
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
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
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
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12">
                  <div class="row ">
                    <div class="col-lg-7 col-md-12 col-sm-4 col-xs-12">
                      <span class="badge badge-secondary badge-rounded">Nike <i class="fa fa-times-circle mr-1"></i></span>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-8 col-xs-12">
                      <div class="form-group d-flex alert-row">
                        <input type="text" class="form-control mr-3" id=""/>
                        <div class="alert alert-success small-alert d-inline-block mr-2" role="alert">
                          <i class="fa fa-check"></i>
                        </div>
                        <div class="alert alert-danger small-alert d-inline-block" role="alert">
                          <i class="fa fa-times"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row form-row mb-3 ">
                <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                  <div class="form-group d-flex">
                    <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Product Materials</label>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12">
                  <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                      <span class="badge badge-secondary badge-rounded">Nike <i class="fa fa-times-circle mr-1"></i></span>
                      <span class="badge badge-secondary badge-rounded">Leather <i class="fa fa-times-circle mr-1"></i></span>
                      <span class="badge badge-secondary badge-rounded">Metal <i class="fa fa-times-circle mr-1"></i></span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-6 col-xs-12 text-right">
                      <button type="button" class="btn btn-outline-secondary"><i class="fa fa-plus mr-1"></i>New Material</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row form-row mb-3 ">
                <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                  <div class="form-group d-flex">
                    <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Collections</label>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12">
                  <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                      <span class="badge badge-secondary badge-rounded">Bottle <i class="fa fa-times-circle mr-1"></i></span>
                      <span class="badge badge-secondary badge-rounded">Christmas <i class="fa fa-times-circle mr-1"></i></span>
                      <span class="badge badge-secondary badge-rounded">Green <i class="fa fa-times-circle mr-1"></i></span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-6 col-xs-12 text-right">
                      <button type="button" class="btn btn-outline-secondary "><i class="fa fa-plus mr-1"></i>New Collections</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row form-row mb-3 ">
                <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                  <div class="form-group d-flex">
                    <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Tags</label>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12">
                  <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-6 col-xs-12">
                      <span class="badge badge-secondary badge-rounded">Hoslitality <i class="fa fa-times-circle mr-1"></i></span>
                      <span class="badge badge-secondary badge-rounded">Vintagr <i class="fa fa-times-circle mr-1"></i></span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-6 col-xs-12 text-right">
                      <button type="button" class="btn btn-outline-secondary"><i class="fa fa-plus mr-1"></i>New Tags</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row form-row mb-3 ">
                <div class="col-lg-5 col-md-6 col-sm-12 col-border-right">
                  <div class="form-group d-flex">
                    <label for="inputPassword" class="col-lg-4 col-md-6 col-sm-6 col-form-label label-left-border">Supplier/Vendor</label>
                    <div class="col-lg-8 col-md-6 col-sm-6">
                       <select id="inputState" class="form-control">
                          <option selected>Select</option>
                          <option>...</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12">
                  <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-4 col-xs-12">
                      <span class="badge badge-secondary badge-rounded">Bbbs <i class="fa fa-times-circle mr-1"></i></span>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-8 col-xs-12 text-right">
                      <button type="button" class="btn btn-outline-secondary"><i class="fa fa-plus mr-1"></i>New Supplier</button>
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

          {/*}    <!--  <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                     <h2 class="section-heading mb-2 mt-3">Product view 1</h2>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 text-right">
                     <button type="button" class="btn btn-outline-dark ">Edit</button>
                     <button type="button" class="btn btn-dark">Remove</button>
                  </div>
        </div> --> */}

              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    
                    <label for="exampleInputEmail1">Upload product PSD file.</label>
                    <div class="d-flex">
                      <div class="drag-drop-container text-center d-flex align-items-center drag-drop-container-v2 w-75 mb-0">
                          <span class="d-flex w-100 align-items-center">
                            <span class="cz-upload-text text-secondary  text-left">Cap_Design.psd</span>
                            <input class="cz-upload-input" type="file" id="inputFile2" accept="" onchange="readUrl(this)"/>
                            <button type="button" class="cz-upload-btn btn btn-dark "><i class="fa fa-cloud-upload-alt mr-2"></i>Choose</button>
                          </span>
                      </div>
                      <button type="button" class="btn btn-dark w-25 mr-3">Upload</button> <button type="button" class="btn btn-dark w-25" title="Search Library">Search Library</button>
                    </div>
                  </div>
                </div>
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
                          <td><input type="text" class="form-control" placeholder="Front"/></td>
                          <td><input type="text" class="form-control" placeholder="16"/></td>
                          <td><input type="text" class="form-control" placeholder="9"/></td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="/images/cape2.svg" alt=""/></td>
                          <td>Layer 2</td>
                          <td><input type="text" class="form-control" placeholder="Front Left"/></td>
                          <td><input type="text" class="form-control" placeholder="16"/></td>
                          <td><input type="text" class="form-control" placeholder="9"/></td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="/images/cape3.svg" alt=""/></td>
                          <td>Layer 3</td>
                          <td><input type="text" class="form-control" placeholder="Front Right"/></td>
                          <td><input type="text" class="form-control" placeholder="16"/></td>
                          <td><input type="text" class="form-control" placeholder="9"/></td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="/images/cape4.svg" alt=""/></td>
                          <td>Layer 4</td>
                          <td><input type="text" class="form-control" placeholder="Back"/></td>
                          <td><input type="text" class="form-control" placeholder="16"/></td>
                          <td><input type="text" class="form-control" placeholder="9"/></td>
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
                <div class="col-lg-2 col-md-3 col-sm-12">
                  <div class="form-group">
                    <label class="mb-3">Add branding & printing</label>
                    <select class="form-control mb-3" >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <small class="form-text text-muted">Branding image illustrations visible to customer upload new image if required</small>
                  </div>
                </div>
                <div class="col-lg-10 col-md-9 col-sm-12">
                  <div class="row branding-row">

                    <div class="col-lg-3 col-md-6 mb-3">
                      <div class="branding-block text-center">
                        <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                        <h6>Branding methods</h6>
                        <img class="product-image" src="/images/pro1.png" alt=""/>
                        <div class="form-group row">
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Width"/></div>
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Height"/></div>
                        </div>
                     
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-3">
                      <div class="branding-block text-center">
                        <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                        <h6>Supa print</h6>
                        <img class="product-image" src="/images/pro2.png" alt=""/>
                        <div class="form-group row">
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Width"/></div>
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Height"/></div>
                        </div>
                      
                      </div>
                    </div>

                    

                    <div class="col-lg-3 col-md-6 mb-3">
                      <div class="branding-block text-center">
                        <a class="remove-pro" href=""><i class="fa fa-times-circle"></i></a>
                        <h6>Engraving</h6>
                        <img class="product-image" src="/images/pro1.png" alt=""/>
                        <div class="form-group row">
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Width"/></div>
                          <div class="col pl-1 pr-1"><input type="text" class="form-control" placeholder="Max. Height"/></div>
                        </div>
                        <div class="row justify-content-center">
                          <small class="col-md-12">PMS printing limit</small>
                          <div class="col-md-6"><input type="text" class="form-control" placeholder="Max. Height"/></div>
                        </div>
                
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 align-items-center d-flex mb-3 justify-content-center">
                      <div class="button-block text-center w-100">
                        <button type="button" class="btn btn-dark"><i class="fa fa-plus mr-2"></i>New Method</button>
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
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Barcode (ISBN, UPC, GTIN, etc)</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Total no. available - All locations</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>Alert restock at this number</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                </div>
                <hr class="mt-0"/>
                <div class="checkbox-container-square d-inline-block mr-3 mb-3">
                  <input class="cz-check" type="checkbox" id='check'/>
                  <label for="check">Track quantity</label>
                </div>
                <div class="checkbox-container-square d-inline-block mr-3 mb-3 active">
                  <input class="cz-check" type="checkbox" id='check2' checked/>
                  <label for="check2">Stop selling stock at zero</label>
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
                      <select class="form-control" name="" id="">
                        <option value="">Warehouse 1</option>
                        <option value="">Warehouse 2</option>
                        <option value="">Warehouse 3</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-10 col-md-12">
                    <div class="row align-items-end">
                      <div class="col ">
                        <div class="form-group">
                          <label>Qty this location</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                      <div class="col ">
                        <div class="form-group">
                          <label>Stock alert qty.</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                      <div class="col ">
                        <div class="form-group">
                          <label>Location A</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                      <div class="col ">
                        <div class="form-group">
                          <label>Location B</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                      <div class="col ">
                        <div class="form-group">
                          <label>Location C</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                      <div class="button-block ">
                        <div class="form-group col-border-left">
                          <button type="button" class="btn btn-dark"><i class="fa fa-plus mr-2"></i>New</button>
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
              <div class="col-lg-6 col-md-6 col-sm-12 p-0 text-right">
                <button type="button" class="btn btn-outline-secondary"><i class="fa fa-plus mr-1"></i>Add new Variant</button>
                <button type="button" class="ml-2 btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                <a  class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                <i class="fa fa-angle-up pl-2" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix"></i>
              </div>              
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
                          <th>Qty. Stock Unit</th>
                          <th class="text-center">Actions</th>
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
                          <td><small>225 Bills Place</small></td>
                          <td><small>Bills Place</small></td>
                          <td><small>Room 156 Classon Avenue</small></td>
                          <td>1,000</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                          <td><small>266 Tiffany Place</small></td>
                          <td><small>Tiffany Place</small></td>
                          <td><small>#22-163 Grove Street</small></td>
                          <td>12,020</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                          <td><small>225 Bills Place</small></td>
                          <td><small>Bills Place</small></td>
                          <td><small>Room 156 Classon Avenue</small></td>
                          <td>1,000</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                          <td><small>225 Bills Place</small></td>
                          <td><small>Bills Place</small></td>
                          <td><small>Room 156 Classon Avenue</small></td>
                          <td>1,000</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                          <td><small>225 Bills Place</small></td>
                          <td><small>Bills Place</small></td>
                          <td><small>Room 156 Classon Avenue</small></td>
                          <td>1,000</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                          <td><small>225 Bills Place</small></td>
                          <td><small>Bills Place</small></td>
                          <td><small>Room 156 Classon Avenue</small></td>
                          <td>1,000</td>
                          <td>
                            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-pen mr-1"></i>Edit</button>
                            <a href="" class="ml-2 text-danger"><i class="fa fa-trash-alt"></i></a>
                          </td>
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
                      <div class="checkbox-container-square d-inline-block">
                        <input class="cz-check" type="checkbox" id="check2" checked/>
                        <label for="check2">This is a physical product</label>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label>Height</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                
                  <div class="col">
                    <div class="form-group">
                      <label>Width</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
                
                  <div class="col">
                    <div class="form-group">
                      <label>Length</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
          
                  <div class="col">
                    <div class="form-group">
                      <label>Unit weight</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
          
                  <div class="col">
                    <div class="form-group">
                      <label>Carton weight</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
                    </div>
                  </div>
             
                  <div class="col-md-2">
                    <div class="form-group">
                      <label>Carton qty.</label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
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
              <h2>Package dimensions</h2>
              <i class="fa fa-angle-up"></i>
            </div>

            <div id="collapseEight" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion8">
                <div class="row align-items-end">
                  <div class="col-lg-9 col-md-12">
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Height</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                
                      <div class="col">
                        <div class="form-group">
                          <label>Width</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                
                      <div class="col">
                        <div class="form-group">
                          <label>Length</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                   
                      <div class="col">
                        <div class="form-group">
                          <label>Unit per carton</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                   
                      <div class="col">
                        <div class="form-group">
                          <label>Product packaging</label>
                          <input type="text" class="form-control" id="" placeholder="Enter"/>
                        </div>
                      </div>
                
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-12">
                    <div class="form-group">
                      <label>Note <small>(to appear with product specification)</small></label>
                      <input type="text" class="form-control" id="" placeholder="Enter"/>
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
                <button type="button" class="btn btn-outline-dark ">Add New Note</button>
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
                  <h6 class="mr-5">Line Art <small class="ml-1">(Upload PDF, JPEG, PNG)</small></h6>
                  <button type="button" class="btn btn-dark">Search Library</button>
                </div>
              </div>
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
                <div class="col-lg-3 col-md-4 col-sm-12 d-flex">
                  <div class="drag-drop-container text-center d-flex align-items-center mb-3">
                      <span>
                        <img class="image-icon mb-2" src="/images/pdf-icon.svg" alt=""/>
                        <h6 class="mb-0">Line art A4 PDF file only</h6>
                        <span class="cz-upload-text text-secondary mb-3">Drag and Drop or browse file to upload</span>
                        <input class="cz-upload-input" type="file" id="inputFile4" accept="" onchange="readUrl(this)"/>
                        <button type="button" class="cz-upload-btn btn btn-dark pl-5 pr-5">
                          <i class="fa fa-cloud-upload-alt mr-2"></i>Upload PDF FILE
                        </button>
                      </span>
                    </div>
                </div>
              </div>
      

              <div class="row mt-3">
                <div class="col-md-12 d-flex align-items-center">                  
                  <h6 class="mr-5">Life style images</h6>
                  <button type="button" class="btn btn-dark">Search Library</button>
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
                <div class="col">
                  <div class="drag-drop-container text-center d-flex align-items-center mb-3">
                      <span>
                        <img class="image-icon mb-2" src="images/image-icon.svg" alt=""/>
                        <h6 class="mb-0">Upload images</h6>
                        <span class="cz-upload-text text-secondary mb-3">Drag and Drop or browse file to upload</span>
                        <input class="cz-upload-input" type="file" id="inputFile4" accept="" onchange="readUrl(this)"/>
                        <button type="button" class="cz-upload-btn btn btn-dark w-100">
                          <i class="fa fa-cloud-upload-alt mr-2"></i>Browse
                        </button>
                      </span>
                    </div>
                     <div class="text-center"><button type="button" class="btn btn-dark">Search Library</button></div>
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
                <div class="col">
                  <div class="drag-drop-container text-center d-flex align-items-center mb-3">
                      <span>
                        <img class="image-icon mb-2" src="/images/image-icon.svg" alt=""/>
                        <h6 class="mb-0">Upload images</h6>
                        <span class="cz-upload-text text-secondary mb-3">Drag and Drop or browse file to upload</span>
                        <input class="cz-upload-input" type="file" id="inputFile4" accept="" onchange="readUrl(this)"/>
                        <button type="button" class="cz-upload-btn btn btn-dark w-100">
                          <i class="fa fa-cloud-upload-alt mr-2"></i>Browse
                        </button>
                      </span>
                    </div>
                     <div class="text-center"><button type="button" class="btn btn-dark">Search Library</button></div>
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
              <div class="col-md-12 text-right">
                <button type="button" class="btn text-black btn-link mr-3">Cancel</button>
                <button type="button" class="btn btn-dark">Save & Next</button>
              </div>
            </div>
          </div>
         </div>
       </section>



            </React.Fragment>
        );
    }
}

export default EditProduct;