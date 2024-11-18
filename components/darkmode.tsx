"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Loader, Sun } from "lucide-react";
import { MoonIcon } from "@radix-ui/react-icons";

export const Darkmode = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    let htmlClass = document.documentElement.classList;
    isDark ? htmlClass.add("dark") : htmlClass.remove("dark");
  }, [isDark]);

  return (
    <Button
      onClick={() => setIsDark((prevState) => !prevState)}
      variant={"ghost"}
      size={"icon"}
      className={cn(className)}
    >
      {isMounted ? (
        isDark ? (
          <Sun />
        ) : (
          <MoonIcon />
        )
      ) : (
        <Loader className="animate-spin" />
      )}
    </Button>
  );
};
