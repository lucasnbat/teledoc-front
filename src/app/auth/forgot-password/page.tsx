"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { requestPasswordRecoverAction } from "./actions";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [{ errors, message, success }, handleSubmit, isPending] =
    selfUseFormState(requestPasswordRecoverAction, () => {
      router.push("/auth/reset-password");
    });
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Falha!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input type="text" id="email" name="email" />
        {errors?.email && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Receber código de recuperação"
        )}
      </Button>

      <Button type="submit" className="w-full" variant="link" asChild size="sm">
        <Link href="/auth/sign-in">Logar ao invés disso</Link>
      </Button>

      <p className="absolute bottom-4 left-4 text-xs text-transparent select-text">
        Bora moer!!
      </p>
    </form>
  );
}
