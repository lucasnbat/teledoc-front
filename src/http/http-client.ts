import { env } from "@/env";
import { getCookie } from "cookies-next";
import ky from "ky";

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let token: string | undefined

        if (typeof window === 'undefined') {
          // feature para permitir acesso do server side aos cookies
          const { cookies } = await import('next/headers')
          token = (await cookies()).get("token")?.value
        } else {
          token = getCookie("token") as string | undefined
        }

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      }
    ]
  }
})