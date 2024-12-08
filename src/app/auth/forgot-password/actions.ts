"use server"

import { z } from "zod";
import { HTTPError } from "ky";
import { requestPasswordRecover } from "@/http/request-password-recover";

const signInSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido" }),
})

export async function requestPasswordRecoverAction(
  data: FormData
) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email } = result.data

  try {
    const { code } = await requestPasswordRecover({
      patientEmail: email,
    })

    console.log("Código de recuperação: ", code)
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