import { api } from './http-client'

interface GetDoctorsResponse {
  doctors: {
    doctorId: string;
    doctorEmail: string;
    doctorName: string;
    doctorPhone: string;
    numberOfPatients: number;
    rating: number;
    yearsOfExperience: number;
    periodOfWork: string;
    about: string;
    avatarUrl: string | null;
    speciality: string | null;
  }[]
}

export async function getDoctors() {
  const result = await api
    .get(`doctors`)
    .json<GetDoctorsResponse>()

  return result
}
