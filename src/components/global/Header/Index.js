export function Header() {
  return (
    <header className="h-20 md:h-32 w-full flex items-end justify-center px-3 md:px-10 pb-4">
      <div className="w-full flex items-end justify-between">
        <span className="
          flex flex-col 
          leading-[14px] md:leading-[15px] 
          font-inter font-bold 
          md:text-lg text-sm
        ">
          <span>NÔ</span>
          <span>MA</span>
          <span>DES</span>
        </span>

        <span className="
          font-mono tracking-[10px] 
          text-xs md:text-base 
          w-44 md:w-fit 
          flex flex-col md:flex-row 
          md:gap-2
        ">
          <span className="font-light">DIÁRIO DE</span>
          <span className="font-bold">PERSONAGEM</span>
        </span>
      </div>
    </header>
  );
}