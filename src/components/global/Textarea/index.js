import { useState } from "react";

export function Textarea({ value, onChange }) {
  const [textareaValue, setTextareaValue] = useState(value);

  function handleOnChange(event) {
    const newValue = event.target.value;

    setTextareaValue(newValue);
    onChange && onChange(newValue);
  }

  return (
    <textarea
      className="bg-zinc-200 h-32 resize-none outline-none pl-2 pt-2 flex-1"
      value={textareaValue}
      onChange={handleOnChange}
    />
  );
}
