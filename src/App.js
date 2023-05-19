import React, {Component} from 'react';
import './App.css';
import Information from './components/Information';
import Education from './components/EducationExperience';
import Practical from './components/PracticalExperience';


class App extends Component {
  constructor(){
      super();
  }
  render(){

      return (
    <div className="App">
      <Information />
      <Education />
      <Practical />
    </div>
  );
}
}

export default App;
