import { useState } from "react";

export function Input({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  function handleOnChange(event) {
    const newValue = event.target.value;

    setInputValue(newValue);
    onChange && onChange(newValue);
  }

  return (
    <input
      type="text"
      className="bg-zinc-200 h-10 w-full outline-none pl-2"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
}
