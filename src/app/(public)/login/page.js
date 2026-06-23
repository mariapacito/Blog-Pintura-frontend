"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Palette, ArrowLeft } from "lucide-react";
import { Button } from "../../../Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../Components/ui/card";
import { Input } from "../../../Components/ui/input";
import { Label } from "../../../Components/ui/label";
import { authClient } from "../../../lib/auth-client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await authClient.signIn.email({ email, password });

    setLoading(false);

    if (error) {
      setError("Email ou senha inválidos.");
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
              <Palette className="text-emerald-700 h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-3xl font-black tracking-tighter text-stone-900 uppercase">
            PINTURA DO CAPS
          </CardTitle>
          <CardDescription className="text-stone-500 font-medium italic pt-2">
            Acesse o portal de divulgação do projeto.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 px-8">
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
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
                Senha
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
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8 px-8">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest h-12 shadow-lg shadow-emerald-100 disabled:opacity-60"
            >
              {loading ? "Entrando..." : "Entrar no Blog"}
            </Button>
            <div className="text-sm text-center text-stone-500 font-medium">
              Ainda não participa?{" "}
              <Link href="/cadastro" className="text-emerald-600 font-bold hover:underline">
                Crie sua conta
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}