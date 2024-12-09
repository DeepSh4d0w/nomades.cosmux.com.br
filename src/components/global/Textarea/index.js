import { useState } from "react";

export function Textarea({ value }) {
  const [textareaValue, setTextareaValue] = useState(value);

  return (
    <textarea
      className="bg-zinc-200 h-32 resize-none outline-none pl-2 pt-2 flex-1"
      value={textareaValue}
      onChange={(event) => setTextareaValue(event.target.value)}
    />
  );
}
