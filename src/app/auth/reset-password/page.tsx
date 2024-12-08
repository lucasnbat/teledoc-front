"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { selfUseFormState } from "@/hooks/self-use-form-state";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { resetPasswordAction } from "./actions";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] =
    selfUseFormState(resetPasswordAction, () => {
      router.push("/auth/sign-in");
    });
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {success === false && message && (
          <Alert variant="destructive">
            <AlertTriangle className="size-4" />
            <AlertTitle>Falha ao redefinir senha!</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-1">
          <Label htmlFor="code">Código</Label>
          <Input id="code" name="code" type="text" />

          {errors?.code && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.code[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Nova senha</Label>
          <Input id="password" name="password" type="password" />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password_confirmation">Confirmar senha</Label>
          <Input id="password_confirmation" name="password_confirmation" type="password" />
          {errors?.password_confirmation && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password_confirmation[0]}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Redefinir"
          )}
        </Button>
      </form>
    </div>
  );
}
