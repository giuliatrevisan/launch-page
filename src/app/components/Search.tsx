import Image from "next/image";
import IconSearch from "@/src/assets/icon-search.svg";

export function Search() {
  return (
    <div className="flex items-center gap-3 border-b mr-5 border-white/50 focus-within:border-white transition-colors">
      <Image src={IconSearch} alt="" aria-hidden />
      <input
        type="text"
        placeholder="Buscar"
        aria-label="Buscar no site"
        className="w-32 bg-transparent pb-1 text-white placeholder:text-white/80 outline-none sm:w-40"
      />
    </div>
  );
}
