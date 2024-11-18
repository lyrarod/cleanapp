import { cn } from "@/lib/utils";
import { Handshake } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center text-lg italic lg:text-xl lg:gap-x-2 w-max drop-shadow-sm gap-x-1",
        className
      )}
    >
      <Handshake className="lg:size-8 size-7" /> <strong>CleanApp</strong>
    </a>
  );
};
