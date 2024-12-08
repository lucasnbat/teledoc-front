import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { ProfileButton } from "./profile-button";

export async function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logo} className="size-6 dark:invert" alt="logo" />
      </div>

      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        Chat
      </Link>
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        Agendamento
      </Link>
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        Chamada de vídeo
      </Link>
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        Doctors
      </Link>

      <div>
        <ProfileButton />
      </div>
    </div>
  );
}
