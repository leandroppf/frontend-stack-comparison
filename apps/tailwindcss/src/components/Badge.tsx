"use client";

import { useMemo } from "react";

interface BadgeProps {
  color?: "primary" | "success" | "warning" | "danger" | String;
  label: String;
}

export default function Badge({ color = "primary", label }: BadgeProps) {
  const bgColorClass = useMemo(() => {
    if (color === "success") return "bg-emerald300-l dark:bg-emerald300-d";
    if (color === "warning") return "bg-gray300-l dark:bg-gray300-d";
    if (color === "danger") return "bg-red300-l dark:bg-red50-d";
    return "bg-indigo300-l dark:bg-indigo100-d";
  }, [color]);

  return (
    <div
      className={`${bgColorClass} rounded-2xl h-8 w-fit px-4 hover:opacity-90`}
    >
      <span className="text-textDefault-l dark:text-textDefault-d leading-8 text-xs font-bold">
        {label}
      </span>
    </div>
  );
}
