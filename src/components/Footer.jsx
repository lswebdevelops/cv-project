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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email };
    setSubmittedText(formIndex, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form2;
