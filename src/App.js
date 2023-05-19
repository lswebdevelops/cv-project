import React, { Component } from "react";
import "./App.css";
import Information from "./components/Information";
import Education from "./components/EducationExperience";
import Practical from "./components/PracticalExperience";
import Footer from "./components/Footer";
import CV from "./components/CV";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <h1 className="page-title">CV Generator</h1>
     
        <div className="content">
          <div className="left-container">
            <Information />
            <Education />
            <Practical />
          </div>
          <div className="right-container">
            <CV />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
