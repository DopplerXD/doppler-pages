"use client";

import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowButton({ children, onClick, className = "" }: GlowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`glow-button ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
