import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faThumbsUp } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faThumbsUp, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my skill sets</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>HTML, CSS, Ruby, Ruby on Rails, JavaScript, React, PHP, Laravel etc. </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Like technology</h3>
              <p>I love to develop.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGlobeEurope} size="2x" />
              </div>

              <h3>English and Spanish</h3>
              <p>I speak English and Spanish at a conversational level.</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faThumbsUp} size="2x" />
              </div>

              <h3>Positive thinking</h3>
              <p>I think I am a positive person. I also like to work with people who are positive.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
