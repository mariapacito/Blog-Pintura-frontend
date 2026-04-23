import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardPost({ imagem, data, titulo, descricao }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-2xl transition-all group cursor-pointer bg-white rounded-2xl overflow-hidden transform hover:-translate-y-2 duration-300">
      <div className="overflow-hidden h-48">
        <img 
          src={imagem} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
        />
      </div>

      <CardHeader>
        <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">
          {data}
        </span>
        <CardTitle className="text-xl font-bold group-hover:text-emerald-700 transition leading-tight">
          {titulo}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-stone-600 text-sm leading-relaxed">
          {descricao}
        </p>
      </CardContent>
    </Card>
  );
}