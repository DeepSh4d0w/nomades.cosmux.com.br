import { setCookie, parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Header } from "../components/global/Header/Index";
import { Characteristics } from "../components/pages/character/Characteristics";
import { Statistics } from "../components/pages/character/Statistics";
import { Details } from "../components/pages/character/Details";

export default function Sheet({ previousCharacter }) {
  const defaultCharacter = {
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
  };

  const [character, setCharacter] = useState(
    previousCharacter ? JSON.parse(previousCharacter) : defaultCharacter
  );

  console.log(character.life);

  useEffect(() => {
    setCookie(null, "character", JSON.stringify(character), {
      maxAge: 86400 * 365,
    });
  }, [character]);

  console.log(JSON.parse(previousCharacter));

  return (
    <div className="h-screen w-screen grid flex-col divide-y-2 items-center justify-center divide-zinc-200 px-5 md:px-36">
      <Header />

      <main>
        <form className="flex flex-col divide-y-2 divide-zinc-200">
          <Characteristics character={character} setCharacter={setCharacter} />
          <Statistics character={character} setCharacter={setCharacter} />
          <Details character={character} />
        </form>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const previousCharacter = cookies.character ?? null;

  return {
    props: {
      previousCharacter,
    },
  };
}
