import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const tokenbio = this.props.data.tokenbio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={2000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                // src={profilepic}
                alt="BTC 2.0 PIC"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{tokenbio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contract Details</h2>
                  <span className="address">
                    <span>{name}</span>
                    <br />
                    <p style={{marginLeft:'10px'}}>
                      {city}
                      <br />
                      {state}
                      <br />
                      {zip}
                      <br />
                      <span>{phone}</span>
                    </p>
                    {/* <br />
                    <span>{email}</span> */}
                  </span>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
