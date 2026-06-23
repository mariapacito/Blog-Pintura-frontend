import Link from "next/link";
import { Palette } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Logo com efeito de Grupo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-100 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Palette className="text-white h-6 w-6" />
        </div>
        <h1 className="text-xl font-black tracking-tighter text-stone-800 uppercase transition-colors duration-300 group-hover:text-emerald-600">
          PINTURA NO CAPS
        </h1>
      </div>

      {/* Nav Links com efeito de escala e cor */}
      <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-stone-500">
        <Link href="#" className="hover:text-emerald-600 transition-all duration-300 hover:scale-105 transform active:scale-95">
          O Projeto
        </Link>
        <Link href="#" className="hover:text-emerald-600 transition-all duration-300 hover:scale-105 transform active:scale-95">
          Galeria
        </Link>
        <Link href="#" className="hover:text-emerald-600 transition-all duration-300 hover:scale-105 transform active:scale-95">
          Blog
        </Link>
      </nav>

      {/* Botões com transição de sombra e clique */}
      <div className="flex gap-3">
        <Link href="/login">
          <Button variant="ghost" className="font-bold hover:bg-stone-100 transition-all duration-300 active:scale-95 text-stone-600">
            Entrar
          </Button>
        </Link>
        <Link href="/cadastro">
          <Button className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 active:scale-95 font-bold">
            Participar
          </Button>
        </Link>
      </div>
    </header>
  );
}