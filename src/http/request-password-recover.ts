// /patients/password/recover

import { api } from "./http-client"

interface RequestPasswordRecover {
  patientEmail: string
}

interface ResponsePasswordRecover {
  code: string
}

export async function requestPasswordRecover({
  patientEmail
}: RequestPasswordRecover) {
  const result = await api.post('patients/password/recover', {
    json: {
      patientEmail,
    }
  }).json<ResponsePasswordRecover>()

  return result
}