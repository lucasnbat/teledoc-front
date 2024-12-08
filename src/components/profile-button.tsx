import { auth } from "@/auth/auth";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

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
          <Avatar className="size-8">
            {patientFinded.patientName && (
              <AvatarFallback>
                {getInitials(patientFinded.patientName)}
              </AvatarFallback>
            )}
          </Avatar>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href=""></a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
