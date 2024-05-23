/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "↵") {
      onEnter();
    } else if (keyVal === "⌫") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}
export default Key;
