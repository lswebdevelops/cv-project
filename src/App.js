import React, { Component } from "react";
import "./App.css";
import './styles/PracticalExperience.css';
import './styles/Information.css';
import './styles/PracticalExperience.css';


import Footer from "./components/Footer";
import CV from "./components/CV";
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "",
        email: "",
        phone_number: "",
        id: uniqid(),
      },
      infos: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        [id]: value,
      },
    }));
  };
onSubmitInfo = (e) =>{
  e.preventDefault();
// Check if task.text is empty
if (this.state.info.name.trim() === "") {
  return; // Exit the function if the text is empty
}
if (this.state.info.email.trim() === "") {
  return; 
}
if (this.state.info.phone_number.trim() === "") {
  return;
}


  const newInfo = {
    name: this.state.info.name,
    email: this.state.info.email,
    phone_number: this.state.info.phone_number,
    id: uniqid(),
  };
  this.setState(
    (prevState) =>({
      infos: [...prevState.infos, newInfo],
      info: {
        name: "",
        email: "",
        phone_number: "",
        id: uniqid(),
      },
    }),
  )
}


  render() {
    const { info, infos } = this.state;
    return (
      <div className="App">
        <h1 className="page-title">CV Generator</h1>
        <div className="content">
          <div className="left-container">
            <form className="form-information" onSubmit={this.onSubmitInfo}>
              <label className="name_label" htmlFor="name">
                Name:
              </label>
              <input
                onChange={this.handleChange}
                value={info.name}
                className="name_input"
                type="text"
                id="name"
              />
              <label className="email_label" htmlFor="email">
                Email:
              </label>
              <input
                onChange={this.handleChange}
                value={info.email}
                className="email_input"
                type="text"
                id="email"
              />
              <label className="phone_number_label" htmlFor="phone_number">
                Phone number:
              </label>
              <input
                onChange={this.handleChange}
                value={info.phone_number}
                className="phone_number_input"
                type="text"
                id="phone_number"
              />
              <br />
              <button>Submit</button>
            </form>
            
            <hr />
         
          </div>
          <div className="right-container">
          <h1>Information</h1>
            <CV 
            infos={infos}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
