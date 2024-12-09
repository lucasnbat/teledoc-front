"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpAction } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Loader2 } from "lucide-react";
import Image from "next/image";
import logo from '@/app/assets/logo.svg'

export default function SignUpForm() {
  const router = useRouter();
  const [{ errors, message, success }, handleSubmit, isPending] =
    selfUseFormState(signUpAction, () => {
      router.push("/auth/sign-in");
    });
  return (
    <div className="space-y-4 flex flex-col items-center">
      <div className="flex items-center max-w-[100px]">
        <Image src={logo} className="h-8 dark:invert " alt="logo" />
        <p className="font-medium text-muted-foreground">Teledoc</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Sign up failed!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-1">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" type="text" />

          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
        </div>

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
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" name="phone" type="text" />

          {errors?.phone && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.phone[0]}
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
        </div>

        <div>
          <Label htmlFor="password_confirmation">Confirme sua senha</Label>
          <Input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
          />

          {errors?.password_confirmation && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password_confirmation[0]}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full mt-2">
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Criar conta"
          )}
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
