import Cabecalho from "./Cabecalho";
import Destaques from "./Destaques";
import SecaoBlog from "./SecaoBlog";
import Rodape from "./Rodape";

export default function Home() {
  return (
    <div className="bg-[#fafaf9] min-h-screen">
      <Cabecalho />
      <main className="pt-24">
        <Destaques />
        <SecaoBlog />
      </main>
      <Rodape />
    </div>
  );
}