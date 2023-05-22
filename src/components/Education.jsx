
import React, { useState } from "react";
function Form3({ setSubmittedText, formIndex }) {
  const [name, setName] = useState("");
  const [eduEmail, setEduEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [city, setCity] = useState("");
  const [degree, setDegree] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      eduEmail,
      university,
      city,
      degree,
      subject,
      from,
      to,
    };
    setSubmittedText(formIndex, formData);
  };
  return (
    <form className="form-education" onSubmit={handleSubmit}>
      <h2>Education</h2>
      <label>
       
        <input
          className="input-form"
          placeholder="Course Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
     
      <label>
       
        <input
          className="input-form"
          placeholder="University Name"
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
      </label>
      {/* eduEmail, setEduEmail */}

      <label>
       
       <input
         className="input-form"
         placeholder="Email"
         type="email"
         value={eduEmail}
         onChange={(e) => setEduEmail(e.target.value)}
       />
     </label>

      <label>
       
        <input
          className="input-form"
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
       
        <input
          className="input-form"
          placeholder="Degree"
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </label>
      <label>
      
        <input
          className="input-form"
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </label>
      <label>
       
        <input
          className="input-form"
          placeholder="From"
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </label>
      <label>
        
        <input
          className="input-form"
          placeholder="To"
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form3;
