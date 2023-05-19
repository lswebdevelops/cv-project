import React, { useState } from 'react';
import Form1 from './Experiences';
import Form2 from './Footer';
import Form3 from './Information';

function MyPage() {
  const [submittedText, setSubmittedText] = useState([]);

  const handleSetSubmittedText = (formIndex, text) => {
    setSubmittedText((prevSubmittedText) => {
      const updatedText = [...prevSubmittedText];
      updatedText[formIndex] = text;
      return updatedText;
    });
  };

  return (
    <div className="container">
      <div className="input-forms">
        <Form1 setSubmittedText={handleSetSubmittedText} formIndex={0} />
        <Form2 setSubmittedText={handleSetSubmittedText} formIndex={1} />
        <Form3 setSubmittedText={handleSetSubmittedText} formIndex={2} />
      </div>
      <div className="content">
        {submittedText.map((text, index) => (
          <p key={index} className="submitted-text">{text}</p>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
