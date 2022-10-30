import React from "react";

//colorChanger
const HOC = (Prospect) => {
  console.log(Prospect); //a component
  const color = ["pink", "orange", "gold", "grey", "blue"];

  const randomColour = color[Math.floor(Math.random() * 5)];

  return () => {
    return (
      <div style={{ backgroundColor: randomColour }}>
        <Prospect />
      </div>
    );
  };
};

export default HOC;
