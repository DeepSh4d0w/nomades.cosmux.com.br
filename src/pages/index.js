import { useState } from "react";
import { Header } from "../components/global/Header/Index";
import { Characteristics } from "../components/pages/character/Characteristics";
import { Statistics } from "../components/pages/character/Statistics";
import { Details } from "../components/pages/Details";

export default function Sheet() {
  const [character, setCharacter] = useState({
    name: "",
    description: "",
    conflict: "",
    life: { max: 20, current: 20 },
    focus: { max: 7, current: 0 },
    power: { max: 7, current: 0 },
    force: { name: "", value: "" },
    protection: { name: "", value: "" },
    talent: Array(12).fill(""),
    experience: "0",
    belongings: "",
    notes: "",
  });

  return (
    <div className="h-screen w-screen grid flex-col divide-y-2 items-center justify-center divide-zinc-200 px-5 md:px-36">
      <Header />

      <main>
        <form className="flex flex-col divide-y-2 divide-zinc-200">
          <Characteristics character={character} />
          <Statistics character={character} />
          <Details character={character} />
        </form>
      </main>
    </div>
  );
}
