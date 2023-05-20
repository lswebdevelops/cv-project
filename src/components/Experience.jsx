import React, { useState } from "react";

function Form2({ setSubmittedText, formIndex }) {
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [expCity, setExpCity] = useState("");
  const [expFrom, setExpFrom] = useState("");
  const [expTo, setExpTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      position,
      company,
      expCity,
      expFrom,
      expTo,
    };
    setSubmittedText(formIndex, formData);
  };

  return (
    <form className="form-experience" onSubmit={handleSubmit}>
      <h2>Experience</h2>
      <label>
       
        <input
          className="input-form"
          placeholder="Position"
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <label>
     
        <input
          className="input-form"
          placeholder="Company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
      
        <input
          className="input-form"
          placeholder="City"
          type="text"
          value={expCity}
          onChange={(e) => setExpCity(e.target.value)}
        />
      </label>
      <label>
    
        <input
          className="input-form"
          placeholder="From"
          type="text"
          value={expFrom}
          onChange={(e) => setExpFrom(e.target.value)}
        />
      </label>
      <label>
        
        <input
          className="input-form"
          placeholder="To"
          type="text"
          value={expTo}
          onChange={(e) => setExpTo(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form2;
