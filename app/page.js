import Link from "next/link";
import { Paintbrush, Palette, Users, Newspaper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900 font-sans">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-100">
            <Palette className="text-white h-6 w-6" />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-stone-800 uppercase">PINTURA NO CAPS</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-stone-500">
          <Link href="#" className="hover:text-emerald-600 transition">O Projeto</Link>
          <Link href="#" className="hover:text-emerald-600 transition">Galeria</Link>
          <Link href="#" className="hover:text-emerald-600 transition">Blog</Link>
        </nav>
        <div className="flex gap-3">
          <Link href="/login"><Button variant="ghost" className="font-bold">Entrar</Button></Link>
          <Link href="/cadastro"><Button className="bg-emerald-600 hover:bg-emerald-700 font-bold shadow-md">Participar</Button></Link>
        </div>
      </header>

      <main className="pt-24">
        {/* Seção de Destaque (Hero) */}
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest">
              Iniciativa Escolar • IFMS
            </span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-stone-900">
              A ARTE QUE <span className="text-emerald-600 italic underline decoration-emerald-200 decoration-8 underline-offset-4">CURA</span>.
            </h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-lg">
              Explorando a pintura como terapia e socialização dentro da horta do CAPS. 
              Um espaço onde cada pincelada cultiva um novo recomeço.
            </p>
            <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 rounded-full font-bold group">
              Conhecer o Projeto <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-50" />
            <img 
              src="/turma.jpeg"
              alt="Arte no CAPS" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500 object-cover h-[500px] w-full"
            />
          </div>
        </section>

        {/* Seção Blog (Posts Recentes) */}
        <section className="bg-stone-100 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-3xl font-black tracking-tight flex items-center gap-2">
                  <Newspaper className="text-emerald-600" /> Diário de Bordo
                </h3>
                <p className="text-stone-500 mt-2 font-medium">Acompanhe as transformações das nossas oficinas em Nova Andradina.</p>
              </div>
              <Button variant="link" className="text-emerald-600 font-bold p-0 uppercase text-xs tracking-widest">Ver todos</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="border-none shadow-lg hover:shadow-2xl transition group cursor-pointer bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2 duration-300">
                <div className="overflow-hidden h-48">
                  <img src="/mural-borboletas.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <CardHeader>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">27 Mar, 2026</span>
                  <CardTitle className="text-xl font-bold group-hover:text-emerald-700 transition leading-tight">Cores em Liberdade: O Mural das Borboletas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Dando vida ao muro da horta: nesta oficina, usamos as borboletas para simbolizar a transformação pessoal e a liberdade que a pintura proporciona.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-none shadow-lg hover:shadow-2xl transition group cursor-pointer bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2 duration-300">
                <div className="overflow-hidden h-48">
                  <img src="/canteiro.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <CardHeader>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">20 Mar, 2026</span>
                  <CardTitle className="text-xl font-bold group-hover:text-emerald-700 transition leading-tight">Colorindo os Canteiros Suspensos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Um registro especial da nossa oficina em ação. Nossos artistas transformaram o concreto em um jardim de borboletas vibrantes entre as plantas.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-none shadow-lg hover:shadow-2xl transition group cursor-pointer bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2 duration-300">
                <div className="overflow-hidden h-48">
                  <img src="/borboleta.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <CardHeader>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">15 Mar, 2026</span>
                  <CardTitle className="text-xl font-bold group-hover:text-emerald-700 transition leading-tight">A Delicadeza nos Detalhes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Foco e paciência. Este close-up revela o cuidado com cada traço e o carinho colocado em cada pequena parte do projeto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - Créditos Institucionais */}
      <footer className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img 
              src="https://alg2.rodrigoduran.net/images/ifms-na-marca-2015.png" 
              alt="Logo IFMS Nova Andradina" 
              className="h-16 w-auto object-contain opacity-80"
            />
            <div className="h-10 w-[1px] bg-stone-200 hidden md:block" />
            <div className="text-left">
              <h4 className="text-xl font-black text-emerald-800 uppercase tracking-tighter leading-none">pintura na horta do caps</h4>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">Nova Andradina - MS</p>
            </div>
          </div>
          <div className="max-w-2xl border-t border-stone-100 pt-8">
            <p className="text-stone-700 text-sm font-medium leading-relaxed">
              Este projeto foi desenvolvido sob orientação da <span className="text-emerald-700 font-bold italic">Prof. Luana de Siqueira Brasil</span>.
            </p>
            <p className="text-stone-500 mt-4 text-[10px] font-black uppercase tracking-[0.2em]">
              © 2026 • Terapia, Ensino e Socialização através da Arte
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}