"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDoctors } from "@/http/get-doctors";
import Link from "next/link";
import doctorAvatar from "@/app/assets/general-doctor.webp";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function DoctorsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  const filteredDoctors = useMemo(() => {
    if (!data?.doctors) return [];

    const term = searchTerm.toLowerCase();
    return data.doctors.filter((doctor) => {
      return (
        doctor.doctorName.toLowerCase().includes(term) ||
        doctor.doctorEmail.toLowerCase().includes(term) ||
        doctor.speciality?.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, data?.doctors]);

  return (
    <>
      <div className="relative w-full mb-4">
        <Input
          type="text"
          placeholder="Busque por nome, e-mail ou especialidade"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10" // Adiciona espaço para o ícone
        />
        <Search className="absolute left-3 top-2/4 transform -translate-y-2/4 text-muted-foreground" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredDoctors.map((doctor) => {
          return (
            <Link
              key={doctor.doctorId}
              href={`/doctors/${doctor.doctorId}`} // O link para o perfil do médico
              className="block" // Faz o card ocupar espaço como um botão/link
            >
              <Card className="flex flex-col justify-between items-center p-5 shadow-lg rounded-lg border">
                <CardHeader className="flex flex-col items-center gap-2">
                  <Avatar className="h-25 w-25">
                    <AvatarImage
                      src={doctor.avatarUrl || doctorAvatar.src} // Corrigido aqui
                    />
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
    </>
  );
}
