
import React, { useState } from "react";
import Form1 from "./Information";
import Form2 from "./Experience";
import Form3 from "./Education";
import "../App.css";
function MyPage() {
  const [submittedText, setSubmittedText] = useState([]);
  const dash = "-";

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
                  <div className="div-fistlastname">
                    <p>{formObject.firstName} {formObject.lastName}</p>
                        <br/>
                    <p>{formObject.title}</p>
                  </div>
                  <img
                    className="avatar-image"
                    src={require(`../images/avatar.png`)}
                    alt="avatar"
                  />
                </div>
              )}
              <h1>{index === 0 && "Information"}</h1>
              <h1>
                {index === 1 && "Experience"}
                {index === 2 && "Education"}
              </h1>
              <p>{formObject.email}</p>
              <p>{formObject.address}</p>
              <p>{formObject.phoneNumber}</p>
              <p>{formObject.description}</p>
              <p>{formObject.position}</p>
              <p>{formObject.company}</p>
              <p>{formObject.expCity}</p>
              {formObject.expFrom && formObject.expTo && (
  <p>{`${formObject.expFrom} - ${formObject.expTo}`}</p>
)}

              <p>{formObject.name}</p>
              <p>{formObject.eduEmail}</p>
              <p>{formObject.university}</p>
              <p>{formObject.city}</p>
              <p>{formObject.degree}</p>
              <p>{formObject.subject}</p>
              {formObject.from && formObject.to && (
        <p>{`${formObject.from} ${dash} ${formObject.to}`}</p>
      )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyPage;
