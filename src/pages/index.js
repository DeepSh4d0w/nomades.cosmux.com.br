import { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      className="size-9 md:size-12 appearance-none bg-zinc-300 border-none checked:bg-red-600 checked:hover:animate-pulse"
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

function Charactetistics() {
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-10 md:gap-y-4">
      <label className="w-full flex flex-col-reverse md:flex-col md:text-center gap-2 md:col-span-2">
        <input
          type="text"
          className="bg-zinc-200 h-10 w-full outline-none pl-2"
        />
        <span className="font-mono">
          <span className="font-bold">NOME </span>
          <span className="font-light">& IDADE</span>
        </span>
      </label>

      <label className="flex flex-1 flex-col-reverse md:flex-col gap-2">
        <textarea className="bg-zinc-200 h-32 resize-none outline-none pl-2 pt-2" />
        <span className="font-mono">
          <span className="font-bold">DESCRIÇÃO</span>
          <span className="font-light">, TIPO, ESPECIALIDADE & ARQUÉTIPO</span>
        </span>
      </label>

      <label className="flex flex-1 flex-col-reverse md:flex-col gap-2 md:text-end">
        <textarea className="bg-zinc-200 h-32 resize-none  outline-none pl-2 pt-2" />
        <span className="font-mono">
          <span className="font-bold">CONFLITO</span>
        </span>
      </label>
    </div>
  );
}

function Statistics() {
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 justify-between gap-x-10 gap-y-4">
      <div className="w-full flex flex-col flex-1 items-center justify-between gap-4 md:row-span-1 md:col-span-2">
        <span className="font-mono">
          <span className="font-bold">VIDA</span>
        </span>
        <div className="w-full grid grid-cols-2 md:grid-col-1 grid-flow-row md:grid-flow-col gap-2">
          <div className="col-span-2 md:col-span-1 flex justify-between gap-1">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
          <div className="col-span-2 md:col-span-1 flex justify-between gap-1">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-1 justify-between gap-10 md:col-span-1 md:row-span-1">
        <label className="flex flex-1 flex-col gap-2">
          <span className="font-mono">
            <span className="font-bold">FORÇA</span>
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-zinc-300 h-10 w-full outline-none pl-2"
            />
            <input
              type="text"
              className="bg-zinc-300 h-10 w-28 outline-none pl-2"
            />
          </div>
        </label>
      </div>

      <div className="flex flex-1 justify-between gap-10 col-span-1 row-span-1">
        <label className="flex flex-1 flex-col gap-2 md:text-end">
          <span className="font-mono">
            <span className="font-bold">PROTEÇÃO</span>
          </span>
          <div className="flex flex-1 w-full gap-2">
            <input
              type="text"
              className="bg-zinc-300 h-10 w-full outline-none pl-2"
            />
            <input
              type="text"
              className="bg-zinc-300 h-10 w-28 outline-none pl-2"
            />
          </div>
        </label>
      </div>

      <div className="flex flex-row justify-between md:col-span-1 md:row-span-1">
        <label className="flex flex-col gap-2">
          <span className="font-mono">
            <span className="font-bold">FOCO</span>
          </span>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
          </div>
        </label>
      </div>

      <div className="flex flex-row justify-between md:col-span-1 md:row-span-1">
        <label className="flex flex-col md:items-end gap-2">
          <span className="font-mono">
            <span className="font-bold">PODER</span>
          </span>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              className="appearance-none  md:w-[67px] w-[47px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
            <input
              type="checkbox"
              className="appearance-none w-[47px] md:w-[67px] h-8 md:h-10 bg-zinc-300 checked:bg-black"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="py-4 grid md:grid-rows-4 md:grid-cols-2 gap-x-10 gap-y-4 items-start">
      <label className="flex flex-1 flex-col gap-2 col-span-1 row-span-3">
        <span className="font-mono">
          <span className="font-bold">TALENTOS</span>
        </span>
        <div className="flex flex-col gap-2">
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
          <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
        </div>
      </label>

      <label className="flex flex-1 flex-col md:text-end gap-2 col-span-1 row-span-2 h-full">
        <span className="font-mono">
          <span className="font-bold">PERTENCES</span>
        </span>
        <textarea className="bg-zinc-300 resize-none flex flex-1 min-h-36 outline-none pl-2 pt-2" />
      </label>

      <label className="flex flex-1 flex-col gap-2 md:text-end col-span-1 row-span-2 h-full">
        <span className="font-mono">
          <span className="font-bold">NOTAS</span>
        </span>
        <textarea className="bg-zinc-300 resize-none flex flex-1  min-h-36 outline-none pl-2 pt-2" />
      </label>

      <label className="flex flex-1 flex-col gap-2">
        <span>
          <span className="font-mono">
            <span className="font-light">PONTOS DE </span>
            <span className="font-bold">EXPERIÊNCIA</span>
          </span>
        </span>
        <input type="text" className="bg-zinc-300 h-10 outline-none pl-2" />
      </label>
    </div>
  );
}

export default function Sheet() {
  return (
    <div className="flex flex-col divide-y-2 divide-zinc-200 px-5 md:px-36">
      <Header />

      <main>
        <form className="flex flex-col divide-y-2 divide-zinc-200">
          <Charactetistics />
          <Statistics />
          <Details />
        </form>
      </main>
    </div>
  );
}
