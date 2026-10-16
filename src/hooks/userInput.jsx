import { useState } from "react";

export function userInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clearInput = () => {
    setValue("");
  };

  return { value, onChange, clearInput };
}
