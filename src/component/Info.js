import React, { useState, useEffect } from "react";

const Info = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("Render Complete");
    console.log({
      firstName,
      lastName,
    });
    return () => {
      console.log("callback");
      console.log(firstName);
    };
  }, []);

  const onChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {" "}
        {visible ? "Show" : "Hide"}{" "}
      </button>
      {visible ? "Toogle Text" : ""}
      <div>
        <input value={firstName} onChange={onChangeName}></input>
        <input value={lastName} onChange={onChangeLastName}></input>
      </div>
      <div>
        <b>First Name: </b> {firstName}
      </div>
      <div>
        <b>Last Name: </b> {lastName}
      </div>
    </div>
  );
};

export default Info;
