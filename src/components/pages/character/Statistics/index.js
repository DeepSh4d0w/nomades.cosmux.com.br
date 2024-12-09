import { useState } from "react";
import { Input } from "../../../global/Input";
import { Checkbox } from "../../../global/Checkbox";
import { setCookie } from "nookies";

export function Statistics({ character, setCharacter }) {
  const [life, setLife] = useState(Array(character.life.max).fill(false));
  const [focus, setFocus] = useState(Array(character.focus.max).fill(false));
  const [power, setPower] = useState(Array(character.power.max).fill(false));

  function handleUpdateState(list) {
    for (let i = 0; i < list.length; i++) {
      for (let ii = 0; ii < list[i].source.current; ii++) {
        list[i].state[ii] = true;
      }
    }
  }

  handleUpdateState([
    { source: character.life, state: life },
    { source: character.focus, state: focus },
    { source: character.power, state: power },
  ]);

  function handleStateChange(index, name, state, setState) {
    const updatedState = [...state];
    updatedState[index] = !updatedState[index];

    // Desmarcando todos os checkboxes acima do checkbox clicado
    for (let i = 0; i < index; i++) {
      updatedState[i] = true;
    }

    for (let i = state.length - 1; i > index; i--) {
      updatedState[i] = false;
    }

    setCharacter({
      ...character,
      [name]: {
        max: character[name].max,
        current: updatedState.filter((value) => value == true).length,
      },
    });
    setCookie(
      null,
      "character",
      JSON.stringify({
        ...character,
        [name]: {
          max: character[name].max,
          current: updatedState.filter((value) => value == true).length,
        },
      }),
      {
        maxAge: 86400 * 365,
      }
    );
    setState(updatedState);
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
              onChange={() => handleStateChange(index, "life", life, setLife)}
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
            <Input
              value={character.force.name}
              onChange={(newName) =>
                setCookie(
                  null,
                  "character",
                  JSON.stringify({
                    ...character,
                    force: { name: newName, value: character.force.value },
                  }),
                  {
                    maxAge: 86400 * 365,
                  }
                )
              }
            />
            <div>
              <Input
                value={character.force.value}
                onChange={(newValue) =>
                  setCookie(
                    null,
                    "character",
                    JSON.stringify({
                      ...character,
                      force: { name: character.force.name, value: newValue },
                    }),
                    {
                      maxAge: 86400 * 365,
                    }
                  )
                }
              />
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
            <Input
              value={character.protection.name}
              onChange={(newValue) =>
                setCookie(
                  null,
                  "character",
                  JSON.stringify({
                    ...character,
                    protection: {
                      name: character.protection.name,
                      value: newValue,
                    },
                  }),
                  {
                    maxAge: 86400 * 365,
                  }
                )
              }
            />
            <div>
              <Input
                value={character.protection.value}
                onChange={(newValue) =>
                  setCookie(
                    null,
                    "character",
                    JSON.stringify({
                      ...character,
                      protection: {
                        name: character.protection.name,
                        value: newValue,
                      },
                    }),
                    {
                      maxAge: 86400 * 365,
                    }
                  )
                }
              />
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
                onChange={() =>
                  handleStateChange(index, "focus", focus, setFocus)
                }
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
                onChange={() =>
                  handleStateChange(index, "power", power, setPower)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
