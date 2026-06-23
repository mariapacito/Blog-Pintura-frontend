import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Destaques() {
  return (
    <section className="px-6 py-12 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">
          Iniciativa Escolar • IFMS
        </span>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
          A ARTE QUE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
            CURA
          </span>.
        </h2>

        <p className="text-xl text-stone-500 font-medium leading-relaxed max-w-md">
          Explorando a pintura como uma poderosa ferramenta de terapia, expressão e socialização em Nova Andradina.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-100/50 rounded-[40px] blur-2xl transition-all duration-500 group-hover:bg-emerald-200/60" />
        <img 
          src="/turma.jpeg" 
          className="relative rounded-[32px] shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:-rotate-1" 
        />
      </div>
    </section>
  );
}