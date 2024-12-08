import { Header } from "@/components/header";

export default async function Home() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px] space-y-8 min-h-screen flex flex-col">
        {/* Apresentação */}
        <section className="text-center space-y-4 mt-20">
          <h1 className="text-2xl font-bold text-foreground">
            Bem-vindo ao <span className="text-primary">TeleDoc</span>
          </h1>
          <p className="text-muted-foreground">
            Conecte-se com médicos, agende consultas e acompanhe seu bem-estar 
            com praticidade.
          </p>
        </section>

        {/* Botões de ação rápida */}
        <section className="flex justify-center gap-4">
          <a
            href="/doctors"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary-dark transition"
          >
            Conheça nossos médicos
          </a>
          <a
            href="/chat"
            className="px-6 py-3 bg-secondary text-white font-medium rounded-lg shadow hover:bg-secondary-dark transition"
          >
            Chat com Médico
          </a>
          <a
            href="/video-call"
            className="px-6 py-3 bg-accent text-white font-medium rounded-lg shadow hover:bg-accent-dark transition"
          >
            Iniciar Chamada de Vídeo
          </a>
        </section>

        {/* Destaques */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          <div className="p-4 bg-card rounded-lg shadow space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Acompanhamento Médico
            </h3>
            <p className="text-sm text-muted-foreground">
              Tenha acesso a relatórios e histórico de consultas em um só lugar.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Equipe Qualificada
            </h3>
            <p className="text-sm text-muted-foreground">
              Conecte-se com médicos experientes e confiáveis.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg shadow space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Consultas Online
            </h3>
            <p className="text-sm text-muted-foreground">
              Agende e participe de consultas no conforto de sua casa.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
