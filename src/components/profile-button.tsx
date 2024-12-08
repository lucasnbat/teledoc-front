import { auth } from "@/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ChevronDown, LogOut } from "lucide-react";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
  return initials;
}

export async function ProfileButton() {
  const { patientFinded } = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium">
            {patientFinded.patientName}
          </span>
          <span className="text-xs text-muted-foreground">
            {patientFinded.patientEmail}
          </span>
        </div>
        <Avatar className="size-8">
          {patientFinded.patientName && (
            <AvatarFallback>
              {getInitials(patientFinded.patientName)}
            </AvatarFallback>
          )}
        </Avatar>
        <ChevronDown className="size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/api/auth/sign-out">
            <LogOut className="mr-2 size-4" />
            Sair
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
