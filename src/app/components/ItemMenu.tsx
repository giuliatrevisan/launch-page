import Image from "next/image";
import Arrow from "@/src/assets/arrow-down.svg";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button
      className="group cursor-pointer flex items-center gap-2 font-bold text-white transition-opacity hover:opacity-80 focus:outline-none"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span>{name}</span>
      <Image
        src={Arrow}
        alt=""
        aria-hidden
        className="transition-transform group-hover:rotate-180"
      />
    </button>
  );
}
