import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/static/images/logo.png'

class SideNav extends Component {
  toggleDropdown(){
    console.log('I clicked!'+this.state.shown);
    this.setState({
      shown: !this.state.shown
    });
  }
  constructor() {
		super();
		this.state = {
			shown: false,
		};
  }
  render(){
    return(
      <div className="sidebar">
          <div className="sidebar-inner">
            {/* ### $Sidebar Header ### */}
            <div className="sidebar-logo">
              <div className="peers ai-c fxw-nw">
                <div className="peer peer-greed">
                  <Link className="sidebar-link td-n" to="/">
                    <div className="peers ai-c fxw-nw">
                      <div className="peer">
                        <div className="logo">
                          <img src={logo} alt="" />
                        </div>
                      </div>
                      <div className="peer peer-greed">
                        <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="peer">
                    <div className="mobile-toggle sidebar-toggle">
                        <Link to="" className="td-n">
                          <i className="ti-arrow-circle-left" />
                        </Link>
                    </div>
                </div>
              </div>
            </div>
            {/* ### $Sidebar Menu ### */}
            <ul className="sidebar-menu scrollable pos-r">
              <li className="nav-item mT-30 active">
                <Link className="sidebar-link" to="/">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-home" />
                  </span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="/categories">
                  <span className="icon-holder">
                    <i className="c-brown-500 ti-email" />
                  </span>
                  <span className="title">Categories</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="/about">
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-share" />
                  </span>
                  <span className="title">Compose</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="/users">
                  <span className="icon-holder">
                    <i className="c-deep-orange-500 ti-calendar" />
                  </span>
                  <span className="title">Users</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="chat.html">
                  <span className="icon-holder">
                    <i className="c-deep-purple-500 ti-comment-alt" />
                  </span>
                  <span className="title">Chat</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="charts.html">
                  <span className="icon-holder">
                    <i className="c-indigo-500 ti-bar-chart" />
                  </span>
                  <span className="title">Charts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="sidebar-link" to="forms.html">
                  <span className="icon-holder">
                    <i className="c-light-blue-500 ti-pencil" />
                  </span>
                  <span className="title">Forms</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="sidebar-link" to="ui.html">
                  <span className="icon-holder">
                    <i className="c-pink-500 ti-palette" />
                  </span>
                  <span className="title">UI Elements</span>
                </Link>
              </li>
              <li className={"nav-item dropdown" + (this.state.shown ? ' open' : '') }>
                <Link className="dropdown-toggle" onClick={this.toggleDropdown.bind(this)} to="#">
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-layout-list-thumb" />
                  </span>
                  <span className="title">Tables</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="sidebar-link" to="basic-table.html">Basic Table</Link>
                  </li>
                  <li>
                    <Link className="sidebar-link" to="datatable.html">Data Table</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="dropdown-toggle" to="#">
                  <span className="icon-holder">
                    <i className="c-purple-500 ti-map" />
                  </span>
                  <span className="title">Maps</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="google-maps.html">Google Map</Link>
                  </li>
                  <li>
                    <Link to="vector-maps.html">Vector Map</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="dropdown-toggle" to="#">
                  <span className="icon-holder">
                    <i className="c-red-500 ti-files" />
                  </span>
                  <span className="title">Pages</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="sidebar-link" to="blank.html">Blank</Link>
                  </li>                 
                  <li>
                    <Link className="sidebar-link" to="404.html">404</Link>
                  </li>
                  <li>
                    <Link className="sidebar-link" to="500.html">500</Link>
                  </li>
                  <li>
                    <Link className="sidebar-link" to="signin.html">Sign In</Link>
                  </li>
                  <li>
                    <Link className="sidebar-link" to="signup.html">Sign Up</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="dropdown-toggle" to="#">
                  <span className="icon-holder">
                    <i className="c-teal-500 ti-view-list-alt" />
                  </span>
                  <span className="title">Multiple Levels</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item dropdown">
                    <Link to="#">
                      <span>Menu Item</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#">
                      <span>Menu Item</span>
                      <span className="arrow">
                        <i className="ti-angle-right" />
                      </span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#">Menu Item</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Item</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default SideNav;