import React, {Component} from 'react';

import '../styles/CV.css';


class CV extends Component {
  constructor(){
      super();
  }
  render(){

      return (
      <div className="CV">
            <div className='left-cv'>
                <h2>General Information</h2>
                <h2>Practival Experience</h2>
                <h2>Education</h2>
                <h2>Further Education</h2>
            </div>
            <div className='right-cv'>
                <img  src={require(`../images/avatar.png`)} />
            </div>

      </div>
    );
  }
}
  export default CV;
  