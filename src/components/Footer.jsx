// import React from "react";
// import '../styles/Footer.css';
// import { FaGithub } from "react-icons/fa";

// function Footer(){
//     return(
//         <footer>
//           LS-WEB Development {" "}
//           <a href="https://github.com/lswebdevelops" target="_blank" rel="noopener noreferrer">
//           <FaGithub />
//           </a>
//         </footer>
//     )
// }
// export default Footer;

import React, { useState } from 'react';

function Form2({ setSubmittedText, formIndex }) {
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
        Form 2:
        <input type="text" value={formData} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form2;
