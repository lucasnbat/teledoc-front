"use client";
// TODO: reposicionar o "esqueci senha" como "mudar senha" e inserir abaixo do botão
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInfWithEmailAndPasswordAction } from "./actions";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SignInForm() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] =
    selfUseFormState(signInfWithEmailAndPasswordAction, () => {
      router.push("/");
    });
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Falha ao logar!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="text" />

          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="password" />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}

          <Link href="/auth/forgot-password">Esqueci minha senha</Link>
        </div>

        <Button type="submit" className="w-full">
          {isPending ? <Loader2 className="size-4 animate-spin" /> : "Entrar"}
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
