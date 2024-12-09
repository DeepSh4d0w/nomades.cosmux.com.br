import { Input } from "../../../global/Input";
import { Textarea } from "../../../global/Textarea";

export function Characteristics({ character }) {
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

      <label className="h-[200px] flex flex-1 flex-col-reverse md:flex-col gap-2 md:text-end">
        <Textarea value={character.conflict} />
        <span className="font-mono">
          <span className="font-bold">CONFLITO</span>
        </span>
      </label>
    </div>
  );
}
