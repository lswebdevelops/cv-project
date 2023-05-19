import React, { useState } from 'react';
import Form1 from './Experiences';
import Form2 from './Footer';
import Form3 from './Information';
import "../App.css"

function MyPage() {
  const [submittedText, setSubmittedText] = useState([]);

  const handleSetSubmittedText = (formIndex, formObject) => {
    setSubmittedText((prevSubmittedText) => {
      const updatedText = [...prevSubmittedText];
      updatedText[formIndex] = formObject;
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
        {submittedText.map((formObject, index) => (
          <div key={index} className="content-item">
            <div className="content-info">
            
              {index === 0 && (
              <div className="content-image">
                <img className='avatar-image' src={require(`../images/avatar.png`)}  />
              </div>
            )}  <h1>
                {index === 0 && 'Information'}
                {index === 1 && 'Experience'}
                {index === 2 && 'Education'}
              </h1>
              <p>Name: {formObject.name}</p>
              <p>Email: {formObject.email}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
