import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido" }),
  password: z.string().min(1, { message: 'Por favor insira sua senha' })
})

export async function signInfWithEmailAndPassword(
  data: FormData
) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  try {
    
  } catch (error) {
    
  }
}