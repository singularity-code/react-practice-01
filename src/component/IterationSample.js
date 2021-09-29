import React, { useState } from "react";

function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "snow" },
    { id: 2, text: "ice" },
    { id: 3, text: "fire" },
    { id: 4, text: "wind" },
  ]);
  const [inputText, setInpuText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  const onChange = (e) => setInpuText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInpuText("");
  };
  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>INSERT</button>
      <ul>{nameList}</ul>
    </div>
  );
}

export default IterationSample;
