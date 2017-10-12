import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render(){
    return (
      <div className="navbar navbar-static-top coreos-nav co-m-main-nav-container" role="navigation">
        <div className="container container-fix">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".coreos-nav-collapse">
              <span className="icon-bar co-m-main-nav-hamburger"></span>
              <span className="icon-bar co-m-main-nav-hamburger"></span>
              <span className="icon-bar co-m-main-nav-hamburger"></span>
            </button>

            <a href="#" className="navbar-brand co-m-main-nav-brand"  data-category="Main Navigation" data-event="Logo">
            </a>
            <div className="co-m-main-nav-hint pull-right visible-xs">Menu</div>
          </div>

          <div className="navbar-collapse collapse coreos-nav-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li className="dropdown co-m-dropdown co-m-main-nav-products co-p-main-nav-toplevel co-p-main-nav-toplevel">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" data-category="Main Navigation" data-event="Products: Open Dropdown">Products <span className="fa fa-angle-down"></span></a>
                <ul className="dropdown-menu co-m-dropdown-menu" role="menu">
                  <li className="co-m-dropdown-menu-categories-category">
                    <ul className="co-m-dropdown-menu-categories-sublinks co-m-main-nav-products-sublink">
                      <li>
                        <a href="#" data-category="Product Dropdown" data-event="Tectonic">Tectonic - Kubernetes</a>
                      </li>
                      <li>
                        <a href="#" data-category="Product Dropdown" data-event="Products: Quay.io">Quay - Registry</a>
                      </li>
                      <li>
                        <a href="#" data-category="Product Dropdown" data-event="Products: Premium Managed Linux">Container Linux Support</a>
                      </li>
                      <li>
                        <a href="#" data-category="Product Dropdown" data-event="Training: Kubernetes">Training</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown co-m-dropdown co-m-main-nav-products co-p-main-nav-toplevel co-p-main-nav-toplevel">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" data-category="Main Navigation" data-event="Products: Open Dropdown">Open Source <span className="fa fa-angle-down"></span></a>
                <ul className="dropdown-menu co-m-dropdown-menu" role="menu">
                  <li className="co-m-dropdown-menu-categories-category">
                    <ul className="co-m-dropdown-menu-categories-sublinks co-m-main-nav-products-sublink">
                      <li>
                        <a href="#" data-category="Open Source" data-event="docs">Open Source Docs</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="Kubernetes">Kubernetes</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="Operators">Operators</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="CoreOS Linux">Container Linux</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="rkt">rkt</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="ectd">etcd</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="Clair">Clair</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="flannel">flannel</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="Ignition">Ignition</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="Matchbox">Matchbox</a>
                      </li>
                      <li>
                        <a href="https://github.com/coreos/" data-category="Open Source" data-event="Github">90+ more on Github</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown co-m-dropdown co-m-main-nav-products co-p-main-nav-toplevel co-p-main-nav-toplevel">
                <a href="#" data-category="Main Navigation" data-event="Resources">Resources</a>
              </li>
              <li className="dropdown co-m-dropdown co-m-main-nav-products co-p-main-nav-toplevel co-p-main-nav-toplevel">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" data-category="Main Navigation" data-event="Products: Open Dropdown">Company <span className="fa fa-angle-down"></span></a>
                <ul className="dropdown-menu co-m-dropdown-menu" role="menu">
                  <li className="co-m-dropdown-menu-categories-category">
                    <ul className="co-m-dropdown-menu-categories-sublinks co-m-main-nav-products-sublink">
                      <li>
                        <a href="#" data-category="Company" data-event="About">About CoreOS</a>
                      </li>
                      <li>
                        <a href="#" data-category="Company" data-event="Blog">CoreOS Blog</a>
                      </li>
                      <li>
                        <a href="#" data-category="Open Source" data-event="events">Events</a>
                      </li>
                      <li>
                        <a href="#" data-category="Company" data-event="Careers">Careers</a>
                      </li>
                      <li>
                        <a href="#" data-category="Company" data-event="Press">Press</a>
                      </li>
                      <li>
                        <a href="#" data-category="Company" data-event="Contact Us">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar-right">
              <a className="login-link new-btn btn-small btn-red" data-category="Main Navigation" data-event="CoreOS Sign Up" href="#">Download Tectonic</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Nav;
