import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { LogOut } from "lucide-react";

export async function Header() {
  return (
    <header className="relative mx-auto max-w-[1200px] px-4 flex items-center justify-between">
      <div className="flex items-center gap-3 max-w-[120px]">
        <Link href="/">
          <Image src={logo} className="h-8 dark:invert" alt="logo" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-24 lg:gap-28">
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

      <input
        type="checkbox"
        id="menu-toggle"
        className="hidden peer"
        aria-label="Toggle Menu"
      />
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>

      <nav className="absolute top-16 left-0 z-10 w-full bg-background md:hidden hidden peer-checked:flex flex-col items-center gap-4 px-4 py-4 shadow">
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
        <a
          href="/api/auth/sign-out"
          className="text-sm font-medium text-red-500 hover:text-red-700 md:hidden"
        >
          Sair
        </a>
      </nav>

      <div className="hidden md:block">
        <ProfileButton />
      </div>
    </header>
  );
}
