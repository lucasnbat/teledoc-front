"use server"

import { z } from "zod";
import { HTTPError } from "ky";
import { resetPassword } from "@/http/reset-password";

const resetPasswordSchema = z.object({
  code: z.string({ message: "Por favor, insira um código válido" }),
  password: z.string().min(1, { message: 'Por favor insira sua senha' }),
  password_confirmation: z.string().min(1, { message: 'Por favor confirme sua senha' }),
}).refine(data => data.password === data.password_confirmation, {
  message: 'A senha de confirmação não bate',
  path: ['password_confirmation'],
})

export async function resetPasswordAction(
  data: FormData
) {
  const result = resetPasswordSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { code, password } = result.data

  try {
    await resetPassword({
      code,
      patientPassword: password,
    })

  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Erro inesperado! Tente novamente em alguns minutos',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}