// import React, { Component } from "react";
// import "../styles/Information.css";


// class Experiences extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { experiences } = this.props;

//     return (
//       <div className="CV">
//         <ul>
//           {experiences.map((experience) => (
//             <div key={experience.id}>
           
//               <div className="left-content-cv">
//                 {/* left content of ready cv */}
             
//               {/* experience */}
//               <h2>Experience</h2>
//               <li className="info-li-position">{experience.position}</li>
//               <li className="info-li-company">{experience.company}</li>
//               <li className="info-li-city">{experience.city}</li>
//               <li className="info-li-universityTo">{experience.universityTo}</li>
//               <li className="info-li-from">{experience.from}</li>
//               <li className="info-li-to">{experience.to}</li>
//                 </div>
//               </div>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Experiences;

import React, { useState } from 'react';

function Form1({ setSubmittedText, formIndex }) {
  const [formData, setFormData] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(formIndex, formData);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFormData(value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Form 1:
        <input type="text" value={formData} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form1;
