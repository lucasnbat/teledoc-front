import { api } from './http-client'

interface getPatientProfileResponse {
  patientFinded: {
    patientId: string
    patientName: string
    patientEmail: string | null
    patientPhone: string
  }
}

export async function getPatientProfile() {
  // token é capturado pelo middleware auth na rota da api
  const result = await api.get('patient-profile')
    .json<getPatientProfileResponse>()

  return result
}
