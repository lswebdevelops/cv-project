import React, { Component } from "react";
import "../styles/CV.css";

class CV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { infos } = this.props;

    return (
      <div className="CV">
        <ul>
          {infos.map((info) => (
            <div key={info.id}>
             <div className="navbar-cv">
               {/* navbar */}
               <li className="info-li-firstName">{info.firstName}</li>
              <li className="info-li-lastName">{info.lastName}</li>
              <li className="info-li-title">{info.title}</li>
             </div>
              
              <div className="left-content-cv">
                {/* left content of ready cv */}
              {/* description */}
              <h2>Description</h2>
              <li className="info-li-description">{info.description}</li>

              {/* experience */}
              <h2>Experience</h2>
              <li className="info-li-position">{info.position}</li>
              <li className="info-li-company">{info.company}</li>
              <li className="info-li-city">{info.city}</li>
              <li className="info-li-universityTo">{info.universityTo}</li>
              <li className="info-li-from">{info.from}</li>
              <li className="info-li-to">{info.to}</li>
              {/* education */}
              <h2>Education</h2>
              <li className="info-li-universityName">{info.universityName}</li>
              <li className="info-li-universityCity">{info.universityCity}</li>
              <li className="info-li-universityFrom">{info.universityFrom}</li>
              <li className="info-li-degree">{info.degree}</li>
              <li className="info-li-subject">{info.subject}</li>

              </div>
             <div className="right-content-cv">
               {/* right content of ready cv */}
               <li className="info-li-address">{info.address}</li>
              <li className="info-li-phone_number">{info.phone_number}</li>
              <li className="info-li-email">{info.email}</li>
             </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default CV;
