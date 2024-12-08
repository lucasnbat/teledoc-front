import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getDoctor } from "@/http/get-doctor";
import doctorAvatar from "@/app/assets/general-doctor.webp";

export default async function AboutDoctor({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { doctor } = await getDoctor(id);

  return (
    <div className="space-y-4 py-4">
      <main className="mx-auto w-full max-w-[1200px] space-y-4 min-h-screen flex flex-col px-4">
        {/* Avatar e informações principais */}
        <section className="text-center flex flex-col items-center justify-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage
              src={doctor.avatarUrl || doctorAvatar.src}
              alt={doctor.doctorName}
              className="w-full h-full rounded-full shadow-md"
            />
          </Avatar>

          <h1 className="mt-4 text-xl font-bold text-foreground">
            {doctor.doctorName}
          </h1>
          <p className="text-sm text-muted-foreground">{doctor.speciality}</p>
        </section>

        {/* Estatísticas */}
        <section className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-primary">
              {doctor.numberOfPatients}+
            </p>
            <p className="text-sm text-muted-foreground">pacientes</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-primary">
              {doctor.yearsOfExperience} anos
            </p>
            <p className="text-sm text-muted-foreground">Experiência</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-primary">
              {doctor.rating.toFixed(1)}
            </p>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>
        </section>

        {/* Sobre o Médico */}
        <section>
          <h2 className="text-lg font-bold text-foreground">Sobre</h2>
          <p className="text-sm text-muted-foreground">{doctor.about}</p>
        </section>

        {/* Horário de trabalho */}
        <section>
          <h2 className="text-lg font-bold text-foreground">Disponibilidade</h2>
          <p className="text-sm text-muted-foreground">{doctor.periodOfWork}</p>
        </section>

        {/* Comunicação */}
        <section>
          <h2 className="text-lg font-bold text-foreground">Contato</h2>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <a
              href="/"
              className="flex flex-col items-center justify-center p-4 bg-pink-100 text-pink-600 rounded-lg shadow hover:bg-pink-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h2l4 4 4-4h4a2 2 0 002-2z"
                />
              </svg>
              <span className="text-xs mt-1">Mensagem</span>
            </a>
            <a
              href="/audio-call"
              className="flex flex-col items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-lg shadow hover:bg-blue-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276a1 1 0 011.447.894v6.764a1 1 0 01-1.447.894L15 14m0 0L5 19V5l10 5z"
                />
              </svg>
              <span className="text-xs mt-1">Ligação</span>
            </a>
            <a
              href="/video-call"
              className="flex flex-col items-center justify-center p-4 bg-yellow-100 text-yellow-600 rounded-lg shadow hover:bg-yellow-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276a1 1 0 011.447.894v6.764a1 1 0 01-1.447.894L15 14m0 0L5 19V5l10 5z"
                />
              </svg>
              <span className="text-xs mt-1">Vídeo-chamada</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
