// import React, { Component } from "react";
// import "../styles/Information.css";

// class Informations extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { infos } = this.props;

//     return (
//       <div className="CV">
//         <ul>
//           {infos.map((info) => (
//             <div key={info.id}>
//              <div className="navbar-cv">
//                {/* navbar */}
//                <li className="info-li-firstName">{info.firstName}</li>
//               <li className="info-li-lastName">{info.lastName}</li>
//               <li className="info-li-title">{info.title}</li>
//              </div>
              
//               <div className="left-content-cv">
//                 {/* left content of ready cv */}
//               {/* description */}
//               <h2>Description</h2>
//               <li className="info-li-description">{info.description}</li>
          

//              </div>             
                         
//             </div>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Informations;

import React, { useState } from 'react';

function Form3({ setSubmittedText, formIndex }) {
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
        Form 3:
        <input type="text" value={formData} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form3;
