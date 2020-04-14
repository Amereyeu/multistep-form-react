import React from "react";

function Confirm({
  step,
  setStep,
  firstName,
  lastName,
  email,
  city,
  bio,
  occupation,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <dl>
            <dt>First Name:</dt>
            <dl>{firstName}</dl>
            <dt>Last Name:</dt>
            <dl>{lastName}</dl>
            <dt>Email:</dt>
            <dl>{email}</dl>
            <dt>City:</dt>
            <dl>{city}</dl>
            <dt>Occupation:</dt>
            <dl>{occupation}</dl>
            <dt>Bio:</dt>
            <dl>{bio}</dl>
          </dl>

          <button
            type="submit"
            className="btn btn-primary mr-3"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
