"use server"

import { z } from "zod";
import { signInfWithEmailAndPassword } from '@/http/sign-in-with-email-and-password'
import { cookies } from "next/headers";
import { HTTPError } from "ky";

const signInSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido" }),
  password: z.string().min(1, { message: 'Por favor insira sua senha' })
})

export async function signInfWithEmailAndPasswordAction(
  data: FormData
) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  try {
    const { token } = await signInfWithEmailAndPassword({
      email,
      password,
    })

      ; (await cookies()).set('token', token, {
        path: '/',
        maxAge: 60 * 60 * 24,
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