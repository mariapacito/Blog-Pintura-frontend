"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, ArrowLeft } from "lucide-react";
import { Button } from "../../../Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../Components/ui/card";
import { Input } from "../../../Components/ui/input";
import { Label } from "../../../Components/ui/label";
import { authClient } from "../../../lib/auth-client";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({ name, email, password });

    setLoading(false);

    if (error) {
      setError("Erro ao criar conta. Verifique os dados e tente novamente.");
      return;
    }

    router.push("/dashboard");
  }

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

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 px-8">
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Como quer ser chamado?"
                className="bg-stone-50 border-stone-200"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="bg-stone-50 border-stone-200"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">
                Crie uma Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-stone-50 border-stone-200"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-[11px] text-stone-400 font-medium">Deve ter pelo menos 8 caracteres.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="font-bold text-stone-700 uppercase text-[10px] tracking-widest">
                Confirmar Senha
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="bg-stone-50 border-stone-200"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8 px-8">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest h-12 shadow-lg shadow-emerald-100 disabled:opacity-60"
            >
              {loading ? "Criando conta..." : "Finalizar Cadastro"}
            </Button>
            <div className="text-sm text-center text-stone-500 font-medium">
              Já tem conta?{" "}
              <Link href="/login" className="text-emerald-600 font-bold hover:underline">
                Faça login
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}