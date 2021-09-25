import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Welcome!");
  const onClickExit = () => setMessage("Bye!");

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}></button>
      <button onClick={onClickExit}></button>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}></button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}></button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Say;
