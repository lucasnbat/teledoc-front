import { api } from './http-client'

interface SignUpRequest {
  name: string
  email: string
  password: string
  phone: string
}

// void deixa você meio que pegar o resultado da função
// void não, ele impede isso
type SignUpResponse = void

export async function signUp({
  name,
  email,
  password,
  phone,
}: SignUpRequest): Promise<SignUpResponse> {
  try {
    await api.post('patients', {
      json: {
        patientName: name,
        patientEmail: email,
        patientPhone: phone,
        patientPassword: password,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
