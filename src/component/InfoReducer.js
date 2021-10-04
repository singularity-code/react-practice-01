import React, { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const {name, nickname} = state;
  const onChange = e => {
    dispatch(e.target);
  };
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
        <b>Nick Name: </b> {nickname}
      </div>
    </div>
  );
};

export default InfoReducer;
