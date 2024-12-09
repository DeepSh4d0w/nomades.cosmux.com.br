import { setCookie } from "nookies";
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
          <Input
            value={character.talent[0]}
            onChange={(newValue) => {
              character.talent[0] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[1]}
            onChange={(newValue) => {
              character.talent[1] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[2]}
            onChange={(newValue) => {
              character.talent[2] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[3]}
            onChange={(newValue) => {
              character.talent[3] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[4]}
            onChange={(newValue) => {
              character.talent[4] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[5]}
            onChange={(newValue) => {
              character.talent[5] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[6]}
            onChange={(newValue) => {
              character.talent[6] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[7]}
            onChange={(newValue) => {
              character.talent[7] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[8]}
            onChange={(newValue) => {
              character.talent[8] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[9]}
            onChange={(newValue) => {
              character.talent[9] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[10]}
            onChange={(newValue) => {
              character.talent[10] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
          <Input
            value={character.talent[11]}
            onChange={(newValue) => {
              character.talent[11] = newValue;

              setCookie(
                null,
                "character",
                JSON.stringify({
                  ...character,
                }),
                {
                  maxAge: 86400 * 365,
                }
              );
            }}
          />
        </div>
      </label>

      <label className="flex flex-1 flex-col gap-2 md:row-span-1 order-5 md:order-2">
        <span>
          <span className="font-mono">
            <span className="font-light">PONTOS DE </span>
            <span className="font-bold">EXPERIÊNCIA</span>
          </span>
        </span>
        <Input
          value={character.experience}
          onChange={(newValue) =>
            setCookie(
              null,
              "character",
              JSON.stringify({
                ...character,
                experience: newValue,
              }),
              {
                maxAge: 86400 * 365,
              }
            )
          }
        />
      </label>
      {/* <div className="col-span-1 row-span-4 flex flex-col gap-2">
      </div> */}

      <label className="flex flex-1 flex-col md:text-end gap-2 md:row-span-2 h-[200px] md:h-full order-2 md:order-3">
        <span className="font-mono">
          <span className="font-bold">PERTENCES</span>
        </span>
        <Textarea
          value={character.belongings}
          onChange={(newValue) =>
            setCookie(
              null,
              "character",
              JSON.stringify({
                ...character,
                belongings: newValue,
              }),
              {
                maxAge: 86400 * 365,
              }
            )
          }
        />
      </label>

      <label className="flex flex-1 flex-col gap-2 md:text-end md:row-span-2 h-[200px] md:h-full order-3 md:order-4">
        <span className="font-mono">
          <span className="font-bold">NOTAS</span>
        </span>
        <Textarea
          value={character.notes}
          onChange={(newValue) =>
            setCookie(
              null,
              "character",
              JSON.stringify({
                ...character,
                notes: newValue,
              }),
              {
                maxAge: 86400 * 365,
              }
            )
          }
        />
      </label>
    </div>
  );
}
