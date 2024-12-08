import DoctorsList from "./doctors-list";

export default function DoctorsPage() {
  return (
    <div className="space-y-4 py-4">
      <main className="mx-auto w-full max-w-[1200px] space-y-4 min-h-screen flex flex-col px-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Médicos</h1>
          </div>
          <DoctorsList />
        </div>
      </main>
    </div>
  );
}
