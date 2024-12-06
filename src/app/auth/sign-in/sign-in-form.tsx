"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignInForm() {
  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="text" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="text" />

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
