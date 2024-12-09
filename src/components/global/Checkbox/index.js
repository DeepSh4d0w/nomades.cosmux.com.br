import { useEffect, useState } from "react";

export function Checkbox({ type, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange();
  };

  return (
    <input
      data-type={type}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
      className="
        md:col-span-1 
        data-[type=life]:size-8 data-[type=life]:md:size-12 
        data-[type=other]:w-[47px] data-[type=other]:md:w-[67px] 
        data-[type=other]:h-8 data-[type=other]:md:h-10 
        appearance-none bg-zinc-300 border-none 
        data-[type=life]:checked:bg-red-600 data-[type=other]:checked:bg-black 
      "
    />
  );
}
