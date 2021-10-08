import React from "react";
import useInputs from "../custom_hook/reducer";

const InfoCustomInput = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>NickName: </b> {nickname}
      </div>
    </div>
  );
};

export default InfoCustomInput;
