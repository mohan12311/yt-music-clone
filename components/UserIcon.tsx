import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { cn } from "@/lib/utils";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar className={cn("w-6.5 h-6.5" && size === "lg" && "w-14 h-14")}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
