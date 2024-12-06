import { api } from "./http-client"

interface SignInWithEmailAndPasswordRequest {
  email: string
  password: string
}

interface SignInWithEmailAndPasswordResponse {
  token: string
}

export async function signInfWithEmailAndPassword({
  email,
  password,
}: SignInWithEmailAndPasswordRequest) {
  const result = await api
    .post('patients/sessions/password', {
      json: {
        email,
        password,
      }
    })
    .json<SignInWithEmailAndPasswordResponse>()

  return result
}