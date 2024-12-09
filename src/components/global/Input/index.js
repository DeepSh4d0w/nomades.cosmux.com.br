import { useState } from "react";

export function Input({ value }) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <input
      type="text"
      className="bg-zinc-200 h-10 w-full outline-none pl-2"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}