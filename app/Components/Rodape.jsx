export default function Rodape() {
  return (
    <footer className="py-16 bg-white border-t border-stone-200">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo e Título com animação de flutuar no hover */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 transition-all duration-500 hover:scale-105">
          <img 
            src="https://alg2.rodrigoduran.net/images/ifms-na-marca-2015.png" 
            alt="Logo IFMS Nova Andradina" 
            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          
          <div className="h-10 w-[1px] bg-stone-200 hidden md:block" />
          
          <div className="text-left">
            <h4 className="text-xl font-black text-emerald-800 uppercase tracking-tighter leading-none">
              pintura na horta do caps
            </h4>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">
              Nova Andradina - MS
            </p>
          </div>
        </div>
        <div className="max-w-2xl border-t border-stone-100 pt-8">
          <p className="text-stone-700 text-sm font-medium leading-relaxed">
            Este projeto foi desenvolvido sob orientação da 
            <span className="text-emerald-700 font-bold italic ml-1">
              Prof. Luana de Siqueira Brasil
            </span>.
          </p>
          <p className="text-stone-500 mt-4 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
            © 2026 • Terapia, Ensino e Socialização através da Arte
          </p>
        </div>

      </div>
    </footer>
  );
}