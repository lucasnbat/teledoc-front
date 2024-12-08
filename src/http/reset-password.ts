// /patients/password/recover

import { api } from "./http-client"

interface RequestResetPassword {
  code: string
  patientPassword: string
}

type ResponseResetPassword = void

export async function resetPassword({
  code,
  patientPassword
}: RequestResetPassword) {
  const result = await api.post('patients/password/reset', {
    json: {
      code,
      patientPassword,
    }
  }).json<ResponseResetPassword>()

  return result
}