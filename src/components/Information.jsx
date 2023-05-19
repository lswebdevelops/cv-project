import React, {Component} from 'react';

import '../styles/Information.css';


class Information extends Component {
  constructor(){
      super();
  }
  render(){

      return (
      <div className="Information">
        <h2>Information</h2>
        <form className='form-information'>
            <label  className='name_label' htmlFor="name">Name:</label>
              <input placeholder='Type your name' className='name_input' type="text" id='name' />
            <label  className='email_label' htmlFor="email">Email:</label>
              <input placeholder='Type your email'  className='email_input'type="text" id='email'/>
            <label  className='phone_number_label' htmlFor="phone_number">Phone number:</label>
            <input placeholder='Type your phone number' className='phone_number_input' type="text" id='phone_number'/>
            <br />
            <button className='btnInformation'>Submit personal information</button>
        </form>

      </div>
    );
  }
}
  export default Information;
  