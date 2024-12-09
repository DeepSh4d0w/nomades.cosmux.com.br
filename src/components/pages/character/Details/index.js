import { Input } from "../../../global/Input";
import { Textarea } from "../../../global/Textarea";

export function Details({ character }) {
  return (
    <div className="py-4 grid md:grid-rows-4 md:grid-cols-2 md:grid-flow-col gap-x-10 gap-y-4 h-fit">
      <label className="flex flex-1 flex-col gap-2 md:row-span-3 order-1">
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

      <label className="flex flex-1 flex-col gap-2 md:row-span-1 order-5 md:order-2">
        <span>
          <span className="font-mono">
            <span className="font-light">PONTOS DE </span>
            <span className="font-bold">EXPERIÊNCIA</span>
          </span>
        </span>
        <Input value={character.experience} />
      </label>
      {/* <div className="col-span-1 row-span-4 flex flex-col gap-2">
      </div> */}

      <label className="flex flex-1 flex-col md:text-end gap-2 md:row-span-2 h-[200px] md:h-full order-2 md:order-3">
        <span className="font-mono">
          <span className="font-bold">PERTENCES</span>
        </span>
        <Textarea value={character.belongings} />
      </label>

      <label className="flex flex-1 flex-col gap-2 md:text-end md:row-span-2 h-[200px] md:h-full order-3 md:order-4">
        <span className="font-mono">
          <span className="font-bold">NOTAS</span>
        </span>
        <Textarea value={character.notes} />
      </label>
    </div>
  );
}
