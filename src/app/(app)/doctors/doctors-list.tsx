import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDoctors } from "@/http/get-doctors";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";

export default async function DoctorsList() {
  const { doctors } = await getDoctors();
  console.log("Médicos: ", doctors);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {doctors.map((doctor) => {
        return (
          <Link
            key={doctor.doctorId}
            href={`/doctors/${doctor.doctorId}`} // O link para o perfil do médico
            className="block" // Faz o card ocupar espaço como um botão/link
          >
            <Card className="flex flex-col justify-between items-center p-5 shadow-lg rounded-lg border">
              <CardHeader className="flex flex-col items-center gap-2">
                <Avatar className="h-25 w-25">
                  {doctor.avatarUrl && <AvatarImage src={doctor.avatarUrl} />}
                  <AvatarFallback />
                </Avatar>
                <CardTitle className="text-lg font-semibold text-center">
                  {doctor.doctorName}
                </CardTitle>
                <CardDescription className="flex flex-col">
                  {doctor.speciality ? (
                    <span>{doctor.speciality}</span>
                  ) : (
                    <span>{doctor.about}</span>
                  )}
                </CardDescription>
              </CardHeader>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-[-1rem]">
                <span>⭐ {doctor.rating}</span>
                <span className="text-xs text-gray-400">
                  ({doctor.numberOfPatients} reviews)
                </span>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
