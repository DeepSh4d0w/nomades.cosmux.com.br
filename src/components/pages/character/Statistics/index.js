import { useState } from "react";
import { Input } from "../../../global/Input";
import { Checkbox } from "../../../global/Checkbox";

export function Statistics({ character }) {
  const [life, setLife] = useState(Array(character.life.max).fill(true));
  const [focus, setFocus] = useState(Array(character.focus.max).fill(false));
  const [power, setPower] = useState(Array(character.power.max).fill(false));

  function handleLifeChange(index) {
    const updatedLife = [...life];
    updatedLife[index] = !updatedLife[index];

    // Desmarcando todos os checkboxes acima do checkbox clicado
    for (let i = 0; i < index; i++) {
      updatedLife[i] = true;
    }

    for (let i = 19; i > index; i--) {
      updatedLife[i] = false;
    }

    setLife(updatedLife);
  }

  function handleFocusChange(index) {
    const updatedFocus = [...focus];
    updatedFocus[index] = !updatedFocus[index];

    // Desmarcando todos os checkboxes acima do checkbox clicado
    for (let i = 0; i < index; i++) {
      updatedFocus[i] = true;
    }

    for (let i = 6; i > index; i--) {
      updatedFocus[i] = false;
    }

    setFocus(updatedFocus);
  }

  function handlePowerChange(index) {
    const updatedPower = [...power];
    updatedPower[index] = !updatedPower[index];

    // Desmarcando todos os checkboxes acima do checkbox clicado
    for (let i = 0; i < index; i++) {
      updatedPower[i] = true;
    }

    for (let i = 6; i > index; i--) {
      updatedPower[i] = false;
    }

    setPower(updatedPower);
  }

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 justify-between gap-x-10 gap-y-4">
      <div className="w-full flex flex-col flex-1 items-center justify-between gap-4 md:row-span-1 md:col-span-2">
        <span className="font-mono">
          <span className="font-bold">VIDA</span>
        </span>
        <div className="w-full grid grid-cols-10 md:grid-cols-20 md:grid-flow-col gap-x-1.5 gap-y-2 md:gap-1.5">
          {life.map((isChecked, index) => (
            <Checkbox
              key={index}
              type="life"
              checked={isChecked}
              onChange={() => handleLifeChange(index)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-1 justify-between gap-10 md:col-span-1 md:row-span-1">
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-mono">
            <span className="font-bold">FORÇA</span>
          </span>
          <div className="flex gap-2">
            <Input value={character.force.name} />
            <div>
              <Input value={character.force.value} />
            </div>
          </div>
        </label>
      </div>

      <div className="flex flex-1 justify-between gap-10 col-span-1 row-span-1">
        <label className="flex flex-1 flex-col gap-2 md:text-end">
          <span className="font-mono">
            <span className="font-bold">PROTEÇÃO</span>
          </span>
          <div className="flex flex-1 w-full gap-2">
            <Input value={character.protection.name} />
            <div>
              <Input value={character.protection.value} />
            </div>
          </div>
        </label>
      </div>

      <div className="flex flex-row justify-between md:col-span-1 md:row-span-1">
        <div className="flex flex-col gap-2">
          <span className="font-mono">
            <span className="font-bold">FOCO</span>
          </span>
          <div className="flex-1 flex flex-row gap-2">
            {focus.map((isChecked, index) => (
              <Checkbox
                key={index}
                type="other"
                checked={isChecked}
                onChange={() => handleFocusChange(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between md:col-span-1 md:row-span-1">
        <div className="flex flex-col md:items-end gap-2">
          <span className="font-mono">
            <span className="font-bold">PODER</span>
          </span>
          <div className="flex flex-row gap-2">
            {power.map((isChecked, index) => (
              <Checkbox
                key={index}
                type="other"
                checked={isChecked}
                onChange={() => handlePowerChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
