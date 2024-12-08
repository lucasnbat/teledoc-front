import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { ProfileButton } from "./profile-button";

export async function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
      <div className="items-center gap-3 flex">
        <Image src={logo} className="size-6 dark:invert" alt="logo" />
      </div>

      <nav className="flex sm:gap-10 md:gap-20 lg:gap-32">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Chat
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Agendamento
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Video-chamada
        </Link>
        <Link
          href="/doctors"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Médicos
        </Link>
      </nav>

      <div>
        <ProfileButton />
      </div>
    </div>
  );
}
