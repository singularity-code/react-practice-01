import React from "react";

function IterationSample() {
  const names = ["snow", "ice", "fire", "wind"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>{nameList}</ul>
      
    </div>
  );
}

export default IterationSample;
