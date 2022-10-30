import React, { useState } from "react";

const ControlledForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState({});
  const [lastNameError, setLastNameError] = useState({});
  const [emailError, setEmailError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setFirstNameError = "";
      setLastNameError = "";
      setEmailError = "";
    }
  };

  const formValidation = () => {
    const firstNameError = {};
    const lastNameError = {};
    const emailError = {};
    let isValid = true;

    if (firstName.trim().length === 0) {
      firstNameError.firstNameEmpty = "This field is empty.";
      isValid = false;
    }

    if (lastName.trim().length === 0) {
      lastNameError.lastNameEmpty = "This field is empty.";
      isValid = false;
    }

    if (email.trim().length === 0) {
      emailError.emailEmpty = "This field is empty.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.emailWrongInput = "This email format is wrong.";
      isValid = false;
    }
    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailError(emailError);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br></br>
      {Object.keys(firstNameError).map((key) => {
        return <p style={{ color: "black" }}>{firstNameError[key]}</p>;
      })}
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br></br>
      {Object.keys(lastNameError).map((key) => {
        return <p style={{ color: "black" }}>{lastNameError[key]}</p>;
      })}
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {Object.keys(emailError).map((key) => {
        return <p style={{ color: "black" }}>{emailError[key]}</p>;
      })}
      <button type="submit">Submit</button>
    </form>
  );
};
export default ControlledForm;
