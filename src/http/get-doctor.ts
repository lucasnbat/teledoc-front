import { api } from './http-client'

export interface GetDoctorResponse {
  doctor: {
    doctorName: string;
    doctorPhone: string;
    doctorEmail: string;
    numberOfPatients: number;
    rating: number;
    yearsOfExperience: number;
    periodOfWork: string;
    about: string;
    avatarUrl: string | null;
    speciality: string | null;
  }
}

export async function getDoctor(doctorId: string) {
  const result = await api
    .get(`doctors/${doctorId}`)
    .json<GetDoctorResponse>()

  return result
}
