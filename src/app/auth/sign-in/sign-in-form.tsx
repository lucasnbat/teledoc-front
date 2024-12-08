"use client";
// TODO: reposicionar o "esqueci senha" como "mudar senha" e inserir abaixo do botão
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInfWithEmailAndPasswordAction } from "./actions";

export default function SignInForm() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] =
    selfUseFormState(signInfWithEmailAndPasswordAction, () => {
      router.push("/");
    });
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="text" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="password" />

          <Link href="/auth/forgot-password">Esqueci minha senha</Link>
        </div>

        <Button type="submit" className="w-full">
          Entrar
        </Button>

        <Button
          type="submit"
          className="w-full"
          variant="link"
          asChild
          size="sm"
        >
          <Link href="/auth/sign-up">Criar nova conta</Link>
        </Button>
      </form>
    </div>
  );
}
