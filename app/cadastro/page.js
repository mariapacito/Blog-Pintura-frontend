import Link from "next/link";
import { UserPlus, ArrowLeft } from "lucide-react";
import { Button } from "../../Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../Components/ui/card";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafaf9] p-4 font-sans">
      <div className="absolute top-8 left-8">
        <Link href="/">
          <Button variant="ghost" className="text-stone-500 font-bold hover:text-emerald-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Início
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md border-none shadow-2xl bg-white overflow-hidden rounded-2xl">
        <div className="h-2 bg-emerald-600 w-full" />
        <CardHeader className="space-y-1 text-center pt-8">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl shadow-inner">
              <UserPlus className="text-emerald-700 h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-3xl font-black tracking-tighter text-stone-900 uppercase">
            CRIAR CONTA
          </CardTitle>
          <CardDescription className="text-stone-500 font-medium pt-2">
            Junte-se à comunidade <span className="text-emerald-600 font-bold italic">PINTURA DO CAPS</span>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-8">
          <div className="space-y-2">
            <Label className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">Nome Completo</Label>
            <Input type="text" placeholder="Como quer ser chamado?" className="bg-stone-50 border-stone-200" />
          </div>
          <div className="space-y-2">
            <Label className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">E-mail</Label>
            <Input type="email" placeholder="seu@email.com" className="bg-stone-50 border-stone-200" />
          </div>
          <div className="space-y-2">
            <Label className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">Crie uma Senha</Label>
            <Input type="password" placeholder="••••••••" className="bg-stone-50 border-stone-200" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pb-8 px-8">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest h-12 shadow-lg shadow-emerald-100">
            Finalizar Cadastro
          </Button>
          <div className="text-sm text-center text-stone-500 font-medium">
            Já tem conta? <Link href="/login" className="text-emerald-600 font-bold hover:underline">Faça login</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}