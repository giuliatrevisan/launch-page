import Image from "next/image";
import Logo from "@/src/assets/logo.svg";
import IconUser from "@/src/assets/icon-user.svg";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
export function Header() {
  return (
    <header className="w-full bg-primary-orange">
      
      {/* GRID GLOBAL */}
      <div
        className="
          grid h-20
          grid-cols-1 md:grid-cols-[1fr_auto_180px]
          items-center
        "
      >
        {/* CONTEÚDO CENTRAL */}
        <div className="md:col-span-2 mx-auto w-full max-w-311.5 px-4 flex items-center justify-between">
          
          {/* LOGO + MENU */}
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="Logo da empresa" priority />

            <nav aria-label="Menu principal" className="hidden md:block">
              <ul className="flex items-center gap-14">
                <li><ItemMenu name="Para você" /></li>
                <li><ItemMenu name="Para empresas" /></li>
                <li><ItemMenu name="Serviços" /></li>
                <li><ItemMenu name="Ajuda" /></li>
              </ul>
            </nav>
          </div>

          {/* BUSCA — DESKTOP */}
          <div className="hidden md:flex">
            <Search />
          </div>
        </div>

        {/* BOTÃO — DIREITA FIXA */}
        <div className="hidden md:flex h-full items-center cursor-pointer transition-colors hover:bg-blue-800 justify-center bg-primary-blue">
          <button
            className="
              flex items-center gap-3
              font-bold text-white
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-white
            "
            aria-label="Acessar conta"
          >
            <Image src={IconUser} alt="" aria-hidden />
            <span>Acessar conta</span>
          </button>
        </div>
      </div>
    </header>
  );
}
