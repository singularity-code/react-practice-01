import React, { useState } from "react";

const EventPractice2 = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const [username, message] = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    setForm({
      username: '',
      message: ''
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="Yourname"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="Say something"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>

      <button onClick={onClick}>Confirm</button>
    </div>
  );
};

export default EventPractice2;
