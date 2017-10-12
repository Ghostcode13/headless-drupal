import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../node_modules/axios/dist/axios.min.js';

class Hero extends React.Component {
  constructor(){
    super();
    this.state = {
        heroBtns: []
    };
  }
  componentDidMount() {
    const btnDataUrl = 'http://localhost:8888/api/hero-btns';
    axios.get(btnDataUrl).then(response => {
      console.log('component did mount', response.data);
      this.setState({
        heroBtns: response.data
      });
    });
  }
  render(){
    return (
      <div className="co-p-homepage">
        <div className="co-p-header-masthead co-p-header-masthead-large homepage co-p-background-hexagons homepage-hex">
          <div className="container co-p-header-masthead-content">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <h1><span>Tectonic is </span><span> enterprise Kubernetes </span><span> in your environment.</span></h1>
                <div className="cta-section-wrap">
                    <p className="header-sub-text">Tectonic now ships with Kubernetes 1.5.4</p>
                    <div className="cta-section">
                    <div className="cta-buttons">
                        <a className="new-btn btn-red" data-category="Homepage: header" data-event="Tectonic: Sign Up" href="#">
                          Sign up for free
                        </a>
                        <a className="new-btn btn-clear" data-category="Homepage: header" data-event="Tectonic: Documentation" href="#">
                          Read the docs
                        </a>
                        </div>
                        <div className="cta-side-text">
                          <p>Available for cloud and bare metal.</p>
                          <p>Free for use up to 10 nodes.</p>
                        </div>
                    </div>
                  </div>
                </div>
              <div className="col-lg-4  col-lg-offset-1 col-md-5 col-sm-5 col-xs-12 primer-block primer-upper">
              {this.state.heroBtns.map(item => {
                return (
                  <div className="top-block" key={item.nid[0].value}>
                    <a href="#" data-category="Homepage: header" data-event="kubernetes primer" />
                    <div className="top-block-info">
                      <p>{item.field_descriptor[0].value}</p>
                      <p><a href={item.field_link[0].uri} data-category="Homepage: header" data-event="kubernetes primer">{item.title[0].value}</a></p>
                    </div>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
