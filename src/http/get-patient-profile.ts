import { api } from "./http-client"

interface getPatientProfileResponse {
  patientFinded: {
    patientId: string
    patientName: string
    patientEmail: string | null
    patientPhone: string
  }
}

export async function getPatientProfile() {
  try {
    const result = await api.get('patient-profile').json<getPatientProfileResponse | any>()
    return result

  } catch (error) {
    console.log(error)
  }

}
