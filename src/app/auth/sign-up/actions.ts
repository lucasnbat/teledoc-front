'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { signUp } from '@/http/sign-up'

const signUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(' ').length > 1, {
      message: 'Por favor, insira seu nome completo',
    }),
    email: z
      .string()
      .email({ message: "Por favor, insira um e-mail válido" }),
    phone: z.string(),
    password: z
      .string()
      .min(8, { message: "A senha precisa ter no mínimo 8 caracteres" }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'A senha de confirmação não bate',
    path: ['password_confirmation'],
  })

export async function signUpAction(data: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name, email, phone, password } = result.data

  try {
    await signUp({
      name,
      email,
      phone,
      password,
    })
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      // message: message
      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Erro inesperado! Tente em alguns minutos.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
