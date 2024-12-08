"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpAction } from "./actions";

export default function SignUpForm() {
  const router = useRouter();
  const [{ errors, message, success }, handleSubmit, isPending] =
    selfUseFormState(signUpAction, () => {
      router.push("/auth/sign-in");
    });
  return (
    <div className="space-y-4">
      <form>
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="text" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="text" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="text" />
        </div>

        <div>
          <Label htmlFor="password_confirmation">Confirme sua senha</Label>
          <Input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
          />
        </div>

        <Button type="submit" className="w-full mt-2">
          Criar conta
        </Button>

        <Button
          type="submit"
          className="w-full"
          variant="link"
          asChild
          size="sm"
        >
          <Link href="/auth/sign-in">Já possui conta? Faça login</Link>
        </Button>
      </form>
    </div>
  );
}
