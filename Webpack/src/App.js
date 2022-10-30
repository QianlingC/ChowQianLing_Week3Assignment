import React from "react";
import Hooks from "./Hooks";
import HOC from "./HOC";
import ControlledForm from "./ControlledForm";

const App = () => {
  return (
    <>
      <p>Question 1: see the components change colours</p>
      <p>Question 3</p>
      <Hooks />
      <p>Question 4</p>
      <ControlledForm />
    </>
  );
};

export default HOC(App);
