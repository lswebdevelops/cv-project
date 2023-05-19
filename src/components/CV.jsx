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
            <React.Fragment key={info.id}>
              <li className="info-li">{info.name}</li>
              <li className="info-li">{info.email}</li>
              <li className="info-li">{info.phone_number}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}
export default CV;
