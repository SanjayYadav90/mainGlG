import React, {Component} from 'react';
import { Link} from 'react-router-dom';

class Header extends Component {
  // constructor() {
	// 	super();
	// 	this.state = {
  //     showUser: false,
  //     showEmail: false,
  //     showAlert: false
	// 	};
  // }
  // avatorToggle() {
	// 	this.setState({
  //     showUser: !this.state.showUser,
  //     showEmail: false,
  //     showAlert: false
	// 	});
  // }
  // emailToggle() {
	// 	this.setState({
  //     showEmail: !this.state.showEmail,
  //     showUser: false,
  //     showAlert: false
	// 	});
  // }
  // alertToggle() {
	// 	this.setState({
  //     showAlert: !this.state.showAlert,
  //     showUser: false,
  //     showEmail: false
	// 	});
	// }
  render() {
    return(
      <div className="header navbar">
        <div className="header-container">
          <ul className="nav-left">
            <li>
              <Link id="sidebar-toggle" className="sidebar-toggle" to="#">
                <i className="ti-menu" />
              </Link>
            </li>
            <li className="search-box">
              <Link className="search-toggle no-pdd-right" to="#">
                <i className="search-icon ti-search pdd-right-10" />
                <i className="search-icon-close ti-close pdd-right-10" />
              </Link>
            </li>
            <li className="search-input">
              <input className="form-control" type="text" placeholder="Search..." />
            </li>
          </ul>
          <ul className="nav-right">
            <li className= {"notifications dropdown"}>
              <span className="counter bgc-red">3</span>
              <Link to="#" className="dropdown-toggle no-after" data-toggle="dropdown">
                <i className="ti-bell" />
              </Link>
              <ul className="dropdown-menu">
                <li className="pX-20 pY-15 bdB">
                  <i className="ti-bell pR-10" />
                  <span className="fsz-sm fw-600 c-grey-900">Notifications</span>
                </li>
                <li>
                  <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">John Doe</span>
                            <span className="c-grey-600">liked your <span className="text-dark">post</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">5 mins ago</small>
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">Moo Doe</span>
                            <span className="c-grey-600">liked your <span className="text-dark">cover image</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">7 mins ago</small>
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <span>
                            <span className="fw-500">Lee Doe</span>
                            <span className="c-grey-600">commented on your <span className="text-dark">video</span>
                            </span>
                          </span>
                          <p className="m-0">
                            <small className="fsz-xs">10 mins ago</small>
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="pX-20 pY-15 ta-c bdT">
                  <span>
                    <Link to="#" className="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i className="ti-angle-right fsz-xs mL-10" /></Link>
                  </span>
                </li>
              </ul>
            </li>
            <li className={"notifications dropdown" }>
              <span className="counter bgc-blue">3</span>
              <Link to="#" className="dropdown-toggle no-after" data-toggle="dropdown">
                <i className="ti-email" />
              </Link>
              <ul className="dropdown-menu">
                <li className="pX-20 pY-15 bdB">
                  <i className="ti-email pR-10" />
                  <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                </li>
                <li>
                  <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">John Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">5 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data generator for your app...
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/2.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">Moo Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">15 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data generator for your app...
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100">
                        <div className="peer mR-15">
                          <img className="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="" />
                        </div>
                        <div className="peer peer-greed">
                          <div>
                            <div className="peers jc-sb fxw-nw mB-5">
                              <div className="peer">
                                <p className="fw-500 mB-0">Lee Doe</p>
                              </div>
                              <div className="peer">
                                <small className="fsz-xs">25 mins ago</small>
                              </div>
                            </div>
                            <span className="c-grey-600 fsz-sm">
                              Want to create your own customized data generator for your app...
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="pX-20 pY-15 ta-c bdT">
                  <span>
                    <Link to="#" className="c-grey-600 cH-blue fsz-sm td-n">View All Email <i className="fs-xs ti-angle-right mL-10" /></Link>
                  </span>
                </li>
              </ul>
            </li>
            <li className= {"dropdown"}>
              <Link to="#" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                <div className="peer mR-10">
                  <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
                </div>
                <div className="peer">
                  <span className="fsz-sm c-grey-900">John Doe</span>
                </div>
              </Link>
              <ul className={"dropdown-menu fsz-sm"}>
                <li>
                  <Link to="/login" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-user mR-10" />
                    <span>Login</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-user mR-10" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-email mR-10" />
                    <span>Messages</span>
                  </Link>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <Link to="#" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-power-off mR-10" />
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;