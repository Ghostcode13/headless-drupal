import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render(){
    return (
      <div className="co-m-footer footer-dark">
        <div className="container">
          <div className="row co-m-footer-top">
            <h2 className="footer-title">Install Kubernetes in less than 15 minutes.</h2>
            <div className="footer-cta">
              <a className="new-btn btn-red" href="#" data-category="Footer" data-event="Tectonic: Sign Up">Sign up for free</a>
              <a className="new-btn btn-clear" href="#" data-category="Footer" data-event="Tectonic: Documentation">Read the docs</a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
            <hr />
              <div className="co-m-footer-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#" data-category="Footer" data-event="Footer: About">About</a></li>
                  <li><a href="#" data-category="Footer" data-event="Blog: Post List">Blog</a></li>
                  <li><a href="#" data-category="Footer" data-event="Press">Press</a></li>
                  <li><a href="#" data-category="Footer" data-event="Careers">Careers</a></li>
                  <li><a href="#" data-category="Footer" data-event="Footer: Security">Security</a></li>
                  <li><a href="#" data-category="Footer" data-event="Footer: Privacy Policy">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="co-m-footer-group">
                <h4>Products</h4>
                <ul>
                  <li><a href="#" data-category="Footer" data-event="Tectonic: Enterprise">Tectonic Enterprise</a></li>
                  <li><a href="#" data-category="Footer" data-event="Products: Managed Linux">Premium Managed Linux</a></li>
                  <li><a href="https://tectonic.com/quay-enterprise/" data-category="Footer" data-event="Products: Quay Enterprise">Quay Enterprise</a></li>
                  <li><a href="#" data-category="Footer" data-event="Training: Overview">Training classNamees</a></li>
                  <li><a href="#" data-category="Footer" data-event="Products: CoreUpdate">CoreUpdate</a></li>
                </ul>
              </div>
              <div className="co-m-footer-group">
                <h4>Contact &amp; Support</h4>
                <ul>
                  <li><a href="#" data-category="Footer" data-event="Footer: Contact Us">Contact Us</a></li>
                  <li><a href="#" data-category="Footer" data-event="Footer: Support">Support</a></li>
                  <li><a href="https://groups.google.com/forum/#!forum/coreos-user" data-category="Footer" data-event="Footer: User Newsletter">General Mailing List</a></li>
                  <li><a href="https://groups.google.com/forum/#!forum/coreos-dev" data-category="Footer" data-event="Footer: Dev Newsletter">Developer Mailing List</a></li>
                  <li><a href="irc://irc.freenode.org:6667/#coreos" data-category="Footer" data-event="Footer: IRC">IRC #coreos</a></li>
                  <li><a href="https://twitter.com/coreos/" data-category="Footer" data-event="Footer: Twitter">@CoreOS</a></li>
                </ul>
              </div>
              <div className="co-m-footer-group">
                <h4>Project Docs</h4>
                <ul>
                  <li><a href="#" data-category="Footer" data-event="CoreOS: Docs">Container Linux</a></li>
                  <li><a href="#" data-category="Footer" data-event="etcd: Docs">etcd</a></li>
                  <li><a href="#" data-category="Footer" data-event="rkt: Docs">rkt</a></li>
                  <li><a href="#" data-category="Footer" data-event="flannel: Docs">flannel</a></li>
                </ul>
              </div>
              <div className="co-m-footer-group hidden-sm">
                <h4>Events</h4>
                <ul>
                  <li><a href="#" data-category="Footer" data-event="Footer: Community">Community &amp; Meetups</a></li>
                  <li><a href="#" data-category="Footer" data-event="Fest: Overview">CoreOS Fest 2017</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
