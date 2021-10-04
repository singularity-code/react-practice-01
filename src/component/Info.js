import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("Render Complete");
    console.log({
      name,
      nickName,
    });
    return () => {
      console.log('callback')
      console.log(name)
    }
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickName} onChange={onChangeNickName}></input>
      </div>
      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>Nick Name: </b> {nickName}
      </div>
    </div>
  );
};

export default Info;
