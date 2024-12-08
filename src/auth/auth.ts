import { getPatientProfile } from "@/http/get-patient-profile";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function isAuthenticated() {
  return !!(await cookies()).get('token')?.value
}

export async function auth() {
  const token = (await cookies()).get("token")?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { patientFinded } = await getPatientProfile()

    return { patientFinded }
  } catch (err) {
    console.log("Erro de autenticação: ", err)
    redirect("/auth/sign-in")
  }
}