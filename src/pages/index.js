import { parseCookies, setCookie } from "nookies";
import { useEffect, useState } from "react";

function Checkbox({ type, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked); // Chama a função de callback com o novo estado
  };

  return (
    <input
      data-type={type}
      type="checkbox"
      checked={isChecked}
      // onChange={() => setIsChecked(!isChecked)}
      onChange={handleChange}
      className="md:col-span-1 data-[type=life]:size-8 data-[type=life]:md:size-12 data-[type=other]:w-[47px] data-[type=other]:md:w-[67px] data-[type=other]:h-8 data-[type=other]:md:h-10 appearance-none bg-zinc-300 border-none data-[type=life]:checked:bg-red-600 data-[type=other]:checked:bg-black checked:hover:animate-pulse"
    />
  );
}

function Input({ value }) {
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

function Textarea({ value }) {
  const [textareaValue, setTextareaValue] = useState(value);

  return (
    <textarea
      className="bg-zinc-200 h-32 resize-none outline-none pl-2 pt-2 flex-1"
      value={textareaValue}
      onChange={(event) => setTextareaValue(event.target.value)}
    />
  );
}

function Header() {
  return (
    <header className="h-20 md:h-32 w-full flex items-end justify-center px-3 md:px-10 pb-4">
      <div className="w-full flex items-end justify-between">
        <span className="flex flex-col leading-[14px] md:leading-[15px] font-inter font-bold md:text-lg text-sm">
          <span>NÔ</span>
          <span>MA</span>
          <span>DES</span>
        </span>

        <span className="font-mono tracking-[10px] text-xs md:text-base w-44 md:w-fit flex flex-col md:flex-row md:gap-2">
          <span className="font-light">DIÁRIO DE</span>
          <span className="font-bold">PERSONAGEM</span>
        </span>
      </div>
    </header>
  );
}

function Charactetistics({ character }) {
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-4">
      <label className="w-full flex flex-col-reverse md:flex-col md:text-center gap-2 md:col-span-2">
        <Input value={character.name} />
        <span className="font-mono">
          <span className="font-bold">NOME </span>
          <span className="font-light">& IDADE</span>
        </span>
      </label>

      <label className="h-[200px] flex flex-1 flex-col-reverse md:flex-col gap-2">
        <Textarea value={character.description} />
        <span className="font-mono">
          <span className="font-bold">DESCRIÇÃO</span>
          <span className="font-light">, TIPO, ESPECIALIDADE & ARQUÉTIPO</span>
        </span>
      </label>

      <label className="flex flex-1 flex-col-reverse md:flex-col gap-2 md:text-end">
        <Textarea value={character.conflict} />
        <span className="font-mono">
          <span className="font-bold">CONFLITO</span>
        </span>
      </label>
    </div>
  );
}

function Statistics({ character }) {
  const [life, setLife] = useState(Array(20).fill(true));
  const [focus, setFocus] = useState(Array(7).fill(false));
  const [power, setPower] = useState(Array(7).fill(false));

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
        <div className="w-full grid grid-cols-10 md:grid-cols-20 md:grid-flow-col gap-x-4 gap-y-2 md:gap-1.5">
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

function Details({ character }) {
  return (
    <div className="py-4 grid md:grid-rows-4 md:grid-cols-2 gap-x-10 gap-y-4 items-start">
      <div className="col-span-1 row-span-4 flex flex-col gap-2">
        <label className="flex flex-1 flex-col gap-2 ">
          <span className="font-mono">
            <span className="font-bold">TALENTOS</span>
          </span>
          <div className="flex flex-col gap-2">
            <Input value={character.talent[0]} />
            <Input value={character.talent[1]} />
            <Input value={character.talent[2]} />
            <Input value={character.talent[3]} />
            <Input value={character.talent[4]} />
            <Input value={character.talent[5]} />
            <Input value={character.talent[6]} />
            <Input value={character.talent[7]} />
            <Input value={character.talent[8]} />
            <Input value={character.talent[9]} />
            <Input value={character.talent[10]} />
            <Input value={character.talent[11]} />
          </div>
        </label>

        <label className="flex flex-1 flex-col gap-2">
          <span>
            <span className="font-mono">
              <span className="font-light">PONTOS DE </span>
              <span className="font-bold">EXPERIÊNCIA</span>
            </span>
          </span>
          <Input value={character.experience} />
        </label>
      </div>

      <label className="flex flex-1 flex-col md:text-end gap-2 col-span-1 row-span-2 h-full">
        <span className="font-mono">
          <span className="font-bold">PERTENCES</span>
        </span>
        <Textarea value={character.belongings} />
      </label>

      <label className="flex flex-1 flex-col gap-2 md:text-end col-span-1 row-span-2 h-full">
        <span className="font-mono">
          <span className="font-bold">NOTAS</span>
        </span>
        <Textarea value={character.notes} />
      </label>
    </div>
  );
}

export default function Sheet() {
  const character = {
    id: 1,
    name: "",
    description: "",
    conflict: "",
    life: { max: 20, current: 20 },
    force: { name: "", value: "" },
    protection: { name: "", value: "" },
    talent: [],
    experience: "",
    belongings: "",
    notes: "",
  };

  return (
    <div className="h-screen w-screen grid flex-col divide-y-2 items-center justify-center divide-zinc-200 px-5 md:px-36">
      <div className="">
        <Header />

        <main>
          <form className="flex flex-col divide-y-2 divide-zinc-200">
            <Charactetistics character={character} />
            <Statistics character={character} />
            <Details character={character} />
          </form>
        </main>
      </div>
    </div>
  );
}
