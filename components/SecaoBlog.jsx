import { Newspaper } from "lucide-react";
import { Button } from "./ui/button";
import CardPost from "./CardPost";

export default function SecaoBlog() {
  return (
    <section className="bg-stone-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-black tracking-tight flex items-center gap-2">
              <Newspaper className="text-emerald-600" /> Diário de Bordo
            </h3>
            <p className="text-stone-500 mt-2 font-medium">
              Acompanhe as transformações das nossas oficinas em Nova Andradina.
            </p>
          </div>
          
          <Button 
            variant="link" 
            className="text-emerald-600 font-bold p-0 uppercase text-xs tracking-widest hover:no-underline hover:opacity-80 transition"
          >
            Ver todos
          </Button>
        </div>

        {/* Grid de Cards - Agora puxando a animação do componente filho */}
        <div className="grid md:grid-cols-3 gap-8">
          <CardPost
            imagem="/mural-borboletas.jpeg"
            data="27 Mar, 2026"
            titulo="Cores em Liberdade: O Mural das Borboletas"
            descricao="Dando vida ao muro da horta: nesta oficina, usamos as borboletas para simbolizar a transformação pessoal e a liberdade que a pintura proporciona."
          />

          <CardPost
            imagem="/canteiro.jpeg"
            data="20 Mar, 2026"
            titulo="Colorindo os Canteiros Suspensos"
            descricao="Um registro especial da nossa oficina em ação. Nossos artistas transformaram o concreto em um jardim de borboletas vibrantes entre as plantas."
          />

          <CardPost
            imagem="/borboleta.jpeg"
            data="15 Mar, 2026"
            titulo="A Delicadeza nos Detalhes"
            descricao="Foco e paciência. Este close-up revela o cuidado com cada traço e o carinho colocado em cada pequena parte do projeto."
          />
        </div>
      </div>
    </section>
  );
}