"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Rocket } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6" />
          <span className="text-xl font-bold">TechXcelerate</span>
        </div>
        <div className="flex items-center gap-4">
          <ConnectButton />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}