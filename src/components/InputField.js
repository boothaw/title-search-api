import React, { useState } from "react";

const InputField = ({ onValue, value }) => {
  // const [inputValue, setInputValue] = useState("");
  // const
  const handleChange = event => {
    // setInputValue(event.currentTarget.value);
    onValue(event.currentTarget.value);
  };

  return <input value={value} onChange={handleChange} />;
};

export default InputField;
