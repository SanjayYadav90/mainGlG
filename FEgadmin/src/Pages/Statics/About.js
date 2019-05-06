import React, {Component} from 'react';

class About extends Component {
   render() {
      return(
         <main className="main-content bgc-grey-100">
         <div id="mainContent">
            <div className="row gap-20 masonry pos-r">
               <div className="masonry-sizer col-md-6" />
               <div className="masonry-item col-md-6">
               <div className="bgc-white p-20 bd">
                  <h6 className="c-grey-900">Basic Form</h6>
                  <div className="mT-30">
                     <form>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                     </div>
                     <div className="checkbox checkbox-circle checkbox-info peers ai-c mB-15">
                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                        <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c">
                           <span className="peer peer-greed">Call John for Dinner</span>
                        </label>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                     </form>
                  </div>
               </div>
               </div>
               <div className="masonry-item col-md-6">
               <div className="bgc-white p-20 bd">
                  <h6 className="c-grey-900">Complex Form Layout</h6>
                  <div className="mT-30">
                     <form>
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label htmlFor="inputEmail4">Email</label>
                           <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                           <label htmlFor="inputPassword4">Password</label>
                           <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                     </div>
                     <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                     </div>
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label htmlFor="inputCity">City</label>
                           <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                           <label htmlFor="inputState">State</label>
                           <select id="inputState" className="form-control">
                           <option selected>Choose...</option>
                           <option>...</option>
                           </select>
                        </div>
                        <div className="form-group col-md-2">
                           <label htmlFor="inputZip">Zip</label>
                           <input type="text" className="form-control" id="inputZip" />
                        </div>
                     </div>
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label className="fw-500">Birthdate</label>
                           <div className="timepicker-input input-icon form-group">
                           <div className="input-group">
                              <div className="input-group-addon bgc-white bd bdwR-0">
                                 <i className="ti-calendar" />
                              </div>
                              <input type="text" className="form-control bdc-grey-200 start-date" placeholder="Datepicker" data-provide="datepicker" />
                           </div>
                           </div>
                        </div>
                     </div>
                     <div className="form-group">
                        <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                           <input type="checkbox" id="inputCall2" name="inputCheckboxesCall" className="peer" />
                           <label htmlFor="inputCall2" className=" peers peer-greed js-sb ai-c">
                           <span className="peer peer-greed">Call John for Dinner</span>
                           </label>
                        </div>
                     </div>
                     <button type="submit" className="btn btn-primary">Sign in</button>
                     </form>
                  </div>
               </div>
               </div>
               <div className="masonry-item col-md-6">
               <div className="bgc-white p-20 bd">
                  <h6 className="c-grey-900">Horizontal Form</h6>
                  <div className="mT-30">
                     <form>
                     <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                           <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                     </div>
                     <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                           <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                     </div>
                     <fieldset className="form-group">
                        <div className="row">
                           <legend className="col-form-legend col-sm-2">Radios</legend>
                           <div className="col-sm-10">
                           <div className="form-check">
                              <label className="form-check-label">
                                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                 Option one is this and that—be sure to include why it's great
                              </label>
                           </div>
                           <div className="form-check">
                              <label className="form-check-label">
                                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                 Option two can be something else and selecting it will deselect option one
                              </label>
                           </div>
                           <div className="form-check disabled">
                              <label className="form-check-label">
                                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                                 Option three is disabled
                              </label>
                           </div>
                           </div>
                        </div>
                     </fieldset>
                     <div className="form-group row">
                        <div className="col-sm-2">Checkbox</div>
                        <div className="col-sm-10">
                           <div className="form-check">
                           <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" /> Check me out
                           </label>
                           </div>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="col-sm-10">
                           <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
               </div>
               <div className="masonry-item col-md-6">
               <div className="bgc-white p-20 bd">
                  <h6 className="c-grey-900">Disabled Forms</h6>
                  <div className="mT-30">
                     <form>
                     <fieldset disabled>
                        <div className="form-group">
                           <label htmlFor="disabledTextInput">Disabled input</label>
                           <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="disabledSelect">Disabled select menu</label>
                           <select id="disabledSelect" className="form-control">
                           <option>Disabled select</option>
                           </select>
                        </div>
                        <div className="form-check">
                           <label className="form-check-label">
                           <input className="form-check-input" type="checkbox" /> Can't check this
                           </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                     </fieldset>
                     </form>
                  </div>
               </div>
               </div>
               <div className="masonry-item col-md-6">
               <div className="bgc-white p-20 bd">
                  <h6 className="c-grey-900">Validation</h6>
                  <div className="mT-30">
                     <form className="container" id="needs-validation" noValidate>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="validationCustom01">First name</label>
                           <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="validationCustom02">Last name</label>
                           <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="validationCustom03">City</label>
                           <input type="text" className="form-control" id="validationCustom03" placeholder="City" required />
                           <div className="invalid-feedback">
                           Please provide a valid city.
                           </div>
                        </div>
                        <div className="col-md-3 mb-3">
                           <label htmlFor="validationCustom04">State</label>
                           <input type="text" className="form-control" id="validationCustom04" placeholder="State" required />
                           <div className="invalid-feedback">
                           Please provide a valid state.
                           </div>
                        </div>
                        <div className="col-md-3 mb-3">
                           <label htmlFor="validationCustom05">Zip</label>
                           <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required />
                           <div className="invalid-feedback">
                           Please provide a valid zip.
                           </div>
                        </div>
                     </div>
                     <button className="btn btn-primary" type="submit">Submit form</button>
                     </form>
                  </div>
               </div>
               </div>
            </div>
         </div>
         </main>

      );
   }
}
export default About;