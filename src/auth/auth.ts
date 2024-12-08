import { getPatientProfile } from "@/http/get-patient-profile";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function isAuthenticated() {
  return !!(await cookies()).get('token')?.value
}

export async function auth() {
  console.log('Chegou ao auth')
  const token = (await cookies()).get('token')?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { patientFinded } = await getPatientProfile()

    console.log('patient: ', patientFinded)

    return { patientFinded }
  } catch { }

  redirect('api/auth/sign-in') // enviando para route handler que vai tirar o token
}